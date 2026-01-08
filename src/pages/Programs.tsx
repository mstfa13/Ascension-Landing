import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Check,
  Zap,
  Shield,
  Clock,
  Users,
  Video,
  MessageCircle,
  Smartphone,
  Dumbbell,
  Utensils,
  Brain
} from 'lucide-react';

const Programs = () => {
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

  const programs = [
    {
      name: "Essentials",
      tagline: "Self-Paced Transformation",
      price: "$497",
      priceNote: "One-time payment",
      description: "Perfect for self-motivated individuals who want the system without 1-on-1 coaching.",
      features: [
        "Complete Training Program Library",
        "Nutrition Framework & Templates",
        "Video Exercise Library (200+ demos)",
        "Private Community Access",
        "Email Support",
        "Lifetime Access"
      ],
      notIncluded: [
        "1-on-1 Coaching Calls",
        "Custom Meal Plans",
        "Personalized Programming",
        "Direct Message Access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Elite",
      tagline: "Full Transformation System",
      price: "$1,497",
      priceNote: "or 3x $597",
      description: "The complete Ascension Method with personalized coaching and unlimited support.",
      features: [
        "Everything in Essentials, PLUS:",
        "Custom Training Program",
        "Personalized Nutrition Plan",
        "Weekly 1-on-1 Coaching Calls",
        "M3ta Tracking App Access",
        "24/7 Direct Message Support",
        "Progress Photo Analysis",
        "Supplement Optimization Guide",
        "Sleep & Recovery Protocol",
        "12-Week Meal Prep Masterclass",
        "60-Day Money-Back Guarantee"
      ],
      notIncluded: [],
      cta: "Claim Your Spot",
      popular: true
    },
    {
      name: "VIP",
      tagline: "Premium 1-on-1 Experience",
      price: "$3,997",
      priceNote: "Limited availability",
      description: "The ultimate transformation experience with maximum personal attention and accountability.",
      features: [
        "Everything in Elite, PLUS:",
        "2x Weekly Coaching Calls",
        "Same-Day Response Priority",
        "Monthly Video Check-ins",
        "Custom Supplement Protocol",
        "Quarterly Program Redesigns",
        "Exclusive VIP Mastermind",
        "Lifetime Program Updates",
        "In-Person Session (if local)",
        "6-Month Extended Support",
        "Referral Bonuses"
      ],
      notIncluded: [],
      cta: "Apply Now",
      popular: false
    }
  ];

  const features = [
    {
      icon: Dumbbell,
      title: "Science-Backed Training",
      description: "Periodized programs designed for progressive overload and continuous adaptation."
    },
    {
      icon: Utensils,
      title: "Flexible Nutrition",
      description: "No restrictive diets. Eat foods you love while hitting your macros."
    },
    {
      icon: Brain,
      title: "Mindset Coaching",
      description: "Build mental toughness and discipline that transfers to all areas of life."
    },
    {
      icon: MessageCircle,
      title: "Unlimited Support",
      description: "Never feel alone. Get answers when you need them, not days later."
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Perfect your form with 200+ HD exercise demonstrations."
    },
    {
      icon: Smartphone,
      title: "Tracking App",
      description: "Log workouts, track macros, and monitor progress all in one place."
    }
  ];

  const comparisonItems = [
    { feature: "Custom Training Program", essentials: false, elite: true, vip: true },
    { feature: "Personalized Meal Plan", essentials: false, elite: true, vip: true },
    { feature: "Video Exercise Library", essentials: true, elite: true, vip: true },
    { feature: "Community Access", essentials: true, elite: true, vip: true },
    { feature: "1-on-1 Coaching Calls", essentials: false, elite: "Weekly", vip: "2x Weekly" },
    { feature: "Direct Message Support", essentials: false, elite: true, vip: "Priority" },
    { feature: "M3ta Tracking App", essentials: false, elite: true, vip: true },
    { feature: "Progress Photo Analysis", essentials: false, elite: true, vip: true },
    { feature: "Money-Back Guarantee", essentials: "30-Day", elite: "60-Day", vip: "90-Day" },
    { feature: "Program Duration", essentials: "Self-Paced", elite: "12 Weeks", vip: "6 Months" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="text-gold-400" size={16} />
              <span className="text-gold-400 text-sm font-medium">Choose Your Path to Transformation</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Programs Designed for <span className="gradient-text">Your Success</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8">
              Whether you're a self-starter or want hands-on coaching, we have a program that fits your goals, budget, and lifestyle.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-400">
              <div className="flex items-center gap-2">
                <Shield className="text-gold-500" size={18} />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-gold-500" size={18} />
                <span>Start Within 48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-gold-500" size={18} />
                <span>500+ Success Stories</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`pricing-card ${program.popular ? 'featured border-gold-500' : ''} flex flex-col`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-500 text-dark-950 text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{program.name}</h3>
                  <p className="text-gold-400 text-sm">{program.tagline}</p>
                </div>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-white">{program.price}</span>
                  <p className="text-dark-400 text-sm mt-1">{program.priceNote}</p>
                </div>

                <p className="text-dark-300 text-center mb-6">{program.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-300">
                      <CheckCircle className="text-gold-500 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {program.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-500 line-through">
                      <Check className="text-dark-600 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/sales"
                  className={`w-full py-4 rounded-lg font-bold text-center transition-all ${
                    program.popular
                      ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 hover:shadow-lg hover:shadow-gold-500/25'
                      : 'border-2 border-dark-600 text-white hover:border-gold-500 hover:text-gold-400'
                  }`}
                >
                  {program.cta} <ArrowRight className="inline ml-2" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              WHAT'S INCLUDED
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 hover:border-gold-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-gold-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-dark-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
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
              COMPARE PLANS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Find Your <span className="gradient-text">Perfect Fit</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left py-4 px-4 text-dark-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Essentials</th>
                  <th className="text-center py-4 px-4">
                    <span className="text-gold-400 font-bold">Elite</span>
                    <span className="block text-xs text-gold-400/70">Most Popular</span>
                  </th>
                  <th className="text-center py-4 px-4 text-white font-bold">VIP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, index) => (
                  <tr key={index} className="border-b border-dark-800">
                    <td className="py-4 px-4 text-dark-300">{item.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof item.essentials === 'boolean' ? (
                        item.essentials ? (
                          <Check className="text-gold-500 mx-auto" size={20} />
                        ) : (
                          <span className="text-dark-600">—</span>
                        )
                      ) : (
                        <span className="text-dark-300">{item.essentials}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-gold-500/5">
                      {typeof item.elite === 'boolean' ? (
                        item.elite ? (
                          <Check className="text-gold-500 mx-auto" size={20} />
                        ) : (
                          <span className="text-dark-600">—</span>
                        )
                      ) : (
                        <span className="text-gold-400 font-medium">{item.elite}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof item.vip === 'boolean' ? (
                        item.vip ? (
                          <Check className="text-gold-500 mx-auto" size={20} />
                        ) : (
                          <span className="text-dark-600">—</span>
                        )
                      ) : (
                        <span className="text-gold-400 font-medium">{item.vip}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
              Not Sure Which Program <span className="gradient-text">Is Right for You?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8">
              Book a free 15-minute strategy call. We'll discuss your goals, challenges, and find the perfect fit—no pressure, no sales pitch.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/sales" className="btn-primary text-lg inline-flex items-center gap-2">
                <span>Book Free Strategy Call</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
