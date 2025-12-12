import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <footer className="bg-charcoal-900 pt-4 md:pt-16 pb-4 md:pb-8 border-t border-electric-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-4 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center font-heading text-black font-bold shadow-[0_0_18px_rgba(57,255,20,0.45)]">
              PG
            </div>
            <div>
              <p className="text-neon-500 font-heading font-bold text-lg md:text-xl neon-title">Pimp Gamez</p>
              <p className="text-white/70 text-sm md:text-base">All the games. All the admin links. Always on brand.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60 text-sm md:text-base"
          >
            Neon-fueled access that matches the Pimp Gamez glow.
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-3 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-xs md:text-sm mb-2 md:mb-0">
              © 2025 Pimp Gamez. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
