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
    <section className="py-4 md:py-16 relative min-h-[calc(100vh-7.5rem)]" id="backend-links">
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" aria-hidden />
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md p-4 md:p-6 shadow-[0_0_28px_rgba(57,255,20,0.12)]">
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
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
                <div className="p-2.5 md:p-3 flex flex-col gap-2.5 md:gap-3 h-full">
                  <div className="bg-charcoal-900/80 rounded-lg flex items-center justify-center aspect-square border border-electric-500/10">
                    <img
                      src={game.logo}
                      alt={game.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-center leading-tight break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                    {game.name}
                  </h3>
                  <motion.a
                    href={game.adminUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 md:gap-3 w-full py-3 md:py-3.5 px-3 md:px-4 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-xl font-semibold text-sm md:text-base transition-colors duration-200 shadow-[0_0_18px_rgba(57,255,20,0.35)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Backend Login <ExternalLink size={14} className="md:hidden" /><ExternalLink size={18} className="hidden md:inline" />
                  </motion.a>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default BackendLinks;