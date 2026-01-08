import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, CheckCircle, Loader2 } from 'lucide-react';

interface LeadMagnetPopupProps {
  onClose: () => void;
}

const LeadMagnetPopup = ({ onClose }: LeadMagnetPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Close after success message
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    '7-Day Elite Workout Program',
    'Custom Meal Plan Template',
    'Supplement Optimization Guide',
    'Mindset Mastery Techniques'
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-dark-900 rounded-2xl overflow-hidden border border-gold-500/30"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors text-dark-400 hover:text-white"
          >
            <X size={20} />
          </button>

          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 p-6 text-center">
            <div className="w-16 h-16 bg-dark-950 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="text-gold-400" size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-2">
              FREE: 7-Day Transformation Starter Kit
            </h2>
            <p className="text-dark-800 text-sm">
              Unlock the exact system that's helped 500+ clients transform their bodies
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isSuccess ? (
              <>
                {/* Benefits List */}
                <div className="mb-6 space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                      <span className="text-dark-200">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your First Name"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>GET MY FREE STARTER KIT →</span>
                    )}
                  </button>
                </form>

                {/* Privacy Note */}
                <p className="text-center text-dark-500 text-xs mt-4">
                  🔒 We respect your privacy. No spam, unsubscribe anytime.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-500" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
                <p className="text-dark-300">Check your email for your free starter kit!</p>
              </motion.div>
            )}
          </div>

          {/* FOMO Footer */}
          {!isSuccess && (
            <div className="bg-dark-800 p-4 text-center border-t border-dark-700">
              <p className="text-dark-300 text-sm">
                <span className="text-gold-400 font-bold">⚡ Limited Time:</span> Get an additional bonus workout when you sign up today!
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeadMagnetPopup;
