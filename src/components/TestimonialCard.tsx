import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image?: string;
  role?: string;
  quote: string;
  rating?: number;
  results?: string;
  beforeImage?: string;
  afterImage?: string;
}

const TestimonialCard = ({
  name,
  image,
  role,
  quote,
  rating = 5,
  results,
  beforeImage,
  afterImage
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="testimonial-card"
    >
      {/* Before/After Images */}
      {beforeImage && afterImage && (
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <img
              src={beforeImage}
              alt={`${name} before`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="absolute bottom-2 left-2 bg-dark-950/80 text-white text-xs px-2 py-1 rounded">
              Before
            </span>
          </div>
          <div className="flex-1 relative">
            <img
              src={afterImage}
              alt={`${name} after`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="absolute bottom-2 left-2 bg-gold-500 text-dark-950 text-xs px-2 py-1 rounded font-bold">
              After
            </span>
          </div>
        </div>
      )}

      {/* Quote Icon */}
      <Quote className="text-gold-500/30 mb-4" size={32} />

      {/* Quote Text */}
      <p className="text-dark-200 leading-relaxed mb-6 italic">
        "{quote}"
      </p>

      {/* Results Badge */}
      {results && (
        <div className="inline-block bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
          <span className="text-gold-400 font-bold text-sm">{results}</span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
            <span className="text-dark-950 font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="text-white font-bold">{name}</h4>
          {role && <p className="text-dark-400 text-sm">{role}</p>}
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mt-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="text-gold-400 fill-gold-400" size={16} />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
