import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeadMagnetPopup from './components/LeadMagnetPopup';
import StickyCTA from './components/StickyCTA';
import Home from './pages/Home';
import Sales from './pages/Sales';
import About from './pages/About';
import Programs from './pages/Programs';
import SuccessStories from './pages/SuccessStories';
import AdminDashboard from './pages/AdminDashboard';
import AnalyticsInit from './hooks/AnalyticsInit';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);

  useEffect(() => {
    // Check if popup was already shown this session
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupDismissed(true);
    sessionStorage.setItem('popupShown', 'true');
  };

  return (
    <Router>
      <AppContent 
        showPopup={showPopup} 
        popupDismissed={popupDismissed}
        handleClosePopup={handleClosePopup}
      />
    </Router>
  );
}

// Separate component to use hooks inside Router
function AppContent({ 
  showPopup, 
  popupDismissed, 
  handleClosePopup 
}: { 
  showPopup: boolean; 
  popupDismissed: boolean; 
  handleClosePopup: () => void;
}) {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-dark-950">
      {!isAdmin && <Header />}
      {!isAdmin && <AnalyticsInit />}
      
      {showPopup && !popupDismissed && !isAdmin && (
        <LeadMagnetPopup onClose={handleClosePopup} />
      )}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      {!isAdmin && <Footer />}
      {!isAdmin && <StickyCTA />}
    </div>
  );
}

export default App;
