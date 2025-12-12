import React, { useEffect, useState } from 'react';
import GamesList from './components/GamesList';
import BackendLinks from './components/BackendLinks';

type Route = 'games' | 'admin';

const getRouteFromHash = (): Route => {
  if (window.location.hash.includes('admin')) return 'admin';
  return 'games';
};

function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/games';
      setRoute('games');
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (target: Route) => {
    const nextHash = target === 'games' ? '#/games' : '#/admin';
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setRoute(target);
  };

  return (
    <div className="min-h-screen bg-midnight-975 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/tech-pimp-bg.svg')] bg-cover bg-center" aria-hidden="true" />
      <div className="absolute inset-0 bg-midnight-975/75 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative z-10">
        <header className="sticky top-0 z-20 bg-midnight-975/85 backdrop-blur border-b border-electric-500/10">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Pimp Gamez Hub</p>
              <h1 className="text-xl font-heading font-bold text-neon-500">Game & Admin Links</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('games')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 border border-electric-500/30 ${
                  route === 'games'
                    ? 'bg-electric-500 text-black shadow-[0_0_18px_rgba(57,255,20,0.35)]'
                    : 'bg-charcoal-800 text-white hover:bg-charcoal-700'
                }`}
              >
                Game Links
              </button>
              <button
                onClick={() => navigate('admin')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 border border-electric-500/30 ${
                  route === 'admin'
                    ? 'bg-electric-500 text-black shadow-[0_0_18px_rgba(57,255,20,0.35)]'
                    : 'bg-charcoal-800 text-white hover:bg-charcoal-700'
                }`}
              >
                Admin Links
              </button>
            </div>
          </div>
        </header>

        <main id="content-area" className="relative z-10 pb-8">
          {route === 'admin' ? <BackendLinks /> : <GamesList />}
        </main>
      </div>
    </div>
  );
}

export default App;
