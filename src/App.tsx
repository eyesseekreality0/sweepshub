import React, { useEffect, useRef, useState } from 'react';
import GamesList from './components/GamesList';
import BackendLinks from './components/BackendLinks';
import CreditHome from './components/CreditHome';

type Route = 'home' | 'games' | 'admin';

const getRouteFromHash = (): Route => {
  const hash = window.location.hash;
  if (hash.includes('admin')) return 'admin';
  if (hash.includes('games')) return 'games';
  return 'home';
};

function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash);
  const [showIntro, setShowIntro] = useState(true);
  const [introError, setIntroError] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/home';
      setRoute('home');
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const attemptIntroPlay = async () => {
      if (!introVideoRef.current) return;

      try {
        await introVideoRef.current.play();
      } catch (error) {
        setIntroError(true);
        setShowIntro(false);
      }
    };

    attemptIntroPlay();
  }, [showIntro]);

  const navigate = (target: Route) => {
    const nextHash = target === 'home' ? '#/home' : target === 'games' ? '#/games' : '#/admin';
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setRoute(target);
  };

  const navItems: { key: Route; label: string }[] = [
    { key: 'home', label: 'Credits Home' },
    { key: 'games', label: 'Game Links' },
    { key: 'admin', label: 'Admin Links' }
  ];

  if (showIntro) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/logo.png')] bg-cover bg-center relative overflow-hidden px-6 py-10">
        <video
          ref={introVideoRef}
          className="relative z-10 max-w-4xl w-full max-h-[70vh] rounded-2xl shadow-[0_0_36px_rgba(57,255,20,0.35)] object-contain"
          src="/Untitled%20design.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => setShowIntro(false)}
          onError={() => {
            setIntroError(true);
            setShowIntro(false);
          }}
        />
        {introError && (
          <div className="absolute bottom-6 inset-x-6 z-20 text-center text-sm font-semibold text-white drop-shadow-[0_0_16px_rgba(57,255,20,0.6)]">
            Intro video failed to load. Continuing to site.
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-electric-500/15 to-neon-500/10" aria-hidden />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-[url('/logo.png')] bg-cover bg-center">
      <div className="fixed inset-0 bg-gradient-to-br from-white/20 via-electric-500/10 to-neon-500/10" aria-hidden />
      <div className="relative z-10">
        <header className="sticky top-0 z-20 bg-white/20 backdrop-blur-md border-b border-electric-500/20">
          <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
            <div className="flex items-center gap-3">
              <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez" className="h-10 sm:h-12 w-auto" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Pimp Gamez Hub</p>
                <h1 className="text-xl font-heading font-bold text-neon-500">Credits, Game & Admin Links</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 border border-electric-500/30 ${
                    route === item.key
                      ? 'bg-electric-500 text-black shadow-[0_0_18px_rgba(57,255,20,0.35)]'
                      : 'bg-charcoal-800 text-white hover:bg-charcoal-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main id="content-area" className="relative z-10 pb-8">
          {route === 'admin' ? (
            <BackendLinks />
          ) : route === 'games' ? (
            <GamesList />
          ) : (
            <CreditHome />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
