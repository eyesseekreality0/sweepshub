import React from 'react';
import { motion } from 'framer-motion';
import { premiumRate, tieredDiscount } from '../data/creditGames';
import { games } from '../data/games';

const normalizeName = (value: string) => value.replace(/\s+/g, '').toLowerCase();
const gameLogoMap = new Map(games.map((game) => [normalizeName(game.name), game.logo]));
const customLogoMap = new Map(
  [
    ['luckyparadise', '/lp.jpg'],
    ['joker', '/joker.png'],
    ['mawal', '/mawal.png'],
    ['moolah', '/moo.jpg'],
    ['magictime', '/magic.jpg'],
  ] as const
);

const buildGameEntries = (names: string[]) =>
  names.map((name) => {
    const normalized = normalizeName(name);
    const fallbackLogo = customLogoMap.get(normalized);

    return {
      name,
      logo: gameLogoMap.get(normalized) ?? fallbackLogo,
    };
  });

const renderLogoGrid = (items: { name: string; logo: string | undefined }[]) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
    {items.map(({ name, logo }) => (
      <div
        key={name}
        className="group relative overflow-hidden rounded-xl p-3 flex flex-col items-center gap-3 border border-electric-500/25 bg-midnight-900/80 backdrop-blur-sm shadow-[0_14px_38px_-22px_rgba(154,47,255,0.5)]"
      >
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-500/15 via-midnight-900/40 to-neon-500/14 opacity-0 group-hover:opacity-100 transition"
          aria-hidden
        />
        <div className="relative w-full rounded-xl p-3 flex items-center justify-center bg-midnight-950/80 shadow-[0_10px_30px_-16px_rgba(154,47,255,0.45)]">
          {logo ? (
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-12 sm:h-14 w-full object-contain drop-shadow-[0_6px_18px_rgba(154,47,255,0.35)]"
              loading="lazy"
            />
          ) : (
            <div className="h-12 sm:h-14 w-full rounded-lg border border-electric-500/40 text-[11px] text-neon-300 flex items-center justify-center bg-midnight-950/70">
              {name}
            </div>
          )}
        </div>
        <p className="relative text-xs font-semibold text-electric-300 text-center leading-tight">{name}</p>
      </div>
    ))}
  </div>
);

const CreditHome = () => {
  const tieredLogos = buildGameEntries(tieredDiscount.games);
  const premiumLogos = buildGameEntries(premiumRate.games);

  return (
    <section className="pt-12 pb-16 md:pb-20 relative min-h-[calc(100vh-7.5rem)]" id="home">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(154,47,255,0.12),transparent_32%),radial-gradient(circle_at_78%_8%,rgba(57,255,20,0.1),transparent_28%)]"
        aria-hidden
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neon-500 drop-shadow-[0_0_18px_rgba(57,255,20,0.45)]">
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-neon-500 drop-shadow-[0_0_26px_rgba(57,255,20,0.45)]">
             A Reliable Credit Source for Gameroom Operators
          </h1>
          <p className="mt-3 text-base sm:text-lg text-electric-300">
            Consistent delivery and standardized rates you can plan your business around.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 items-start">
          {[{ ...tieredDiscount, logos: tieredLogos }, { ...premiumRate, logos: premiumLogos }].map((section, index) => (
            <motion.div
              key={section.title}
              className="relative overflow-hidden rounded-3xl border border-electric-500/30 bg-midnight-900/80 shadow-[0_24px_70px_-32px_rgba(154,47,255,0.6)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/15 via-midnight-900/40 to-neon-500/18" aria-hidden />
              <div className="relative p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-electric-300">{section.title}</p>
                    <h2 className="text-2xl font-heading font-semibold text-neon-500 drop-shadow-[0_0_18px_rgba(57,255,20,0.45)]">{section.rate}</h2>
                  </div>
                  <div className="rounded-xl border border-neon-500/40 bg-neon-500/10 px-3 py-2 text-xs font-semibold text-neon-300">
                    {section.description}
                  </div>
                </div>

                {renderLogoGrid(section.logos)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditHome;
