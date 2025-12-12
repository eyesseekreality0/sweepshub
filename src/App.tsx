import React from 'react';
import GamesList from './components/GamesList';
import BackendLinks from './components/BackendLinks';

function App() {
  return (
    <div className="min-h-screen bg-midnight-975 text-white">
      <main id="content-area" className="relative z-10">
        <GamesList />
        <BackendLinks />
      </main>
    </div>
  );
}

export default App;
