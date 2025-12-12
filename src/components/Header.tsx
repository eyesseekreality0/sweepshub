import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection: 'games' | 'backend';
  onSectionChange: (section: 'games' | 'backend') => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: 'games' | 'backend') => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-800/90 backdrop-blur-md shadow-[0_10px_30px_rgba(154,47,255,0.25)]' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => handleSectionChange('games')}
            className="flex items-center space-x-2 md:space-x-4 text-neon-500 font-heading text-2xl md:text-3xl lg:text-4xl neon-title"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-600 via-neon-500 to-electric-400 rounded-full blur-xl opacity-70"></div>
              <div className="relative h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full border border-neon-500 bg-midnight-950 flex items-center justify-center text-black text-xl md:text-2xl font-bold shadow-[0_0_25px_rgba(57,255,20,0.45)]">
                <span className="bg-gradient-to-br from-neon-500 to-electric-400 bg-clip-text text-transparent">PG</span>
              </div>
            </div>
            <span className="relative neon-outline">Pimp Gamez</span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#contact"
              className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-md font-semibold transition duration-200 text-sm md:text-base shadow-[0_0_18px_rgba(154,47,255,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Contact Us
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`md:hidden fixed inset-x-0 top-[60px] bg-charcoal-800/95 backdrop-blur-md shadow-[0_12px_30px_rgba(154,47,255,0.25)] ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-2">
            <a
              href="#contact"
              className="px-4 py-2.5 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-lg font-semibold text-center transition duration-200 text-sm shadow-[0_0_18px_rgba(57,255,20,0.35)]"
              onClick={scrollToContact}
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
