import React, { useCallback, useEffect, useRef, useState } from 'react';
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

  const navigate = useCallback((target: Route) => {
    const nextHash = target === 'home' ? '#/home' : target === 'games' ? '#/games' : '#/admin';
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setRoute(target);
  }, []);

  const handleIntroFinish = useCallback(() => {
    navigate('home');
    setShowIntro(false);
  }, [navigate]);

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
      } catch {
        setIntroError(true);
        handleIntroFinish();
      }
    };

    attemptIntroPlay();
  }, [handleIntroFinish, showIntro]);

  const navItems: { key: Route; label: string; accent: string }[] = [
    { key: 'home', label: 'Credits', accent: 'Rates & Logos' },
    { key: 'games', label: 'Game Links', accent: 'Play Direct' },
    { key: 'admin', label: 'Admin Links', accent: 'Portal Access' }
  ];

  if (showIntro) {
    return (
      <div className="relative min-h-screen w-screen overflow-hidden bg-black">
        <video
          ref={introVideoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/Untitled%20design.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleIntroFinish}
          onError={() => {
            setIntroError(true);
            handleIntroFinish();
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-electric-500/25 to-neon-500/20" aria-hidden />
        {introError && (
          <div className="absolute bottom-6 inset-x-6 z-20 text-center text-sm font-semibold text-white drop-shadow-[0_0_16px_rgba(57,255,20,0.6)]">
            Intro video failed to load. Continuing to site.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-midnight-975 bg-[url('/logo.png')] bg-cover bg-center">
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(154,47,255,0.16),transparent_35%),radial-gradient(circle_at_82%_14%,rgba(57,255,20,0.18),transparent_32%),radial-gradient(circle_at_72%_82%,rgba(154,47,255,0.12),transparent_34%),radial-gradient(circle_at_28%_82%,rgba(57,255,20,0.14),transparent_30%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/80 via-midnight-975/70 to-charcoal-800/80" aria-hidden />
      <div className="relative z-10">
        <header className="sticky top-0 z-20 bg-midnight-900/70 backdrop-blur-lg border-b border-electric-500/20 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
            <div className="flex items-center gap-3">
              <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez" className="h-10 sm:h-12 w-auto drop-shadow-[0_0_24px_rgba(154,47,255,0.55)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-electric-400/80">Pimp Gamez Hub</p>
                <h1 className="text-2xl font-heading font-semibold text-neon-500 drop-shadow-[0_0_22px_rgba(57,255,20,0.45)]">Credits, Game & Admin Links</h1>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch lg:items-center justify-end gap-3 lg:gap-4 w-full lg:w-auto">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  aria-label={item.label}
                  className={`group relative flex flex-col items-start justify-center rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-500/60 min-w-[8.25rem] sm:min-w-[9rem] shrink-0 snap-center text-left ${
                    route === item.key
                      ? 'bg-gradient-to-br from-electric-500/30 via-neon-500/24 to-electric-400/28 border border-electric-400/50 shadow-[0_10px_40px_-18px_rgba(154,47,255,0.6)] scale-[1.02]'
                      : 'bg-white/5 border border-white/10 hover:border-electric-400/40 hover:bg-electric-500/5'
                  }`}
                >
                  <span className="text-sm sm:text-base font-semibold text-neon-500 drop-shadow-[0_0_12px_rgba(57,255,20,0.4)]">
                    {item.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-neon-500">{item.accent}</span>
                  <span className="absolute inset-y-0 right-2 flex items-center opacity-0 group-hover:opacity-100 transition text-neon-500 text-xs">
                    »
                  </span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <main id="content-area" className="relative z-10 pb-8 min-h-[calc(100vh-7.5rem)]">
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
