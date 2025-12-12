import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import GamesList from './components/GamesList';
import BackendLinks from './components/BackendLinks';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [currentSection, setCurrentSection] = React.useState<'games' | 'backend'>('games');

  const handleSectionChange = (section: 'games' | 'backend') => {
    setCurrentSection(section);
    // Scroll to the top of the content area
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-midnight-975 text-white relative overflow-hidden">
      <ParticleBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Header currentSection={currentSection} onSectionChange={handleSectionChange} />
        <main>
          <Hero onSectionChange={handleSectionChange} />
          <div id="content-area">
            {currentSection === 'games' ? (
              <>
                <GamesList />
                <div className="container mx-auto px-4 pb-8 md:pb-16">
                  <motion.button
                    onClick={() => handleSectionChange('backend')}
                    className="mx-auto block px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base shadow-[0_0_25px_rgba(57,255,20,0.4)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Backend Links
                  </motion.button>
                </div>
              </>
            ) : (
              <>
                <BackendLinks />
                <div className="container mx-auto px-4 pb-8 md:pb-16">
                  <motion.button
                    onClick={() => handleSectionChange('games')}
                    className="mx-auto block px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r from-electric-500 to-neon-500 hover:from-electric-400 hover:to-neon-400 text-black rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base shadow-[0_0_25px_rgba(57,255,20,0.4)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Back to Games
                  </motion.button>
                </div>
              </>
            )}
          </div>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
