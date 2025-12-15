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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
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
              <div className="p-2.5 md:p-3 flex flex-col gap-2.5 md:gap-3 h-full">
                <div className="bg-charcoal-900/80 rounded-lg flex items-center justify-center aspect-square border border-electric-500/10">
                  <img
                    src={game.logo}
                    alt={game.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-center leading-tight break-words hyphens-auto flex items-center justify-center min-h-[2.5rem]">
                  {formatGameName(game.name)}
                </h3>
                <div className="relative group mt-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-500 to-neon-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                  <motion.a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center gap-1.5 md:gap-3 w-full py-3 md:py-3.5 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-xl font-semibold transition-colors duration-200 text-sm md:text-base"
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
