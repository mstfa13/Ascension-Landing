import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  ArrowRight,
  Star,
  Filter,
  Play,
  Quote,
  TrendingUp,
  Clock,
  Target,
  Dumbbell
} from 'lucide-react';
import { useState } from 'react';

const SuccessStories = () => {
  const [filter, setFilter] = useState('all');
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

  const filters = [
    { id: 'all', label: 'All Stories' },
    { id: 'weight-loss', label: 'Weight Loss' },
    { id: 'muscle-gain', label: 'Muscle Gain' },
    { id: 'busy-pro', label: 'Busy Professionals' },
    { id: 'over-40', label: 'Over 40' }
  ];

  const testimonials = [
    {
      id: 1,
      name: "James Rodriguez",
      age: 45,
      occupation: "CEO, Tech Company",
      category: ["weight-loss", "busy-pro", "over-40"],
      weightLost: 40,
      timeframe: "16 weeks",
      before: { weight: 235, bodyFat: 32 },
      after: { weight: 195, bodyFat: 18 },
      quote: "I went from dreading my reflection to getting compliments from my wife daily. Dr. M3ta gave me my confidence back. The investment paid for itself 10x in how I show up as a leader.",
      fullStory: "As a CEO working 70+ hours a week, I had convinced myself that being overweight was just part of the job. Business dinners, travel, stress—they all added up. At my annual physical, my doctor told me I was pre-diabetic. That was my wake-up call. The Ascension Method fit my crazy schedule perfectly. Early morning workouts, flexible nutrition that worked with my travel, and coaching calls that kept me accountable even during my busiest weeks. 16 weeks later, I'm in the best shape of my adult life.",
      hasVideo: true
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      age: 38,
      occupation: "Corporate Lawyer, Mom of 3",
      category: ["weight-loss", "busy-pro"],
      weightLost: 36,
      timeframe: "12 weeks",
      before: { weight: 178, bodyFat: 35 },
      after: { weight: 142, bodyFat: 22 },
      quote: "After 3 kids, I thought my body would never bounce back. I was wrong. The nutrition guidance alone was a game-changer. I'm in better shape now than my 20s!",
      fullStory: "Three pregnancies in five years destroyed my body—or so I thought. Between court cases and soccer practice, I barely had time to shower, let alone work out. What I loved about Dr. M3ta's approach was the flexibility. I wasn't forced into hour-long gym sessions. Instead, I got efficient 30-minute workouts I could do at home while the kids napped. The meal planning was realistic—no expensive supplements or complicated recipes. Just real food, real results.",
      hasVideo: true
    },
    {
      id: 3,
      name: "Michael Thompson",
      age: 52,
      occupation: "Retired Military, Business Owner",
      category: ["weight-loss", "muscle-gain", "over-40"],
      weightLost: 43,
      timeframe: "20 weeks",
      before: { weight: 248, bodyFat: 34 },
      after: { weight: 205, bodyFat: 19 },
      quote: "I'd let myself go after retiring. This program brought back the discipline and the body I had in my 30s. At 52, I'm in the best shape of my civilian life.",
      fullStory: "20 years in the military, I was in peak condition. But when I retired and started my business, the discipline faded. Fast food, late nights, and no accountability. I gained 60 pounds in 5 years. The Ascension Method brought back what the military gave me: structure, discipline, and results. Coach M3ta understood that I needed to be pushed—and he pushed hard. The difference? This time I'm doing it for myself, not for a commander.",
      hasVideo: false
    },
    {
      id: 4,
      name: "David Chen",
      age: 35,
      occupation: "Former College Athlete, Investment Banker",
      category: ["muscle-gain", "busy-pro"],
      weightLost: -12, // Gained muscle
      muscleGain: 18,
      timeframe: "16 weeks",
      before: { weight: 175, bodyFat: 24 },
      after: { weight: 187, bodyFat: 12 },
      quote: "I went from dad bod back to athlete in 16 weeks. The training is intense but efficient. Coach M3ta knows exactly how to push you without breaking you.",
      fullStory: "I played Division 1 basketball. When I graduated and started in finance, I told myself I'd stay in shape. I didn't. The desk life caught up fast. By 33, I had a gut and hadn't seen my abs in years. Dr. M3ta designed a program that felt like what I did in college—progressive, challenging, athletic. But it only took 45 minutes, 4 days a week. The nutrition was dialed in for muscle gain without excessive bulking. My college teammates couldn't believe it when they saw me at our reunion.",
      hasVideo: true
    },
    {
      id: 5,
      name: "Patricia Williams",
      age: 58,
      occupation: "Grandmother, Retired Nurse",
      category: ["weight-loss", "over-40"],
      weightLost: 45,
      timeframe: "24 weeks",
      before: { weight: 195, bodyFat: 40 },
      after: { weight: 150, bodyFat: 28 },
      quote: "At 58, I can keep up with my grandkids. I have more energy than I did at 40. This program gave me a second chance at an active retirement.",
      fullStory: "After 35 years as an ER nurse, my body was broken. Bad knees, aching back, zero energy. I thought this was just what aging meant. My daughter gave me the Ascension Method as a Christmas gift. I was skeptical—I'm almost 60, what can really change? Everything, as it turned out. Dr. M3ta modified every exercise for my limitations. The nutrition was simple and sustainable. Six months later, I'm hiking, playing with my grandkids, and just completed my first 5K.",
      hasVideo: false
    },
    {
      id: 6,
      name: "Marcus Johnson",
      age: 42,
      occupation: "Restaurant Owner",
      category: ["weight-loss", "busy-pro", "over-40"],
      weightLost: 55,
      timeframe: "20 weeks",
      before: { weight: 275, bodyFat: 38 },
      after: { weight: 220, bodyFat: 20 },
      quote: "Owning a restaurant, I'm surrounded by food 16 hours a day. I learned how to enjoy great food without destroying my health. Down 55 pounds and still eating well.",
      fullStory: "Running three restaurants means I'm around food constantly. Stress eating was my coping mechanism. I'd taste everything, eat late, drink to unwind. At 275 pounds, I was headed for a heart attack—just like my father. The Ascension Method taught me that nutrition isn't about restriction; it's about strategy. I still taste everything. I still enjoy great food. But now I have a system. And somehow, impossibly, I'm down 55 pounds.",
      hasVideo: true
    }
  ];

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter(t => t.category.includes(filter));

  const stats = [
    { value: 15000, suffix: '+', label: 'Total Pounds Lost' },
    { value: 500, suffix: '+', label: 'Success Stories' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 }
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
              <Star className="text-gold-400 fill-gold-400" size={16} />
              <span className="text-gold-400 text-sm font-medium">500+ Transformations and Counting</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real People. <span className="gradient-text">Real Results.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-dark-300">
              These aren't fitness models or paid actors. They're everyday people with busy lives who decided to invest in themselves—and got incredible results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="py-12 bg-dark-900 border-y border-dark-800">
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
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals || 0}
                    />
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

      {/* Filter Bar */}
      <section className="py-8 bg-dark-950 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="text-dark-400 flex-shrink-0" size={20} />
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === f.id
                    ? 'bg-gold-500 text-dark-950'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.1 }}
                className="bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl overflow-hidden"
              >
                {/* Header with stats */}
                <div className="bg-dark-800/50 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-dark-950">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                        <p className="text-dark-400 text-sm">{testimonial.occupation}</p>
                        <p className="text-dark-500 text-xs">Age {testimonial.age}</p>
                      </div>
                    </div>
                    {testimonial.hasVideo && (
                      <button className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 hover:bg-gold-500/30 transition-colors">
                        <Play size={18} />
                      </button>
                    )}
                  </div>

                  {/* Before/After Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-700/50 rounded-lg p-3">
                      <p className="text-xs text-crimson-400 font-medium mb-1">BEFORE</p>
                      <p className="text-white font-bold">{testimonial.before.weight} lbs</p>
                      <p className="text-dark-400 text-sm">{testimonial.before.bodyFat}% body fat</p>
                    </div>
                    <div className="bg-dark-700/50 rounded-lg p-3">
                      <p className="text-xs text-gold-400 font-medium mb-1">AFTER</p>
                      <p className="text-gold-400 font-bold">{testimonial.after.weight} lbs</p>
                      <p className="text-dark-400 text-sm">{testimonial.after.bodyFat}% body fat</p>
                    </div>
                  </div>
                </div>

                {/* Results Badges */}
                <div className="px-6 py-4 flex gap-3 border-b border-dark-700">
                  <div className="flex items-center gap-2 bg-gold-500/10 rounded-full px-3 py-1">
                    <TrendingUp className="text-gold-400" size={14} />
                    <span className="text-gold-400 text-sm font-medium">
                      {testimonial.weightLost > 0 
                        ? `-${testimonial.weightLost} lbs` 
                        : `+${testimonial.muscleGain || Math.abs(testimonial.weightLost)} lbs muscle`
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-dark-800 rounded-full px-3 py-1">
                    <Clock className="text-dark-400" size={14} />
                    <span className="text-dark-300 text-sm">{testimonial.timeframe}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6">
                  <Quote className="text-gold-500/20 mb-2" size={24} />
                  <p className="text-dark-200 italic mb-4">"{testimonial.quote}"</p>
                  
                  <details className="group">
                    <summary className="text-gold-400 text-sm cursor-pointer hover:text-gold-300 transition-colors flex items-center gap-2">
                      Read full story
                      <ArrowRight size={14} className="group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-dark-400 text-sm mt-4 leading-relaxed">
                      {testimonial.fullStory}
                    </p>
                  </details>
                </div>

                {/* Rating */}
                <div className="px-6 py-4 border-t border-dark-700 flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-gold-400 fill-gold-400" size={16} />
                  ))}
                  <span className="text-dark-400 text-sm ml-2">Verified Client</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-400">No stories match this filter. Try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-medium mb-4">
              VIDEO TESTIMONIALS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Hear It <span className="gradient-text">From Them</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[9/16] bg-dark-800 rounded-2xl flex items-center justify-center cursor-pointer group hover:bg-dark-700 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/30 transition-colors">
                    <Play className="text-gold-400" size={32} />
                  </div>
                  <p className="text-dark-400 text-sm">Video Testimonial #{i}</p>
                </div>
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
              Ready to Be the <span className="gradient-text">Next Success Story?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-dark-300 mb-8">
              Your transformation journey can start today. Join the 500+ people who've already changed their lives.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/sales" className="btn-primary text-lg inline-flex items-center gap-2 pulse-glow">
                <span>Start My Transformation</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
