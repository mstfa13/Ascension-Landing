/**
 * Privacy-Minimal Analytics Server
 * Stores anonymous behavioral data only
 * No personal data, no fingerprints, no IP logging
 */

import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json({ limit: '100kb' }));

// Initialize SQLite database
const db = new Database(join(__dirname, 'analytics.db'));

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event TEXT NOT NULL,
    session_id TEXT NOT NULL,
    timestamp INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    data TEXT
  );

  CREATE INDEX IF NOT EXISTS idx_event ON events(event);
  CREATE INDEX IF NOT EXISTS idx_session ON events(session_id);
  CREATE INDEX IF NOT EXISTS idx_timestamp ON events(timestamp);
  CREATE INDEX IF NOT EXISTS idx_created_at ON events(created_at);
`);

// Prepared statements for performance
const insertEvent = db.prepare(`
  INSERT INTO events (event, session_id, timestamp, data)
  VALUES (?, ?, ?, ?)
`);

const insertMany = db.transaction((events) => {
  for (const event of events) {
    const { event: eventType, session_id, timestamp, ...rest } = event;
    insertEvent.run(eventType, session_id, timestamp, JSON.stringify(rest));
  }
});

// ===== API ROUTES =====

// Ingest events (POST /api/analytics)
app.post('/api/analytics', (req, res) => {
  try {
    const { events } = req.body;
    
    if (!Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ error: 'Invalid events array' });
    }

    // Validate events
    const validEvents = events.filter(e => 
      e.event && 
      e.session_id && 
      e.timestamp &&
      typeof e.event === 'string' &&
      typeof e.session_id === 'string' &&
      typeof e.timestamp === 'number'
    );

    if (validEvents.length > 0) {
      insertMany(validEvents);
    }

    res.json({ success: true, ingested: validEvents.length });
  } catch (error) {
    console.error('Ingest error:', error);
    res.status(500).json({ error: 'Failed to ingest events' });
  }
});

// ===== ADMIN DASHBOARD API =====

// Get overview stats
app.get('/api/admin/overview', (req, res) => {
  try {
    const timeRange = req.query.range || '24h';
    const hoursAgo = timeRange === '7d' ? 168 : timeRange === '30d' ? 720 : 24;
    const sinceTimestamp = Date.now() - (hoursAgo * 60 * 60 * 1000);

    const stats = {
      totalSessions: db.prepare(`
        SELECT COUNT(DISTINCT session_id) as count 
        FROM events WHERE timestamp >= ?
      `).get(sinceTimestamp).count,

      totalEvents: db.prepare(`
        SELECT COUNT(*) as count 
        FROM events WHERE timestamp >= ?
      `).get(sinceTimestamp).count,

      uniquePageViews: db.prepare(`
        SELECT COUNT(*) as count 
        FROM events 
        WHERE event = 'section_exposed' AND timestamp >= ?
      `).get(sinceTimestamp).count,

      ctaClicks: db.prepare(`
        SELECT COUNT(*) as count 
        FROM events 
        WHERE event = 'cta_click' AND timestamp >= ?
      `).get(sinceTimestamp).count,

      abandonments: db.prepare(`
        SELECT COUNT(*) as count 
        FROM events 
        WHERE event = 'page_abandonment' AND timestamp >= ?
      `).get(sinceTimestamp).count,
    };

    res.json(stats);
  } catch (error) {
    console.error('Overview error:', error);
    res.status(500).json({ error: 'Failed to get overview' });
  }
});

// Get section exposure data
app.get('/api/admin/sections', (req, res) => {
  try {
    const timeRange = req.query.range || '24h';
    const hoursAgo = timeRange === '7d' ? 168 : timeRange === '30d' ? 720 : 24;
    const sinceTimestamp = Date.now() - (hoursAgo * 60 * 60 * 1000);

    const sections = db.prepare(`
      SELECT 
        json_extract(data, '$.section_id') as section_id,
        COUNT(*) as exposures,
        COUNT(DISTINCT session_id) as unique_sessions
      FROM events 
      WHERE event = 'section_exposed' AND timestamp >= ?
      GROUP BY section_id
      ORDER BY exposures DESC
    `).all(sinceTimestamp);

    res.json(sections);
  } catch (error) {
    console.error('Sections error:', error);
    res.status(500).json({ error: 'Failed to get sections' });
  }
});

// Get scroll depth data
app.get('/api/admin/scroll-depth', (req, res) => {
  try {
    const timeRange = req.query.range || '24h';
    const hoursAgo = timeRange === '7d' ? 168 : timeRange === '30d' ? 720 : 24;
    const sinceTimestamp = Date.now() - (hoursAgo * 60 * 60 * 1000);

    const scrollData = db.prepare(`
      SELECT 
        json_extract(data, '$.percentage') as percentage,
        COUNT(*) as count,
        COUNT(DISTINCT session_id) as unique_sessions
      FROM events 
      WHERE event = 'scroll_depth' AND timestamp >= ?
      GROUP BY percentage
      ORDER BY percentage ASC
    `).all(sinceTimestamp);

    res.json(scrollData);
  } catch (error) {
    console.error('Scroll depth error:', error);
    res.status(500).json({ error: 'Failed to get scroll depth' });
  }
});

// Get time-on-section data
app.get('/api/admin/section-time', (req, res) => {
  try {
    const timeRange = req.query.range || '24h';
    const hoursAgo = timeRange === '7d' ? 168 : timeRange === '30d' ? 720 : 24;
    const sinceTimestamp = Date.now() - (hoursAgo * 60 * 60 * 1000);

    const timeData = db.prepare(`
      SELECT 
        json_extract(data, '$.section_id') as section_id,
        json_extract(data, '$.threshold') as threshold,
        COUNT(*) as count,
        COUNT(DISTINCT session_id) as unique_sessions
      FROM events 
      WHERE event = 'section_time_threshold' AND timestamp >= ?
      GROUP BY section_id, threshold
      ORDER BY section_id, threshold
    `).all(sinceTimestamp);

    res.json(timeData);
  } catch (error) {
    console.error('Section time error:', error);
    res.status(500).json({ error: 'Failed to get section time' });
  }
});

// Get CTA click data
app.get('/api/admin/cta-clicks', (req, res) => {
  try {
    const timeRange = req.query.range || '24h';
    const hoursAgo = timeRange === '7d' ? 168 : timeRange === '30d' ? 720 : 24;
    const sinceTimestamp = Date.now() - (hoursAgo * 60 * 60 * 1000);

    const ctaData = db.prepare(`
      SELECT 
        json_extract(data, '$.cta_type') as cta_type,
        json_extract(data, '$.cta_id') as cta_id,
        COUNT(*) as clicks,
        COUNT(DISTINCT session_id) as unique_sessions
      FROM events 
      WHERE event = 'cta_click' AND timestamp >= ?
      GROUP BY cta_type, cta_id
      ORDER BY clicks DESC
    `).all(sinceTimestamp);

    res.json(ctaData);
  } catch (error) {
    console.error('CTA clicks error:', error);
    res.status(500).json({ error: 'Failed to get CTA clicks' });
  }
});

// Get abandonment data
app.get('/api/admin/abandonments', (req, res) => {
  try {
    const timeRange = req.query.range || '24h';
    const hoursAgo = timeRange === '7d' ? 168 : timeRange === '30d' ? 720 : 24;
    const sinceTimestamp = Date.now() - (hoursAgo * 60 * 60 * 1000);

    const abandonmentData = db.prepare(`
      SELECT 
        json_extract(data, '$.last_section_id') as last_section,
        COUNT(*) as count,
        COUNT(DISTINCT session_id) as unique_sessions
      FROM events 
      WHERE event = 'page_abandonment' AND timestamp >= ?
      GROUP BY last_section
      ORDER BY count DESC
    `).all(sinceTimestamp);

    res.json(abandonmentData);
  } catch (error) {
    console.error('Abandonments error:', error);
    res.status(500).json({ error: 'Failed to get abandonments' });
  }
});

// Get events timeline (for debugging/detailed view)
app.get('/api/admin/timeline', (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 100, 500);
    const timeRange = req.query.range || '24h';
    const hoursAgo = timeRange === '7d' ? 168 : timeRange === '30d' ? 720 : 24;
    const sinceTimestamp = Date.now() - (hoursAgo * 60 * 60 * 1000);

    const timeline = db.prepare(`
      SELECT event, session_id, timestamp, data, created_at
      FROM events 
      WHERE timestamp >= ?
      ORDER BY timestamp DESC
      LIMIT ?
    `).all(sinceTimestamp, limit);

    res.json(timeline.map(row => ({
      ...row,
      data: JSON.parse(row.data || '{}')
    })));
  } catch (error) {
    console.error('Timeline error:', error);
    res.status(500).json({ error: 'Failed to get timeline' });
  }
});

// Data cleanup endpoint (for GDPR-like compliance)
app.delete('/api/admin/purge', (req, res) => {
  try {
    const daysOld = parseInt(req.query.days) || 30;
    const cutoffTimestamp = Date.now() - (daysOld * 24 * 60 * 60 * 1000);
    
    const result = db.prepare(`
      DELETE FROM events WHERE timestamp < ?
    `).run(cutoffTimestamp);

    res.json({ 
      success: true, 
      deleted: result.changes,
      message: `Deleted events older than ${daysOld} days`
    });
  } catch (error) {
    console.error('Purge error:', error);
    res.status(500).json({ error: 'Failed to purge data' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// Start server
app.listen(PORT, () => {
  console.log(`📊 Analytics server running on port ${PORT}`);
  console.log(`   - Event ingestion: POST /api/analytics`);
  console.log(`   - Admin dashboard: /api/admin/*`);
});
