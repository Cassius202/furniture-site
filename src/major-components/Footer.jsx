import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import toast from 'react-hot-toast';
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      toast.success('Thanks for Subscribing');
    }
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Top Section - Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-1">
              <span>Luxe H</span>
              <span className="inline-block">🏠</span>
              <span>me</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your living spaces with our premium furniture collection. We create beautiful, functional environments that reflect your unique style.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:hello@luxehome.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span>hello@luxehome.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>123 Design Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Interior Design', 'Free Consultation', 'Delivery & Assembly', 'Financing', 'Trade Program'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Shipping Info', 'Returns', 'Size Guide', 'Care Instructions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold text-white mb-3">Stay in the Loop</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get special offers, free giveaways, and updates on new arrivals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2026 Luxe Home. Made with <span className="text-red-500">❤️</span> by Luxe Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;