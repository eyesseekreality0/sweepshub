import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 pt-6 md:pt-12 pb-6 md:pb-10 border-t border-electric-500/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center font-heading text-black font-bold shadow-[0_0_18px_rgba(57,255,20,0.45)]">
              PG
            </div>
            <span className="text-neon-500 font-heading font-bold text-lg md:text-xl neon-title">Pimp Gamez</span>
          </div>
          <p className="text-white/70 text-sm md:text-base max-w-2xl">
            Neon-soaked gaming drops, backend portals, and a glow that stays true to the Pimp Gamez logo.
          </p>
        </motion.div>

        <div className="border-t border-white/10 pt-4 md:pt-8 mt-6 md:mt-10">
          <p className="text-center text-white/40 text-xs md:text-sm">
            © 2025 Pimp Gamez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
