import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import PhoenixLogo from '../assets/Phoenix-logo-Export.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'About', path: '/about' },
  ];

  const programs = [
    { name: 'Elite Transformation', path: '/sales' },
    { name: 'Online Coaching', path: '/programs' },
    { name: '1-on-1 Training', path: '/programs' },
    { name: 'Group Coaching', path: '/programs' },
  ];

  const socialLinks = [
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Youtube, url: '#', label: 'YouTube' },
    { icon: Twitter, url: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={PhoenixLogo} 
                alt="Ascension Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">ASCENSION</h3>
                <p className="text-xs text-dark-400">by Coach & Dr. M3ta</p>
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Transforming lives through science-backed training, nutrition, and mindset coaching. 
              Your journey to becoming your best self starts here.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-gold-500 hover:text-dark-950 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-300 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.path}
                    className="text-dark-300 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-dark-300">
                <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center">
                  <Mail size={18} className="text-gold-500" />
                </div>
                <span className="text-sm">coach@ascensionm3ta.com</span>
              </li>
              <li className="flex items-center gap-3 text-dark-300">
                <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center">
                  <Phone size={18} className="text-gold-500" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold-500" />
                </div>
                <span className="text-sm">Available Worldwide<br />Online & In-Person</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-400 text-sm">
              © {currentYear} Ascension by Coach & Dr. M3ta. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-dark-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-400 hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-dark-400 hover:text-gold-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
