import React from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, CreditCard, ShieldCheck, Sparkles, Zap } from 'lucide-react';
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
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
    {items.map(({ name, logo }) => (
      <div
        key={name}
        className="group relative overflow-hidden rounded-xl p-3 flex flex-col items-center gap-3 border border-white/10 bg-slate-950/70 backdrop-blur-sm shadow-[0_14px_38px_-22px_rgba(56,189,248,0.45)]"
      >
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/10 via-emerald-500/8 to-fuchsia-500/8 opacity-0 group-hover:opacity-100 transition"
          aria-hidden
        />
        <div className="relative w-full rounded-xl p-3 flex items-center justify-center bg-slate-900/80 shadow-[0_10px_30px_-16px_rgba(56,189,248,0.45)]">
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
    <section className="pt-12 pb-16 md:pb-20 relative min-h-[calc(100vh-7.5rem)]" id="home">
      <div
        className="absolute inset-x-0 top-12 mx-auto h-80 w-[92%] sm:w-4/5 rounded-[36px] bg-gradient-to-br from-sky-500/12 via-emerald-500/10 to-fuchsia-500/10 blur-3xl"
        aria-hidden
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-sky-400/40 px-4 py-2 text-sm font-semibold text-sky-100 shadow-[0_10px_30px_-18px_rgba(56,189,248,0.45)]">
              <Sparkles size={18} className="text-sky-300" />
              Built for the Pimp Gamez glow
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-heading font-semibold text-sky-50 leading-tight">
                Sleeker credits for players who never slow down
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                A polished hub that mirrors the neon tones of the Pimp Gamez logo. Organised cards, calmer spacing, and responsive sizing keep every credit drop easy to follow on any screen.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {["Fast drops", "Fraud-shielded", "Responsive help"].map((pill) => (
                <div
                  key={pill}
                  className="rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm font-semibold text-sky-100 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.8)] flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-300" aria-hidden />
                  {pill}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[{ label: 'Platforms', value: `${games.length}+` }, { label: 'Featured rate', value: '5-12%' }, { label: 'Support', value: 'Daily' }, { label: 'Avg. drop', value: 'under 5 min' }].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 flex flex-col gap-1 shadow-[0_14px_40px_-24px_rgba(56,189,248,0.45)]"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-300/80">{item.label}</p>
                  <div className="text-xl md:text-2xl font-bold text-sky-100">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-sky-500/20 via-emerald-500/14 to-fuchsia-500/16 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_24px_70px_-30px_rgba(56,189,248,0.55)] p-6 md:p-8 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez logo" className="w-40" loading="eager" />
                  <div className="rounded-lg border border-sky-400/40 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-100">Home refresh</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-500/40 to-emerald-500/30 border border-sky-300/40 flex items-center justify-center text-sky-50 shadow-[0_10px_30px_-16px_rgba(56,189,248,0.5)]">
                    <CreditCard size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-200">Ready to top up?</p>
                    <p className="text-lg font-semibold text-sky-100">Pick a platform below.</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-200 leading-relaxed">
                Every tile follows the same neon-forward palette as the logo, with tighter padding for mobile and clearer hierarchy for desktop. Switch between featured rates and premium picks without scrolling fatigue.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[{ label: 'Tiered discounts', value: 'Best for 5k+' }, { label: 'Premium picks', value: 'Direct at 12%' }].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between shadow-[0_12px_32px_-24px_rgba(56,189,248,0.45)]"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-300/80">{item.label}</p>
                      <p className="text-base font-semibold text-sky-100">{item.value}</p>
                    </div>
                    <span className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500/50 to-emerald-500/40 border border-sky-300/40" aria-hidden />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-start">
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
              className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_-28px_rgba(56,189,248,0.55)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-sky-400/30">{section.icon}</div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-200/80">{section.title}</p>
                    <p className="text-slate-200/90">Tap a platform to load faster.</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-sky-100 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                  Live availability
                </div>
              </div>
              {section.rateLine}
              {renderLogoGrid(section.logos)}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
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
              className="bg-slate-950/80 border border-white/10 rounded-2xl p-5 shadow-[0_12px_34px_-20px_rgba(56,189,248,0.55)] flex items-start gap-3 backdrop-blur-sm"
            >
              <div className="p-2 rounded-lg bg-slate-900/80 border border-white/10">{perk.icon}</div>
              <div>
                <p className="font-semibold text-sky-100">{perk.title}</p>
                <p className="text-sm text-slate-200 leading-relaxed">{perk.body}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 md:mt-12 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {[
            { title: 'Pick a game', detail: 'Choose the platform above to lock your preferred rate.' },
            { title: 'Drop the credits', detail: 'Send the amount and we handle the verification step.' },
            { title: 'Stay playing', detail: 'We notify you as soon as the credit hits your account.' },
          ].map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_14px_38px_-22px_rgba(56,189,248,0.5)] flex gap-3"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500/40 to-emerald-500/30 border border-sky-300/40 text-sky-50 font-semibold flex items-center justify-center">{index + 1}</div>
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-300/80">{step.title}</p>
                <p className="text-base text-sky-50 leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreditHome;
