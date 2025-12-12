import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: 'games' | 'backend') => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-20 relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(154,47,255,0.2),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(57,255,20,0.18),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(154,47,255,0.25),transparent_35%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 md:mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Game Categories Grid */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="relative overflow-hidden rounded-xl ring-1 ring-electric-500/30">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                  <img
                    src="/firekirin.jpg"
                    alt="Slots Games"
                    className="w-full h-24 md:h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 md:p-4 z-20">
                    <h3 className="text-sm md:text-xl font-bold text-neon-500 drop-shadow">Slots Games</h3>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl ring-1 ring-electric-500/30">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                  <img
                    src="/fishglory.jpg"
                    alt="Fish Tables"
                    className="w-full h-24 md:h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 md:p-4 z-20">
                    <h3 className="text-sm md:text-xl font-bold text-neon-500 drop-shadow">Fish Tables</h3>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-electric-500 via-neon-500 to-electric-400 rounded-lg blur-lg opacity-75"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                <div className="relative bg-charcoal-800/80 rounded-lg p-3 md:p-6 backdrop-blur-sm border border-electric-500/30">
                  <motion.div
                    className="text-lg md:text-2xl lg:text-3xl font-heading font-bold text-neon-500 flex items-center neon-title"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <div className="relative mr-2 md:mr-4">
                      <div className="absolute -inset-1 bg-gradient-to-r from-electric-500 to-neon-500 rounded-2xl blur-sm opacity-75"></div>
                      <div className="relative h-20 w-28 md:h-20 md:w-28 lg:h-24 lg:w-36 rounded-2xl border border-neon-500 shadow-[0_0_25px_rgba(57,255,20,0.45)] bg-gradient-to-br from-charcoal-900 via-midnight-975 to-charcoal-700 flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-heading text-neon-500">PG</span>
                      </div>
                    </div>
                    PIMP GAMEZ LOUNGE
                  </motion.div>
                  <div className="mt-1 md:mt-2 text-sm md:text-lg lg:text-xl text-white/90">
                    Electric visuals, bold credit drops, and a vibe that glows like the logo.
                  </div>
                </div>
              </div>
            </motion.div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight text-neon-500 neon-title">
              Pimp Gamez
              <span className="block text-white text-lg md:text-2xl font-sans font-semibold">Where neon legends play</span>
            </h1>
            <p className="mt-2 md:mt-6 text-sm md:text-lg text-white/80 max-w-xl">
              The underground hub for premium game credits and backend links. Dial up your room with a glow-soaked experience and instant access to the hottest titles.
            </p>
            <div className="mt-3 md:mt-8 space-y-1 md:space-y-4">
              {[
                'Neon green credit bundles that pop',
                'Direct backend portals for every title',
                'Fast drops with 24/7 support',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="mr-2 mt-0.5 text-neon-500 flex-shrink-0" size={16} />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 md:mt-10 flex flex-col sm:flex-row gap-2 md:gap-4">
              <motion.button
                onClick={() => onSectionChange('games')}
                className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-lg font-semibold text-center flex items-center justify-center gap-2 transition duration-200 text-sm md:text-base shadow-[0_0_25px_rgba(57,255,20,0.35)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Games <ArrowRight size={16} />
              </motion.button>
              <motion.button
                onClick={() => onSectionChange('backend')}
                className="px-4 md:px-6 py-2.5 md:py-3 bg-transparent hover:bg-white/5 border border-electric-500/40 text-white rounded-lg font-semibold text-center transition duration-200 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Admin Links
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm md:max-w-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-500 to-neon-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative bg-charcoal-800 p-3 md:p-6 rounded-2xl shadow-[0_0_45px_rgba(154,47,255,0.35)] border border-electric-500/30">
                <img
                  src="/sweepshub.jpg"
                  alt="Pimp Gamez experience"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
