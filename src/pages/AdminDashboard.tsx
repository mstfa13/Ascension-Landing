/**
 * Admin Analytics Dashboard
 * View behavioral data collected from the landing page
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Users,
  MousePointerClick,
  Clock,
  TrendingDown,
  Activity,
  RefreshCw,
  Trash2,
  Eye,
  Scroll
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_ANALYTICS_API?.replace('/analytics', '') || '/api';

interface OverviewStats {
  totalSessions: number;
  totalEvents: number;
  uniquePageViews: number;
  ctaClicks: number;
  abandonments: number;
}

interface SectionData {
  section_id: string;
  exposures: number;
  unique_sessions: number;
}

interface ScrollData {
  percentage: number;
  count: number;
  unique_sessions: number;
}

interface CTAData {
  cta_type: string;
  cta_id: string;
  clicks: number;
  unique_sessions: number;
}

interface AbandonmentData {
  last_section: string;
  count: number;
  unique_sessions: number;
}

interface TimelineEvent {
  event: string;
  session_id: string;
  timestamp: number;
  data: Record<string, unknown>;
  created_at: string;
}

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Data states
  const [overview, setOverview] = useState<OverviewStats | null>(null);
  const [sections, setSections] = useState<SectionData[]>([]);
  const [scrollDepth, setScrollDepth] = useState<ScrollData[]>([]);
  const [ctaClicks, setCtaClicks] = useState<CTAData[]>([]);
  const [abandonments, setAbandonments] = useState<AbandonmentData[]>([]);
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [overviewRes, sectionsRes, scrollRes, ctaRes, abandonRes, timelineRes] = await Promise.all([
        fetch(`${API_BASE}/admin/overview?range=${timeRange}`),
        fetch(`${API_BASE}/admin/sections?range=${timeRange}`),
        fetch(`${API_BASE}/admin/scroll-depth?range=${timeRange}`),
        fetch(`${API_BASE}/admin/cta-clicks?range=${timeRange}`),
        fetch(`${API_BASE}/admin/abandonments?range=${timeRange}`),
        fetch(`${API_BASE}/admin/timeline?range=${timeRange}&limit=50`),
      ]);

      if (!overviewRes.ok) throw new Error('Failed to fetch data');

      setOverview(await overviewRes.json());
      setSections(await sectionsRes.json());
      setScrollDepth(await scrollRes.json());
      setCtaClicks(await ctaRes.json());
      setAbandonments(await abandonRes.json());
      setTimeline(await timelineRes.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load analytics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [timeRange]);

  const handlePurge = async () => {
    if (!confirm('Are you sure you want to delete data older than 30 days?')) return;
    
    try {
      const res = await fetch(`${API_BASE}/admin/purge?days=30`, { method: 'DELETE' });
      const data = await res.json();
      alert(`Deleted ${data.deleted} old events`);
      fetchData();
    } catch {
      alert('Failed to purge data');
    }
  };

  const formatTimestamp = (ts: number) => {
    return new Date(ts).toLocaleString();
  };

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    color 
  }: { 
    title: string; 
    value: number; 
    icon: React.ElementType; 
    color: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-800 border border-dark-700 rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-dark-400 text-sm mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{value.toLocaleString()}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="text-white" size={24} />
        </div>
      </div>
    </motion.div>
  );

  if (error) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <p className="text-dark-400 mb-4">Make sure the analytics server is running on port 3001</p>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-gold-500 text-dark-950 rounded-lg font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-dark-400">Privacy-minimal behavioral analytics</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Time Range Selector */}
            <div className="flex bg-dark-800 rounded-lg p-1">
              {(['24h', '7d', '30d'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-gold-500 text-dark-950'
                      : 'text-dark-300 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            
            <button
              onClick={fetchData}
              disabled={loading}
              className="p-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
            >
              <RefreshCw className={`${loading ? 'animate-spin' : ''}`} size={20} />
            </button>
            
            <button
              onClick={handlePurge}
              className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
              title="Purge old data"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        {loading && !overview ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="animate-spin text-gold-500" size={40} />
          </div>
        ) : (
          <>
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <StatCard
                title="Total Sessions"
                value={overview?.totalSessions || 0}
                icon={Users}
                color="bg-blue-500"
              />
              <StatCard
                title="Total Events"
                value={overview?.totalEvents || 0}
                icon={Activity}
                color="bg-green-500"
              />
              <StatCard
                title="Section Views"
                value={overview?.uniquePageViews || 0}
                icon={Eye}
                color="bg-purple-500"
              />
              <StatCard
                title="CTA Clicks"
                value={overview?.ctaClicks || 0}
                icon={MousePointerClick}
                color="bg-gold-500"
              />
              <StatCard
                title="Abandonments"
                value={overview?.abandonments || 0}
                icon={TrendingDown}
                color="bg-red-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Section Exposure */}
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="text-gold-500" size={20} />
                  <h2 className="text-lg font-semibold">Section Exposure</h2>
                </div>
                {sections.length === 0 ? (
                  <p className="text-dark-400 text-center py-8">No data yet</p>
                ) : (
                  <div className="space-y-3">
                    {sections.map((section) => {
                      const maxExposures = Math.max(...sections.map(s => s.exposures));
                      const width = (section.exposures / maxExposures) * 100;
                      return (
                        <div key={section.section_id}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-dark-300">{section.section_id}</span>
                            <span className="text-gold-400">{section.exposures} views</span>
                          </div>
                          <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${width}%` }}
                              className="h-full bg-gold-500 rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Scroll Depth */}
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Scroll className="text-gold-500" size={20} />
                  <h2 className="text-lg font-semibold">Scroll Depth</h2>
                </div>
                {scrollDepth.length === 0 ? (
                  <p className="text-dark-400 text-center py-8">No data yet</p>
                ) : (
                  <div className="grid grid-cols-4 gap-4">
                    {[25, 50, 75, 100].map((pct) => {
                      const data = scrollDepth.find(s => s.percentage === pct);
                      const totalSessions = overview?.totalSessions || 1;
                      const percentage = data ? Math.round((data.unique_sessions / totalSessions) * 100) : 0;
                      return (
                        <div key={pct} className="text-center">
                          <div className="relative w-20 h-20 mx-auto mb-2">
                            <svg className="w-20 h-20 transform -rotate-90">
                              <circle
                                cx="40"
                                cy="40"
                                r="32"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                                className="text-dark-700"
                              />
                              <motion.circle
                                cx="40"
                                cy="40"
                                r="32"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                                className="text-gold-500"
                                initial={{ strokeDasharray: "0 201" }}
                                animate={{ 
                                  strokeDasharray: `${(percentage / 100) * 201} 201` 
                                }}
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                              {percentage}%
                            </span>
                          </div>
                          <p className="text-dark-400 text-sm">{pct}% depth</p>
                          <p className="text-xs text-dark-500">{data?.unique_sessions || 0} users</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* CTA Clicks */}
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MousePointerClick className="text-gold-500" size={20} />
                  <h2 className="text-lg font-semibold">CTA Clicks</h2>
                </div>
                {ctaClicks.length === 0 ? (
                  <p className="text-dark-400 text-center py-8">No clicks yet</p>
                ) : (
                  <div className="space-y-2">
                    {ctaClicks.map((cta, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg"
                      >
                        <div>
                          <span className={`text-xs px-2 py-1 rounded mr-2 ${
                            cta.cta_type === 'primary' 
                              ? 'bg-gold-500/20 text-gold-400'
                              : cta.cta_type === 'secondary'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-purple-500/20 text-purple-400'
                          }`}>
                            {cta.cta_type}
                          </span>
                          <span className="text-dark-200">{cta.cta_id}</span>
                        </div>
                        <span className="text-gold-400 font-semibold">{cta.clicks} clicks</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Abandonment Points */}
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="text-red-500" size={20} />
                  <h2 className="text-lg font-semibold">Abandonment Points</h2>
                </div>
                {abandonments.length === 0 ? (
                  <p className="text-dark-400 text-center py-8">No abandonments tracked</p>
                ) : (
                  <div className="space-y-2">
                    {abandonments.map((item, i) => {
                      const total = abandonments.reduce((sum, a) => sum + a.count, 0);
                      const pct = Math.round((item.count / total) * 100);
                      return (
                        <div key={i} className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                              <span className="text-red-400 font-bold">{pct}%</span>
                            </div>
                            <span className="text-dark-200">{item.last_section}</span>
                          </div>
                          <span className="text-dark-400">{item.count} users left here</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Event Timeline */}
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-gold-500" size={20} />
                <h2 className="text-lg font-semibold">Recent Events</h2>
              </div>
              {timeline.length === 0 ? (
                <p className="text-dark-400 text-center py-8">No events yet</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-dark-400 border-b border-dark-700">
                        <th className="pb-3 pr-4">Time</th>
                        <th className="pb-3 pr-4">Event</th>
                        <th className="pb-3 pr-4">Session</th>
                        <th className="pb-3">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeline.slice(0, 20).map((event, i) => (
                        <tr key={i} className="border-b border-dark-700/50">
                          <td className="py-2 pr-4 text-dark-400">
                            {formatTimestamp(event.timestamp)}
                          </td>
                          <td className="py-2 pr-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              event.event === 'section_exposed' ? 'bg-blue-500/20 text-blue-400' :
                              event.event === 'scroll_depth' ? 'bg-green-500/20 text-green-400' :
                              event.event === 'cta_click' ? 'bg-gold-500/20 text-gold-400' :
                              event.event === 'page_abandonment' ? 'bg-red-500/20 text-red-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {event.event}
                            </span>
                          </td>
                          <td className="py-2 pr-4 text-dark-400 font-mono text-xs">
                            {event.session_id.slice(0, 12)}...
                          </td>
                          <td className="py-2 text-dark-300">
                            {JSON.stringify(event.data)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
