import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { games } from '../data/games';
import SearchBar from './SearchBar';

const BackendLinks = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = games.filter(game =>
    game.adminUrl && game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-4 md:py-16 relative" id="backend-links">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2 md:mb-4 text-neon-500 neon-title">
            Admin <span className="text-white">Backend Links</span>
          </h2>
        </motion.div>

        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search backend links..."
        />

        <motion.ul
          className="grid grid-cols-3 gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredGames.map((game) => (
            <motion.li
              key={game.id}
              className="bg-charcoal-800 rounded-xl overflow-hidden border border-electric-500/20 shadow-[0_0_20px_rgba(154,47,255,0.15)]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 md:p-4 flex flex-col gap-3 md:gap-4">
                <h3 className="text-sm md:text-lg font-medium text-center leading-tight">{game.name}</h3>
                <motion.a
                  href={game.adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 md:gap-2 w-full py-2 md:py-2.5 px-2 md:px-3 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-lg font-medium text-xs md:text-sm transition-colors duration-200 shadow-[0_0_18px_rgba(57,255,20,0.35)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Backend Login <ExternalLink size={14} className="md:hidden" /><ExternalLink size={16} className="hidden md:inline" />
                </motion.a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default BackendLinks;