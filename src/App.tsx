import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const [videoError, setVideoError] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources = useMemo(
    () => [
      {
        src: 'https://cdn.coverr.co/videos/coverr-fantastic-galaxy-1467/1080p.mp4',
        type: 'video/mp4'
      },
      {
        src: 'https://cdn.coverr.co/videos/coverr-night-sky-4310/1080p.mp4',
        type: 'video/mp4'
      }
    ],
    []
  );

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

  useEffect(() => {
    const attemptPlay = async () => {
      const element = videoRef.current;
      if (!element) return;

      try {
        await element.play();
      } catch (error) {
        setVideoError(true);
      }
    };

    attemptPlay();
  }, []);

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
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <video
          ref={introVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" aria-hidden />
        <div className="relative z-10 flex flex-col items-center gap-4 text-white text-center px-6">
          <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez" className="h-16 w-auto drop-shadow-[0_0_24px_rgba(57,255,20,0.45)]" />
          <p className="text-lg font-semibold">Preparing your experience...</p>
          {introError && <p className="text-sm text-red-200">Intro video failed to load. Continuing to site.</p>}
          <button
            onClick={() => setShowIntro(false)}
            className="px-4 py-2 rounded-lg bg-electric-500 text-black font-semibold shadow-[0_0_18px_rgba(57,255,20,0.35)] hover:shadow-[0_0_24px_rgba(57,255,20,0.45)] transition-shadow"
          >
            Skip Intro
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      {!videoError && (
        <video
          ref={videoRef}
          className="fixed inset-0 w-full h-full object-cover brightness-[0.62] saturate-125"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/tech-pimp-bg.svg"
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoError(false)}
        >
          {videoSources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      )}
      {videoError && (
        <div
          className="fixed inset-0 bg-[url('/tech-pimp-bg.svg')] bg-cover bg-center brightness-75"
          aria-hidden
        />
      )}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0f1e]/80 via-[#0c1b29]/70 to-[#120926]/78 mix-blend-screen" aria-hidden />
      <div className="relative z-10">
        <header className="sticky top-0 z-20 bg-midnight-975/85 backdrop-blur border-b border-electric-500/10">
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
