import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Users,
  Clock,
  Target,
  Dumbbell,
  Utensils,
  Brain,
  HeartPulse,
  Shield,
  Zap,
  TrendingUp,
  Play
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const painPoints = [
    {
      icon: TrendingUp,
      title: "Stuck at a Plateau",
      description: "You've tried everything but can't break through to the next level. The scale won't budge and your progress has stalled."
    },
    {
      icon: Clock,
      title: "No Time for the Gym",
      description: "Between work, family, and life, finding time to workout feels impossible. You need a system that fits YOUR schedule."
    },
    {
      icon: Target,
      title: "Confused About Nutrition",
      description: "Conflicting advice everywhere. Should you do keto? Intermittent fasting? You're paralyzed by information overload."
    },
    {
      icon: Zap,
      title: "Zero Energy & Motivation",
      description: "You start strong but always fall off. By 3pm you're exhausted and the couch wins over the gym every time."
    }
  ];

  const methodPillars = [
    {
      icon: Dumbbell,
      title: "Strategic Training",
      description: "Science-backed workout protocols designed for maximum results in minimum time. No more wasted hours."
    },
    {
      icon: Utensils,
      title: "Precision Nutrition",
      description: "Flexible meal strategies that fuel performance without restrictive dieting. Eat foods you love."
    },
    {
      icon: Brain,
      title: "Mindset Mastery",
      description: "Break limiting beliefs and build the mental fortitude of elite performers. Discipline becomes automatic."
    },
    {
      icon: HeartPulse,
      title: "Recovery Optimization",
      description: "Sleep, stress management, and recovery protocols that supercharge your results and energy."
    },
    {
      icon: Users,
      title: "Accountability System",
      description: "Weekly check-ins, 24/7 support, and a community that keeps you on track when motivation fades."
    }
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Clients Transformed' },
    { value: 15000, suffix: '+', label: 'Pounds Lost' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 12, suffix: '+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Business Executive, 42",
      quote: "I lost 35 pounds in 12 weeks while working 60+ hour weeks. Dr. M3ta's system is the only thing that's ever worked around my insane schedule. My energy is through the roof.",
      results: "Lost 35 lbs in 12 weeks",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      role: "Mother of 3, 38",
      quote: "After 3 kids, I thought my body would never bounce back. I was wrong. The nutrition guidance alone was a game-changer. I'm in better shape now than my 20s!",
      results: "Lost 28 lbs, gained confidence",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Former Athlete, 35",
      quote: "I went from dad bod back to athlete in 16 weeks. The training is intense but efficient. Coach M3ta knows exactly how to push you without breaking you.",
      results: "Gained 12 lbs muscle, dropped 8% body fat",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section id="hero" data-section="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
                <Star className="text-gold-400 fill-gold-400" size={16} />
                <span className="text-gold-400 text-sm font-medium">Rated #1 Transformation Coach 2025</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Stop Struggling.
                <br />
                <span className="gradient-text">Start Ascending.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0">
                The elite transformation system for busy professionals who refuse to settle for an average body. Get the physique you deserve in 90 days or less.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/sales" className="btn-primary text-lg flex items-center justify-center gap-2">
                  <span>Start Your Transformation</span>
                  <ArrowRight size={20} />
                </Link>
                <a href="#method" className="btn-secondary flex items-center justify-center gap-2">
                  <Play size={20} />
                  <span>See How It Works</span>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-dark-400">
                <div className="flex items-center gap-2">
                  <Shield className="text-gold-500" size={18} />
                  <span>60-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-gold-500" size={18} />
                  <span>Certified Coach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-gold-500" size={18} />
                  <span>500+ Transformations</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image/Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
                  alt="Personal Training Session"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Overlay Stats */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-950/90 backdrop-blur-lg rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold gradient-text">500+</div>
                      <div className="text-xs text-dark-400">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">98%</div>
                      <div className="text-xs text-dark-400">Success</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">12yr</div>
                      <div className="text-xs text-dark-400">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gold-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Problem-Agitation Section */}
      <section id="pain-points" data-section="pain-points" className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              SOUND FAMILIAR?
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              You're <span className="gradient-text">Tired of Feeling</span> Like This
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-dark-300 text-lg">
              You've tried the diets, the workout programs, the apps. Nothing sticks. You're not lazy—you just haven't found the right system. Until now.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-6 hover:border-crimson-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-crimson-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-crimson-500/30 transition-colors">
                  <point.icon className="text-crimson-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-dark-400">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-dark-300 mb-6">
              <span className="text-white font-bold">What if there was a better way?</span> A system designed specifically for people like you?
            </p>
            <a href="#method" className="text-gold-400 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Discover The Ascension Method <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transformations" data-section="transformations" className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              REAL RESULTS FROM REAL PEOPLE
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transformations That <span className="gradient-text">Speak For Themselves</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-dark-300 text-lg">
              These aren't models. They're everyday people with busy lives who decided to take control. Now it's your turn.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/success-stories"
              className="inline-flex items-center gap-2 text-gold-400 font-medium hover:gap-3 transition-all"
            >
              See All Success Stories <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Method/System Section */}
      <section id="method" data-section="method" className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              THE ASCENSION METHOD
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The 5-Pillar System That <span className="gradient-text">Actually Works</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-dark-300 text-lg">
              Unlike generic programs that treat everyone the same, The Ascension Method adapts to YOUR life, YOUR goals, and YOUR body. Here's why it works when everything else has failed:
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-colors">
                  <pillar.icon className="text-gold-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-dark-400">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/sales" className="btn-primary text-lg inline-flex items-center gap-2">
              <span>See How To Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} id="stats" data-section="stats" className="py-20 bg-dark-950 border-y border-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-item"
              >
                <div className="stat-number">
                  {statsInView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Band */}
      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 border-2 border-dark-900 flex items-center justify-center">
                    <span className="text-xs font-bold text-dark-950">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <div className="ml-2">
                <div className="flex text-gold-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-gold-400" />
                  ))}
                </div>
                <p className="text-sm text-dark-400">500+ 5-star reviews</p>
              </div>
            </div>

            <div className="h-8 w-px bg-dark-700 hidden md:block" />

            <div className="flex items-center gap-4">
              <Award className="text-gold-500" size={32} />
              <div>
                <p className="font-bold text-white">NASM Certified</p>
                <p className="text-sm text-dark-400">Elite Trainer</p>
              </div>
            </div>

            <div className="h-8 w-px bg-dark-700 hidden md:block" />

            <div className="flex items-center gap-4">
              <Shield className="text-gold-500" size={32} />
              <div>
                <p className="font-bold text-white">60-Day</p>
                <p className="text-sm text-dark-400">Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" data-section="final-cta" className="py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Become the <span className="gradient-text">Best Version of Yourself?</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful clients who've transformed their bodies and lives with The Ascension Method. Your journey starts with a single decision.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/sales" className="btn-primary text-lg flex items-center justify-center gap-2 pulse-glow">
                <span>Claim Your Transformation</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>No pressure consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>60-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Results in 90 days or less</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
