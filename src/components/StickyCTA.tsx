import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of the first viewport height
      const scrollThreshold = window.innerHeight * 0.5;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-t border-gold-500/30 p-4 z-50"
        >
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Text */}
              <div className="text-center sm:text-left">
                <p className="text-white font-bold text-lg">
                  Ready to Transform Your Body & Life?
                </p>
                <p className="text-dark-400 text-sm">
                  Join 500+ clients who've achieved their dream physique
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <Link
                  to="/sales"
                  className="btn-primary flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={18} />
                </Link>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors text-dark-400 hover:text-white"
                  aria-label="Dismiss"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
