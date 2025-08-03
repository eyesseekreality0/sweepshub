import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 pt-4 md:pt-16 pb-4 md:pb-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <img src="/sweepshublogo.jpg" alt="Sweeps Hub" className="h-10 w-10 md:h-10 md:w-10 rounded-full" />
              <span className="text-white font-heading font-bold text-lg md:text-xl">Sweeps Hub</span>
            </div>
            <p className="text-white/60 mb-4 md:mb-6 text-sm md:text-base">
              The premier platform for game points distribution and rewards.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <a 
                  href="mailto:support@sweepshub.us"
                  className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors duration-200 text-sm md:text-base"
                >
                  <Mail size={16} className="md:hidden" /><Mail size={18} className="hidden md:inline" />
                  <span>support@sweepshub.us</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:shawn@sweepshub.us"
                  className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors duration-200 text-sm md:text-base"
                >
                  <Mail size={16} className="md:hidden" /><Mail size={18} className="hidden md:inline" />
                  <span>shawn@sweepshub.us</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://signal.me/#eu/PRhrtX5sczCuuGG60-9w-XI1bCjbYIrbhPvdNe7O9HklBQ-Al-pNo5msjVGXu3N_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors duration-200 text-sm md:text-base"
                >
                  <MessageCircle size={16} className="md:hidden" /><MessageCircle size={18} className="hidden md:inline" />
                  <span>Contact us on Signal</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/message/OUZCFCOPNWUGB1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone size={16} className="md:hidden" /><Phone size={18} className="hidden md:inline" />
                  <span>Message us on WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/shawnofficial09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors duration-200 text-sm md:text-base"
                >
                  <MessageCircle size={16} className="md:hidden" /><MessageCircle size={18} className="hidden md:inline" />
                  <span>Chat with us on Telegram</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 pt-3 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-xs md:text-sm mb-2 md:mb-0">
              © 2025 Sweeps Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;