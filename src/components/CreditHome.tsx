import React from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, ShieldCheck, Sparkles, Zap } from 'lucide-react';
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
    ['magictime', '/fortune2go.jpg'],
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
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5">
    {items.map(({ name, logo }) => (
      <div
        key={name}
        className="rounded-xl p-3 flex flex-col items-center gap-2 border border-electric-500/30 bg-white/5 backdrop-blur-md shadow-[0_0_12px_rgba(57,255,20,0.14)]"
      >
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="h-12 w-full object-contain" loading="lazy" />
        ) : (
          <div className="h-12 w-full rounded-lg bg-white/10 flex items-center justify-center text-[11px] text-white/80 border border-dashed border-electric-500/40">
            {name}
          </div>
        )}
        <p className="text-xs font-semibold text-white text-center leading-tight">{name}</p>
      </div>
    ))}
  </div>
);

const CreditHome = () => {
  const tieredLogos = buildGameEntries(tieredDiscount.games);
  const premiumLogos = buildGameEntries(premiumRate.games);

  return (
    <section className="pt-6 pb-12 md:pb-16 relative" id="home">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 md:space-y-6">
            <p className="text-base uppercase tracking-[0.3em] text-neon-400/90 flex items-center gap-2 font-semibold">
              <span className="h-[1px] w-10 bg-electric-500/60" aria-hidden="true" />
              Epic instant credit loads
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-neon-400 leading-tight drop-shadow-[0_0_24px_rgba(98,255,203,0.35)]">
              Premium credits, cosmic vibes
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Pick your platforms, drop the amount, and we handle the rest. Ultra-readable neon text keeps your eye on what matters while the universe loops behind you.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Fast drops", "Secure loads", "Responsive support"].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full bg-charcoal-900/80 border border-electric-500/25 text-sm font-semibold text-white/90 shadow-[0_0_18px_rgba(154,47,255,0.25)]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez logo" className="w-full max-w-2xl" loading="eager" />
            <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
              {["Trusted Distributor", "Clear Rates"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-2 rounded-lg bg-charcoal-900/80 border border-electric-500/10 text-xs text-white/80 text-center"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[{ title: 'Featured credit partners', icon: <BadgePercent className="text-neon-500" size={28} />, logos: tieredLogos, rateLine: (
              <div className="flex flex-wrap gap-2 text-xs md:text-sm font-semibold text-white/90">
                <span className="px-3 py-2 rounded-lg bg-white/10 border border-electric-500/25">Purchase 5k+ credits at 5%</span>
                <span className="px-3 py-2 rounded-lg bg-white/10 border border-electric-500/25">Purchase under 5k credits at 10%</span>
              </div>
            ) }, { title: 'Premium picks', icon: <Sparkles className="text-neon-500" size={28} />, logos: premiumLogos, rateLine: (
              <div className="flex flex-wrap gap-2 text-xs md:text-sm font-semibold text-white/90">
                <span className="px-3 py-2 rounded-lg bg-white/10 border border-electric-500/25">Purchase credits at 12%</span>
              </div>
            ) }].map((section) => (
            <motion.div
              key={section.title}
              className="bg-charcoal-800/80 border border-electric-500/15 rounded-2xl p-6 md:p-8 shadow-[0_0_22px_rgba(57,255,20,0.12)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-electric-500/20 to-neon-500/20 border border-electric-500/30">
                  {section.icon}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/70">{section.title}</p>
                  <p className="text-white/85">Tap a platform to load faster.</p>
                </div>
              </div>
              {section.rateLine}
              {renderLogoGrid(section.logos)}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {[
            {
              icon: <ShieldCheck className="text-neon-500" size={24} />,
              title: 'Secure loads',
              body: 'Credits for popular platforms so you can keep active players.',
            },
            {
              icon: <BadgePercent className="text-neon-500" size={24} />,
              title: 'Transparent pricing',
              body: 'Rates are front and center—no surprises when you top up.',
            },
            {
              icon: <Zap className="text-neon-500" size={24} />,
              title: 'Hands-on support',
              body: 'Quick responses if you ever need assistance.',
            },
          ].map((perk) => (
            <div
              key={perk.title}
              className="bg-charcoal-800/80 border border-electric-500/10 rounded-xl p-4 shadow-[0_0_12px_rgba(57,255,20,0.18)] flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-charcoal-900/80 border border-electric-500/10">{perk.icon}</div>
              <div>
                <p className="font-semibold text-white">{perk.title}</p>
                <p className="text-sm text-white/75 leading-relaxed">{perk.body}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreditHome;
