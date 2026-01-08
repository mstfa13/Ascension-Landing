import { useState } from 'react';
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
  Shield,
  Zap,
  Play,
  Check,
  X,
  Gift,
  Lock,
  CreditCard,
  AlertCircle,
  ChevronRight,
  Flame,
  Target,
  Dumbbell,
  Utensils,
  Brain,
  HeartPulse,
  MessageCircle,
  Calendar,
  Video,
  FileText,
  Smartphone,
  BadgeCheck
} from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import FAQAccordion from '../components/FAQAccordion';
import TestimonialCard from '../components/TestimonialCard';

const Sales = () => {
  const [selectedPlan, setSelectedPlan] = useState<'full' | 'payment'>('full');
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

  const caseStudies = [
    {
      name: "James Rodriguez",
      age: 45,
      role: "CEO, Tech Company",
      before: { weight: 235, bodyFat: 32, energy: "Exhausted by 2pm" },
      after: { weight: 195, bodyFat: 18, energy: "All-day energy" },
      quote: "I went from dreading my reflection to getting compliments from my wife daily. Dr. M3ta gave me my confidence back. The investment paid for itself 10x in how I show up as a leader.",
      timeframe: "16 weeks"
    },
    {
      name: "Amanda Foster",
      age: 36,
      role: "Corporate Lawyer, Mom of 2",
      before: { weight: 178, bodyFat: 35, energy: "Coffee-dependent" },
      after: { weight: 142, bodyFat: 22, energy: "Natural vitality" },
      quote: "Between depositions and soccer practice, I thought I had no time. Coach M3ta showed me I had 20 minutes a day—and that's all it took. Lost 36 pounds and gained my life back.",
      timeframe: "12 weeks"
    },
    {
      name: "Michael Thompson",
      age: 52,
      role: "Retired Military, Business Owner",
      before: { weight: 248, bodyFat: 34, energy: "Chronic fatigue" },
      after: { weight: 205, bodyFat: 19, energy: "Military-ready again" },
      quote: "I'd let myself go after retiring. This program brought back the discipline and the body I had in my 30s. At 52, I'm in the best shape of my civilian life.",
      timeframe: "20 weeks"
    }
  ];

  const programModules = [
    {
      icon: Dumbbell,
      title: "Custom Training Protocol",
      description: "Personalized workout programs designed for YOUR goals, schedule, and equipment access",
      value: "$997"
    },
    {
      icon: Utensils,
      title: "Precision Nutrition System",
      description: "Flexible meal plans, macro calculations, and food strategies that fit your lifestyle",
      value: "$497"
    },
    {
      icon: Brain,
      title: "Mindset Mastery Course",
      description: "12 modules of mental performance training used by elite athletes and executives",
      value: "$397"
    },
    {
      icon: MessageCircle,
      title: "Weekly 1-on-1 Coaching Calls",
      description: "Private coaching sessions to review progress, adjust plans, and break through plateaus",
      value: "$1,200"
    },
    {
      icon: Smartphone,
      title: "M3ta Tracking App Access",
      description: "Custom app with workout tracking, meal logging, and progress analytics",
      value: "$47/mo"
    },
    {
      icon: Users,
      title: "Private Community Access",
      description: "Join the Ascension Brotherhood/Sisterhood for support, accountability, and motivation",
      value: "$197"
    }
  ];

  const bonuses = [
    {
      icon: FileText,
      title: "Supplement Optimization Guide",
      description: "Know exactly what to take (and what's a waste of money) for maximum results",
      value: "$97"
    },
    {
      icon: Calendar,
      title: "12-Week Meal Prep Masterclass",
      description: "Save 10+ hours per week with batch cooking strategies that actually work",
      value: "$197"
    },
    {
      icon: HeartPulse,
      title: "Sleep & Recovery Protocol",
      description: "Optimize your rest to accelerate results and wake up energized",
      value: "$147"
    },
    {
      icon: Video,
      title: "Exercise Video Library",
      description: "200+ HD demonstration videos with perfect form cues and modifications",
      value: "$297"
    },
    {
      icon: Flame,
      title: "Metabolic Reset Blueprint",
      description: "Fix a damaged metabolism and turn your body into a fat-burning machine",
      value: "$247"
    }
  ];

  const faqs = [
    {
      question: "Is this program right for me if I'm a complete beginner?",
      answer: "Absolutely. The Ascension Method is designed to meet you where you are. Whether you haven't exercised in years or you're a seasoned gym-goer looking to break through a plateau, we customize everything to your current fitness level. Many of our most dramatic transformations came from complete beginners."
    },
    {
      question: "How much time do I need to commit each week?",
      answer: "Our most successful clients invest 3-5 hours per week total—that's about 45 minutes per day, 4-5 days per week. The workouts are efficient and science-backed, designed for maximum results in minimum time. If you're busy (and who isn't?), this program was built for you."
    },
    {
      question: "What if I've tried other programs and failed?",
      answer: "Perfect. You're our ideal client. The reason other programs failed isn't because of you—it's because they weren't personalized. Generic programs create generic results (or none at all). The Ascension Method adapts to YOUR life, YOUR body, and YOUR goals. That's why we have a 98% success rate."
    },
    {
      question: "Do I need access to a gym or special equipment?",
      answer: "No. While gym access is a plus, we design programs that work with whatever you have—home gym, hotel room, or full commercial gym. Many clients see incredible results with just dumbbells and a bench."
    },
    {
      question: "What if I have dietary restrictions or food preferences?",
      answer: "We work with everything: vegan, keto, gluten-free, allergies, religious restrictions—you name it. Your nutrition plan is 100% customized to foods you actually enjoy eating. No force-feeding boiled chicken and broccoli here."
    },
    {
      question: "How is this different from just hiring a personal trainer?",
      answer: "Traditional personal training only addresses exercise. The Ascension Method is a complete transformation system covering training, nutrition, mindset, recovery, and accountability. Plus, you get 24/7 access to coaching support, not just 2-3 hours a week in a gym. And it's a fraction of the cost."
    },
    {
      question: "What if I don't see results?",
      answer: "That's what our 60-Day Money-Back Guarantee is for. Show up, do the work, and if you don't see measurable results in 60 days, we'll refund every penny. No questions asked. We're that confident in the system."
    },
    {
      question: "Can I do this program if I have injuries or health conditions?",
      answer: "Yes, with clearance from your doctor. We work with clients who have back issues, knee problems, shoulder injuries, and various health conditions. Every program is modified to work around your limitations while still delivering results."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients notice increased energy and better sleep within the first week. Visible physical changes typically appear within 2-3 weeks. Dramatic transformations—the kind that make people ask 'what are you doing?'—usually happen between weeks 8-12."
    },
    {
      question: "Is there a payment plan available?",
      answer: "Yes! We offer flexible payment options to make the program accessible. You can pay in full and save, or choose our 3-month payment plan. See the pricing section for details."
    },
    {
      question: "What happens after the 12-week program ends?",
      answer: "You'll have lifetime access to all program materials, the app, and the community. Many clients continue with ongoing coaching at a reduced rate, while others have developed the habits and knowledge to maintain their results independently. Either way, you're set for life."
    },
    {
      question: "How do I get started?",
      answer: "Click any 'Enroll Now' button on this page. You'll complete a brief application and intake form, then we'll schedule your strategy call to design your custom plan. Most clients start their transformation within 48 hours of enrolling."
    }
  ];

  const scrollToCTA = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const CTAButton = ({ variant = 'primary', text = "Claim Your Transformation" }: { variant?: 'primary' | 'secondary', text?: string }) => (
    <button
      onClick={scrollToCTA}
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} text-lg flex items-center justify-center gap-2 w-full sm:w-auto`}
    >
      <span>{text}</span>
      <ArrowRight size={20} />
    </button>
  );

  return (
    <div className="pt-20">
      {/* Pre-Headline + Hero */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920')] bg-cover bg-center opacity-5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Pre-Headline */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-crimson-500/20 border border-crimson-500/30 rounded-full px-4 py-2 mb-6">
              <AlertCircle className="text-crimson-400" size={16} />
              <span className="text-crimson-400 text-sm font-medium">WARNING: This Is NOT Another Generic Fitness Program</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              How Busy Professionals Are Losing <span className="gradient-text">15-30 Pounds in 90 Days</span> Without Restrictive Diets or Living in the Gym
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8 max-w-3xl mx-auto">
              Discover the elite transformation system that's helped over 500 executives, entrepreneurs, and high-performers build their dream physique while working 60+ hour weeks.
            </motion.p>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="trust-badge">
                <BadgeCheck className="text-gold-500" size={18} />
                <span>12+ Years Experience</span>
              </div>
              <div className="trust-badge">
                <Users className="text-gold-500" size={18} />
                <span>500+ Transformations</span>
              </div>
              <div className="trust-badge">
                <Shield className="text-gold-500" size={18} />
                <span>60-Day Guarantee</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CTAButton text="Yes, I'm Ready To Transform →" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Countdown/Urgency Banner */}
      <section className="py-8 bg-gradient-to-r from-crimson-600 to-crimson-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <Clock className="text-white" size={24} />
              <span className="text-white font-bold text-lg">EARLY 2026 SPECIAL ENDS IN:</span>
            </div>
            <CountdownTimer />
            <span className="text-white/80 text-sm">Save $500 + Get 5 Exclusive Bonuses</span>
          </div>
        </div>
      </section>

      {/* Opening Story/Hook */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4 text-center">
                A LETTER FROM DR. M3TA
              </motion.p>
              
              <motion.div variants={fadeInUp} className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 md:p-12 relative">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-2xl font-serif text-dark-950">"</div>
                
                <div className="prose prose-lg prose-invert max-w-none space-y-6 text-dark-200">
                  <p className="text-xl leading-relaxed">
                    <strong className="text-white">Dear Future Success Story,</strong>
                  </p>
                  
                  <p>
                    If you're reading this, I already know something about you.
                  </p>
                  
                  <p>
                    You're <strong className="text-white">successful</strong>. You've built something—a career, a business, a family. You know what it takes to achieve big goals because you've done it in other areas of your life.
                  </p>
                  
                  <p>
                    But somewhere along the way, <strong className="text-white">your body got left behind.</strong>
                  </p>
                  
                  <p>
                    Maybe it was the long hours. The stress eating. The skipped workouts that turned into skipped months. The "I'll start Monday" that turned into years.
                  </p>
                  
                  <p>
                    <strong className="text-crimson-400">Now you're looking in the mirror at someone you barely recognize.</strong>
                  </p>
                  
                  <p>
                    You're tired. Not just physically tired—but tired of starting over. Tired of programs that don't work. Tired of feeling like your body is holding you back from the life you've worked so hard to build.
                  </p>
                  
                  <p>
                    <strong className="text-white">I've been there.</strong> And I've helped over 500 people exactly like you get out of that place—for good.
                  </p>
                  
                  <p>
                    What you're about to discover isn't another workout plan or diet. <strong className="text-gold-400">It's the complete system I've spent 12 years perfecting</strong>—the same system that's produced some of the most dramatic transformations in the industry.
                  </p>
                  
                  <p>
                    If you're ready to finally get results that last, keep reading. Your transformation starts today.
                  </p>
                  
                  <p className="text-gold-400">
                    — Coach & Dr. M3ta
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Deep Dive */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-crimson-400 font-medium mb-4">THE REAL PROBLEM</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Everything You've Tried <span className="text-crimson-400">Has Failed</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <X className="text-crimson-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Generic Programs Designed for 22-Year-Olds</h3>
                    <p className="text-dark-300">Most fitness programs are created by and for people with unlimited time and zero responsibilities. Your body at 35, 45, or 55 doesn't respond the same way—and these programs don't account for that.</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <X className="text-crimson-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Information Overload Without Implementation</h3>
                    <p className="text-dark-300">You've consumed endless content—YouTube videos, podcasts, articles. You KNOW what to do, but knowing and doing are different things. Without accountability and personalization, information is worthless.</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <X className="text-crimson-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">One-Size-Fits-All Nutrition Advice</h3>
                    <p className="text-dark-300">"Just eat chicken and broccoli." "Cut all carbs." "Try this 1,200 calorie diet." None of this works for busy professionals who travel, have business dinners, and actually want to enjoy life.</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <X className="text-crimson-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">No Support When Motivation Fades</h3>
                    <p className="text-dark-300">Motivation is unreliable. It comes and goes. What you need is a system—and someone in your corner holding you accountable when life gets hard and the couch starts calling.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <p className="text-2xl text-dark-300 mb-6">
                <strong className="text-white">There's a better way.</strong> One that's been proven by 500+ people just like you.
              </p>
              <CTAButton />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Introduction - The Mechanism */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              INTRODUCING
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The <span className="gradient-text">Ascension Method</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-dark-300">
              The complete 12-week transformation system for high-performers who refuse to settle for an average body.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 relative overflow-hidden group hover:border-gold-500/50 transition-all"
              >
                <div className="absolute top-4 right-4 text-gold-400 text-sm font-bold">
                  {module.value} Value
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-colors">
                  <module.icon className="text-gold-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                <p className="text-dark-400">{module.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <CTAButton text="Get Full Access Now →" />
          </motion.div>
        </div>
      </section>

      {/* Massive Social Proof - Case Studies */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              PROOF THAT IT WORKS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Real People. <span className="gradient-text">Real Results.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-dark-300">
              These aren't fitness models or genetic outliers. They're busy professionals like you who decided to invest in themselves.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Stats Side */}
                  <div className="p-8 md:p-12 bg-dark-800/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-dark-950">{study.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{study.name}</h3>
                        <p className="text-dark-400">{study.role}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-crimson-400 text-sm font-medium mb-2">BEFORE</p>
                        <div className="space-y-2 text-dark-300">
                          <p><strong className="text-white">{study.before.weight}</strong> lbs</p>
                          <p><strong className="text-white">{study.before.bodyFat}%</strong> body fat</p>
                          <p className="text-sm">{study.before.energy}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gold-400 text-sm font-medium mb-2">AFTER</p>
                        <div className="space-y-2 text-dark-300">
                          <p><strong className="text-gold-400">{study.after.weight}</strong> lbs</p>
                          <p><strong className="text-gold-400">{study.after.bodyFat}%</strong> body fat</p>
                          <p className="text-sm">{study.after.energy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 text-center">
                      <div className="flex-1 bg-dark-700/50 rounded-lg p-4">
                        <div className="text-2xl font-bold gradient-text">{study.before.weight - study.after.weight}</div>
                        <div className="text-xs text-dark-400 uppercase">Pounds Lost</div>
                      </div>
                      <div className="flex-1 bg-dark-700/50 rounded-lg p-4">
                        <div className="text-2xl font-bold gradient-text">{study.before.bodyFat - study.after.bodyFat}%</div>
                        <div className="text-xs text-dark-400 uppercase">Body Fat Drop</div>
                      </div>
                      <div className="flex-1 bg-dark-700/50 rounded-lg p-4">
                        <div className="text-2xl font-bold gradient-text">{study.timeframe}</div>
                        <div className="text-xs text-dark-400 uppercase">Timeframe</div>
                      </div>
                    </div>
                  </div>

                  {/* Quote Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="text-gold-400 fill-gold-400" size={20} />
                      ))}
                    </div>
                    <p className="text-lg text-dark-200 italic mb-6">"{study.quote}"</p>
                    <p className="text-gold-400 font-medium">Results in {study.timeframe}</p>
                  </div>
                </div>
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
              <strong className="text-white">You could be next.</strong> But only if you take action today.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* Authority Building */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden glow-gold">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
                  alt="Coach & Dr. M3ta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Credentials overlay */}
              <div className="absolute -bottom-6 -right-6 bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-xl p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-gold-500" size={32} />
                  <span className="font-bold text-white">Certifications</span>
                </div>
                <ul className="text-sm text-dark-300 space-y-1">
                  <li>• NASM Certified Personal Trainer</li>
                  <li>• Precision Nutrition Level 2</li>
                  <li>• CSCS Strength & Conditioning</li>
                  <li>• PhD Exercise Physiology</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-400 font-medium mb-4">MEET YOUR COACH</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Listen to <span className="gradient-text">Dr. M3ta?</span>
              </h2>
              
              <div className="prose prose-lg prose-invert space-y-4 text-dark-300 mb-8">
                <p>
                  I've spent the last <strong className="text-white">12+ years</strong> obsessing over one thing: how to transform the bodies of busy, high-achieving people who don't have unlimited time or energy.
                </p>
                <p>
                  With a PhD in Exercise Physiology and certifications from every major fitness organization, I've worked with <strong className="text-white">500+ clients</strong>—from Fortune 500 executives to professional athletes to stay-at-home parents.
                </p>
                <p>
                  But credentials alone don't transform bodies. What sets the Ascension Method apart is the <strong className="text-gold-400">complete system</strong> I've built through years of real-world results—not theory, but proven strategies that work for people with demanding lives.
                </p>
              </div>

              {/* Quick Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-4">
                <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {statsInView ? <CountUp end={12} suffix="+" duration={2} /> : '0+'}
                  </div>
                  <div className="text-xs text-dark-400 uppercase">Years Experience</div>
                </div>
                <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {statsInView ? <CountUp end={500} suffix="+" duration={2} /> : '0+'}
                  </div>
                  <div className="text-xs text-dark-400 uppercase">Clients</div>
                </div>
                <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {statsInView ? <CountUp end={98} suffix="%" duration={2} /> : '0%'}
                  </div>
                  <div className="text-xs text-dark-400 uppercase">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
              <Gift className="text-gold-400" size={18} />
              <span className="text-gold-400 font-medium">EXCLUSIVE BONUSES</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get These <span className="gradient-text">5 Free Bonuses</span> When You Enroll Today
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-dark-300">
              Worth over $985 — yours FREE when you join the Ascension Method
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-6 relative overflow-hidden group hover:border-gold-500/50 transition-all"
              >
                <div className="absolute top-4 right-4 bg-gold-500 text-dark-950 text-xs font-bold px-2 py-1 rounded">
                  FREE
                </div>
                <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                  <bonus.icon className="text-gold-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-dark-400 text-sm mb-3">{bonus.description}</p>
                <p className="text-gold-400 font-bold">{bonus.value} Value</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-dark-300 mb-4">Total Bonus Value: <span className="crossed-price text-xl">$985</span></p>
            <p className="text-2xl font-bold text-gold-400 mb-6">Yours FREE Today!</p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              YOUR INVESTMENT
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Transformation Path</span>
            </motion.h2>
          </motion.div>

          {/* Value Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Everything You Get:</h3>
              <div className="space-y-4">
                {[...programModules, ...bonuses].map((item, index) => (
                  <div key={index} className="value-item">
                    <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                    <span className="text-dark-200 flex-grow">{item.title}</span>
                    <span className="text-dark-400">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-dark-600 mt-6 pt-6">
                <div className="flex justify-between text-xl">
                  <span className="font-bold text-white">Total Value:</span>
                  <span className="crossed-price text-2xl">$4,273+</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Payment Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`pricing-card cursor-pointer transition-all ${selectedPlan === 'payment' ? 'border-gold-500' : ''}`}
              onClick={() => setSelectedPlan('payment')}
            >
              <div className="text-center mb-8">
                <p className="text-dark-400 mb-2">PAYMENT PLAN</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-bold text-white">$597</span>
                  <span className="text-dark-400">x 3</span>
                </div>
                <p className="text-dark-400 mt-2">3 Monthly Payments</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-dark-300">
                  <Check className="text-gold-500" size={18} />
                  <span>Full Program Access</span>
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <Check className="text-gold-500" size={18} />
                  <span>All Bonuses Included</span>
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <Check className="text-gold-500" size={18} />
                  <span>Flexible Payments</span>
                </li>
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all ${selectedPlan === 'payment' ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950' : 'border-2 border-dark-600 text-dark-300 hover:border-gold-500'}`}>
                {selectedPlan === 'payment' ? 'Selected' : 'Select Plan'}
              </button>
            </motion.div>

            {/* Pay in Full */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`pricing-card featured cursor-pointer transition-all ${selectedPlan === 'full' ? 'border-gold-500' : ''}`}
              onClick={() => setSelectedPlan('full')}
            >
              <div className="absolute top-0 right-0 bg-crimson-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                SAVE $500
              </div>

              <div className="text-center mb-8">
                <p className="text-gold-400 font-medium mb-2">BEST VALUE — PAY IN FULL</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="crossed-price text-2xl">$1,997</span>
                  <span className="text-5xl font-bold gradient-text">$1,497</span>
                </div>
                <p className="text-dark-400 mt-2">One-Time Payment</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-dark-300">
                  <Check className="text-gold-500" size={18} />
                  <span>Full Program Access</span>
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <Check className="text-gold-500" size={18} />
                  <span>All Bonuses Included</span>
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <Check className="text-gold-500" size={18} />
                  <span><strong className="text-gold-400">Save $500</strong> vs Payment Plan</span>
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <Check className="text-gold-500" size={18} />
                  <span><strong className="text-gold-400">BONUS:</strong> Extra 1-on-1 Strategy Call</span>
                </li>
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all ${selectedPlan === 'full' ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950' : 'border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10'}`}>
                {selectedPlan === 'full' ? 'Selected' : 'Select Plan'}
              </button>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-primary text-xl px-12 py-5 pulse-glow">
              <span>ENROLL NOW & START TRANSFORMING →</span>
            </button>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-dark-400">
                <Lock size={18} />
                <span className="text-sm">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2 text-dark-400">
                <Shield size={18} />
                <span className="text-sm">60-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-dark-400">
                <CreditCard size={18} />
                <span className="text-sm">All Cards Accepted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 md:p-12 border-2 border-gold-500/50">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center">
                    <Shield className="text-dark-950" size={64} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    The 60-Day <span className="gradient-text">"Results or Refund"</span> Guarantee
                  </h2>
                  <div className="text-dark-300 space-y-4">
                    <p>
                      I'm so confident the Ascension Method will transform your body that I'm taking ALL the risk off your shoulders.
                    </p>
                    <p>
                      <strong className="text-white">Here's how it works:</strong> Enroll today, follow the program, show up to your coaching calls, and do the work. If after 60 days you haven't seen measurable improvements in your body composition, energy, and strength—I'll refund every single penny.
                    </p>
                    <p>
                      No hoops. No hassles. No questions asked. Just email our team, and you'll have your money back within 48 hours.
                    </p>
                    <p className="text-gold-400 font-medium">
                      You either get the transformation you want, or you pay nothing. It's that simple.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              QUESTIONS? WE'VE GOT ANSWERS.
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-dark-300 mb-6">Still have questions? Email us at <a href="mailto:coach@ascensionm3ta.com" className="text-gold-400 hover:underline">coach@ascensionm3ta.com</a></p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">P.S. — Read This If You're Still On The Fence</h2>
            
            <div className="text-left bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 mb-8">
              <div className="prose prose-lg prose-invert space-y-4 text-dark-300">
                <p>
                  <strong className="text-white">P.S.</strong> — If you've read this far, you're not a tire-kicker. You're someone who's serious about change. The only question is: will you take action, or will you let this opportunity slip away like so many before?
                </p>
                <p>
                  A year from now, you'll be a year older regardless. The question is whether you'll be <strong className="text-gold-400">stronger, leaner, and more confident</strong>—or wishing you'd started today.
                </p>
                <p>
                  <strong className="text-white">P.P.S.</strong> — Remember, you're protected by our <strong className="text-gold-400">60-day money-back guarantee</strong>. You literally have nothing to lose except the weight holding you back. Try the program, see the results, and if you're not thrilled, you pay nothing.
                </p>
                <p>
                  <strong className="text-white">P.P.P.S.</strong> — The special pricing and bonuses on this page are <strong className="text-crimson-400">only available for a limited time</strong>. Once the countdown timer hits zero, the price goes up and the bonuses disappear. Don't wait.
                </p>
              </div>
            </div>

            <CountdownTimer className="mb-8" />

            <button className="btn-primary text-xl px-12 py-5 pulse-glow">
              <span>YES — I'M READY TO TRANSFORM MY LIFE →</span>
            </button>

            <p className="text-dark-500 text-sm mt-6">
              🔒 256-bit SSL Encryption • Your information is 100% secure
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sales;
