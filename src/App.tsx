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

  const navigate = (target: Route) => {
    const nextHash = target === 'home' ? '#/home' : target === 'games' ? '#/games' : '#/admin';
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setRoute(target);
  };

  const handleIntroFinish = () => {
    navigate('home');
    setShowIntro(false);
  };

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
  }, [showIntro]);

  const navItems: { key: Route; label: string; image: string }[] = [
    { key: 'home', label: 'Credits Home', image: '/credits%20home.png' },
    { key: 'games', label: 'Game Links', image: '/game%20links.png' },
    { key: 'admin', label: 'Admin Links', image: '/admin%20links.png' }
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
    <div className="min-h-screen text-sky-50 relative overflow-hidden bg-slate-950">
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.16),transparent_32%),radial-gradient(circle_at_75%_80%,rgba(52,211,153,0.12),transparent_34%)]"
        aria-hidden
      />
      <div className="relative z-10">
        <header className="sticky top-0 z-20 bg-slate-900/70 backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
            <div className="flex items-center gap-3">
              <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez" className="h-10 sm:h-12 w-auto" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300/80">Pimp Gamez Hub</p>
                <h1 className="text-2xl font-heading font-semibold text-sky-200">Credits, Game & Admin Links</h1>
              </div>
            </div>
            <div className="flex items-stretch lg:items-center justify-end gap-3 lg:gap-4 w-full lg:w-auto overflow-x-auto pb-2 -mb-2 lg:pb-0 lg:-mb-0 snap-x snap-mandatory">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  aria-label={item.label}
                  className={`group relative flex items-center justify-center rounded-xl p-2 sm:p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400/60 min-w-[8.25rem] sm:min-w-[9rem] shrink-0 snap-center ${
                    route === item.key
                      ? 'bg-gradient-to-br from-sky-500/25 via-emerald-500/20 to-cyan-500/25 border border-sky-400/40 shadow-[0_10px_40px_-18px_rgba(14,165,233,0.6)] scale-[1.02]'
                      : 'bg-white/5 border border-white/10 hover:border-sky-300/40 hover:bg-white/10'
                  }`}
                >
                  <span className="sr-only">{item.label}</span>
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-14 sm:h-16 md:h-20 w-auto object-contain block mx-auto drop-shadow-[0_10px_22px_rgba(14,165,233,0.35)] transition duration-200 group-hover:drop-shadow-[0_12px_24px_rgba(14,165,233,0.5)]"
                    loading="eager"
                  />
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
