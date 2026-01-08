import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  Award,
  Users,
  Target,
  Heart,
  Brain,
  Dumbbell,
  GraduationCap,
  Trophy,
  ArrowRight,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

const About = () => {
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

  const credentials = [
    { icon: GraduationCap, title: "PhD", description: "Exercise Physiology" },
    { icon: Award, title: "NASM-CPT", description: "Certified Personal Trainer" },
    { icon: Award, title: "CSCS", description: "Strength & Conditioning" },
    { icon: Award, title: "PN Level 2", description: "Precision Nutrition Coach" },
    { icon: Trophy, title: "12+ Years", description: "Professional Experience" },
    { icon: Users, title: "500+", description: "Clients Transformed" },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Obsessed",
      description: "Everything we do is measured by outcomes. If it doesn't produce results, we don't do it."
    },
    {
      icon: Heart,
      title: "Client-First",
      description: "Your success is our success. We're in your corner 24/7, not just during sessions."
    },
    {
      icon: Brain,
      title: "Science-Backed",
      description: "No bro-science here. Every protocol is grounded in peer-reviewed research and real-world testing."
    },
    {
      icon: Dumbbell,
      title: "No Shortcuts",
      description: "We believe in sustainable transformation, not quick fixes that leave you worse off."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Started training clients in a small garage gym while completing my Master's degree in Exercise Science."
    },
    {
      year: "2014",
      title: "Going Pro",
      description: "Earned PhD in Exercise Physiology and began working with professional athletes and executives."
    },
    {
      year: "2018",
      title: "Online Expansion",
      description: "Launched the Ascension Method online coaching program to reach clients worldwide."
    },
    {
      year: "2022",
      title: "500+ Transformations",
      description: "Hit the milestone of 500+ successful client transformations across 20+ countries."
    },
    {
      year: "2026",
      title: "The Future",
      description: "Continuing to refine the system and help more high-performers unlock their physical potential."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
                THE COACH BEHIND ASCENSION
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet <span className="gradient-text">Dr. M3ta</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8">
                PhD in Exercise Physiology. 12+ years transforming bodies. 500+ success stories. 
                One mission: helping you become the best version of yourself.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/sales" className="btn-primary inline-flex items-center gap-2">
                  <span>Work With Me</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glow-gold">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
                  alt="Dr. M3ta"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-12 bg-dark-900 border-y border-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <cred.icon className="text-gold-400" size={24} />
                </div>
                <h4 className="font-bold text-white">{cred.title}</h4>
                <p className="text-sm text-dark-400">{cred.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4 text-center">
              MY STORY
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
              Why I Dedicated My Life to <span className="gradient-text">Transformation</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 md:p-12">
              <div className="prose prose-lg prose-invert max-w-none space-y-6 text-dark-300">
                <p>
                  Growing up, I was the overweight kid who got picked last for every team. I know what it feels like to be uncomfortable in your own skin—to avoid mirrors, to dread social situations, to feel like your body is holding you back from the life you want.
                </p>
                
                <p>
                  At 18, I decided enough was enough. But when I tried to change, I ran into the same walls you probably have: <strong className="text-white">conflicting advice, programs that didn't fit my life, and zero accountability.</strong>
                </p>
                
                <p>
                  So I became obsessed with finding what actually works. I earned my PhD in Exercise Physiology, collected every certification worth having, and spent over a decade working with hundreds of real people—not lab rats.
                </p>
                
                <div className="my-8 p-6 bg-dark-800/50 rounded-xl border-l-4 border-gold-500">
                  <Quote className="text-gold-500/30 mb-2" size={32} />
                  <p className="text-lg italic text-white">
                    "I've learned that transformation isn't about the perfect workout or diet. It's about building a system that works for YOUR life, with the right support to keep you going when motivation fades."
                  </p>
                </div>
                
                <p>
                  That's why I created the Ascension Method—a complete system that combines <strong className="text-gold-400">science-backed training, flexible nutrition, mindset coaching, and relentless accountability.</strong>
                </p>
                
                <p>
                  Today, I've helped over 500 people transform their bodies and lives. From Fortune 500 CEOs to busy parents, from former athletes to complete beginners. The common thread? They all decided they deserved better—and they were willing to invest in themselves to get it.
                </p>
                
                <p className="text-white font-bold text-xl">
                  If that sounds like you, I'd be honored to be your guide on this journey.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              THE JOURNEY
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              How Ascension <span className="gradient-text">Evolved</span>
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-700" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                    <span className="text-gold-400 font-bold text-2xl">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                    <p className="text-dark-400 mt-2">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-8 md:relative md:left-0 w-4 h-4 bg-gold-500 rounded-full flex-shrink-0 z-10" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              WHAT I STAND FOR
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My Core <span className="gradient-text">Values</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 text-center hover:border-gold-500/50 transition-all"
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-gold-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-dark-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 bg-dark-900 border-y border-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: '+', label: 'Clients Transformed' },
              { value: 12, suffix: '+', label: 'Years Experience' },
              { value: 98, suffix: '%', label: 'Success Rate' },
              { value: 20, suffix: '+', label: 'Countries Reached' }
            ].map((stat, index) => (
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Write <span className="gradient-text">Your Success Story?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8">
              Join the 500+ people who've transformed their bodies and lives with the Ascension Method. Your journey starts with a single decision.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sales" className="btn-primary text-lg flex items-center justify-center gap-2">
                <span>Start Your Transformation</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/success-stories" className="btn-secondary flex items-center justify-center gap-2">
                <Star size={20} />
                <span>See Success Stories</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
