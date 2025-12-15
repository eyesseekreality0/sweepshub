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
        className="relative overflow-hidden rounded-xl p-3 flex flex-col items-center gap-3 border border-white/10 bg-slate-900/60 backdrop-blur-sm shadow-[0_14px_38px_-18px_rgba(14,165,233,0.35)]"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-sky-500/5 to-emerald-500/5" aria-hidden />
        <div className="relative w-full rounded-xl p-3 flex items-center justify-center bg-slate-800/80 shadow-[0_10px_30px_-12px_rgba(14,165,233,0.45)]">
          {logo ? (
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-12 sm:h-14 w-full object-contain drop-shadow-[0_6px_18px_rgba(56,189,248,0.35)]"
              loading="lazy"
            />
          ) : (
            <div className="h-12 sm:h-14 w-full rounded-lg border border-sky-400/50 text-[11px] text-sky-100 flex items-center justify-center bg-slate-900/60">
              {name}
            </div>
          )}
        </div>
        <p className="relative text-xs font-semibold text-sky-100 text-center leading-tight">{name}</p>
      </div>
    ))}
  </div>
);

const CreditHome = () => {
  const tieredLogos = buildGameEntries(tieredDiscount.games);
  const premiumLogos = buildGameEntries(premiumRate.games);

  return (
    <section className="pt-10 pb-14 md:pb-16 relative min-h-[calc(100vh-7.5rem)]" id="home">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5 md:space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-sky-400/30 px-4 py-2 text-sm font-semibold text-sky-100">
              <Sparkles size={18} className="text-sky-300" />
              Smooth credit loads without the glare
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-sky-50 leading-tight">
              A calmer take on premium credits
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
              Choose your platforms, lock in the amount, and keep players active with transparent rates. A refined palette and softer layout make the details easy to follow.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {["Fast drops", "Secure loads", "Responsive help"].map((pill) => (
                <div
                  key={pill}
                  className="rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm font-semibold text-sky-100 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.8)]"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-sky-500/15 via-emerald-500/12 to-fuchsia-500/10 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_-28px_rgba(56,189,248,0.45)] p-6 md:p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez logo" className="w-40" loading="eager" />
                <div className="rounded-full border border-sky-400/40 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-100">Updated layout</div>
              </div>
              <p className="text-slate-200 leading-relaxed">
                Built to spotlight clarity: cards group your most-used platforms, while accent glows guide the eye without overwhelming it.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[{ label: 'Platforms', value: `${games.length}+` }, { label: 'Featured rates', value: '5-12%' }, { label: 'Support', value: 'Daily' }].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
                    <div className="text-2xl font-bold text-sky-100">{item.value}</div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-300/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Featured credit partners',
              icon: <BadgePercent className="text-sky-400" size={28} />,
              logos: tieredLogos,
              rateLine: (
                <div className="flex flex-wrap gap-2 text-xs md:text-sm font-semibold text-slate-100">
                  <span className="text-sky-200">• 5k+ credits at 5%</span>
                  <span className="text-sky-200">• Under 5k credits at 10%</span>
                </div>
              ),
            },
            {
              title: 'Premium picks',
              icon: <Sparkles className="text-sky-400" size={28} />,
              logos: premiumLogos,
              rateLine: (
                <div className="flex flex-wrap gap-2 text-xs md:text-sm font-semibold text-slate-100">
                  <span className="text-sky-200">• Credits available at 12%</span>
                </div>
              ),
            },
          ].map((section) => (
            <motion.div
              key={section.title}
              className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_16px_46px_-24px_rgba(56,189,248,0.5)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-sky-400/30">
                  {section.icon}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-200/80">{section.title}</p>
                  <p className="text-slate-200/90">Tap a platform to load faster.</p>
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
              icon: <ShieldCheck className="text-sky-400" size={24} />,
              title: 'Secure loads',
              body: 'Credits for popular platforms so you can keep active players.',
            },
            {
              icon: <BadgePercent className="text-sky-400" size={24} />,
              title: 'Transparent pricing',
              body: 'Rates are front and center—no surprises when you top up.',
            },
            {
              icon: <Zap className="text-sky-400" size={24} />,
              title: 'Hands-on support',
              body: 'Quick responses if you ever need assistance.',
            },
          ].map((perk) => (
            <div
              key={perk.title}
              className="bg-slate-900/70 border border-white/10 rounded-xl p-4 shadow-[0_12px_34px_-24px_rgba(56,189,248,0.55)] flex items-start gap-3 backdrop-blur-sm"
            >
              <div className="p-2 rounded-lg bg-slate-950/80 border border-white/10">{perk.icon}</div>
              <div>
                <p className="font-semibold text-sky-100">{perk.title}</p>
                <p className="text-sm text-slate-200 leading-relaxed">{perk.body}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreditHome;
