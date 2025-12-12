import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { games } from '../data/games';
import SearchBar from './SearchBar';

const GamesList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper function to format game names for better mobile display
  const formatGameName = (name: string) => {
    // Add spaces before capital letters in long words for better wrapping
    if (name === 'BIGDADDYDRAGON') return 'BIG DADDY DRAGON';
    if (name === 'GREATBALLSOFFIRE') return 'GREAT BALLS OF FIRE';
    return name;
  };

  return (
    <section className="pt-0 pb-4 md:pb-16 relative" id="games">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2 md:mb-4 text-neon-500 neon-title">
            Pimp <span className="text-white">Gamez</span>
          </h2>
        </motion.div>

        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {filteredGames.map((game) => (
            <motion.div
              key={game.id}
              className="bg-charcoal-800 rounded-xl overflow-hidden group border border-electric-500/20 shadow-[0_0_20px_rgba(154,47,255,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 md:p-4 flex flex-col gap-3 md:gap-4 h-full">
                <div className="bg-charcoal-900/80 rounded-lg p-3 flex items-center justify-center h-24 border border-electric-500/10">
                  <img
                    src={game.logo}
                    alt={game.name}
                    className="max-h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-center leading-tight break-words hyphens-auto flex items-center justify-center min-h-[2.5rem]">
                  {formatGameName(game.name)}
                </h3>
                <div className="relative group mt-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-500 to-neon-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                  <motion.a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center gap-1 md:gap-2 w-full py-2 md:py-2.5 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-lg font-medium transition-colors duration-200 text-xs md:text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {game.name === 'BLUE DRAGON' ? (
                      <>
                        Web Version <ExternalLink size={14} className="md:hidden" /><ExternalLink size={16} className="hidden md:inline" />
                      </>
                    ) : (
                      <>
                        Play Game <ExternalLink size={14} className="md:hidden" /><ExternalLink size={16} className="hidden md:inline" />
                      </>
                    )}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesList;
