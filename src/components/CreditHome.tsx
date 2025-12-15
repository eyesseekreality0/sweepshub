import React from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { premiumRate, tieredDiscount } from '../data/creditGames';
import { games } from '../data/games';

const normalizeName = (value: string) => value.replace(/\s+/g, '').toLowerCase();
const gameLogoMap = new Map(games.map((game) => [normalizeName(game.name), game.logo]));

const buildGameEntries = (names: string[]) =>
  names.map((name) => ({
    name,
    logo: gameLogoMap.get(normalizeName(name)),
  }));

const renderLogoGrid = (items: { name: string; logo: string | undefined }[]) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
    {items.map(({ name, logo }) => (
      <div
        key={name}
        className="bg-charcoal-900/70 border border-electric-500/20 rounded-xl p-3 flex flex-col items-center gap-2 shadow-[0_0_12px_rgba(57,255,20,0.1)]"
      >
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="h-12 w-full object-contain" loading="lazy" />
        ) : (
          <div className="h-12 w-full rounded-lg bg-charcoal-800 flex items-center justify-center text-[11px] text-white/70 border border-dashed border-electric-500/30">
            {name}
          </div>
        )}
        <p className="text-xs font-semibold text-white/90 text-center leading-tight">{name}</p>
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
            <p className="text-sm uppercase tracking-[0.25em] text-white/60 flex items-center gap-2">
              <span className="h-[1px] w-10 bg-electric-500/60" aria-hidden="true" />
              Instant credit loads
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neon-500 leading-tight">
              Premium credits for the games you actually play
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
              Pick your platform, drop the amount, and we handle the rest. Transparent pricing and rapid fulfillment keep you in the
              action without the wait.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[tieredDiscount, premiumRate].map((offer) => (
                <div
                  key={offer.title}
                  className="bg-charcoal-900/70 border border-electric-500/15 rounded-xl px-4 py-3 flex flex-col gap-1"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">{offer.title}</p>
                  <p className="text-lg font-heading font-bold text-neon-500">{offer.rate}</p>
                  <p className="text-sm text-white/75 leading-snug">{offer.description}</p>
                </div>
              ))}
              <div className="bg-charcoal-900/70 border border-electric-500/15 rounded-xl px-4 py-3 flex flex-col gap-1">
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">Fulfillment</p>
                <p className="text-lg font-heading font-bold text-neon-500">Fast & secure</p>
                <p className="text-sm text-white/75 leading-snug">Verified loads with responsive support when you need it.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/pimp-gamez-logo.svg" alt="Pimp Gamez logo" className="w-full max-w-2xl" loading="eager" />
            <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
              {["No background clutter", "Focused on your games", "Trusted seller", "Clear neon rates"].map((pill) => (
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
          <motion.div
            className="bg-charcoal-800/80 border border-electric-500/15 rounded-2xl p-6 md:p-8 shadow-[0_0_22px_rgba(57,255,20,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-electric-500/20 to-neon-500/20 border border-electric-500/30">
                  <BadgePercent className="text-electric-400" size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">Deals that scale</p>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-neon-500">{tieredDiscount.rate}</h2>
                  <p className="text-white/80 mt-1">{tieredDiscount.description}</p>
                </div>
              </div>
              <div className="rounded-xl bg-charcoal-900/70 border border-electric-500/20 px-4 py-3 text-sm text-white/80 shadow-inner">
                <p className="font-semibold text-white">{tieredDiscount.title}</p>
                <p>No hidden fees. Discounts calculated before checkout.</p>
              </div>
            </div>
            {renderLogoGrid(tieredLogos)}
          </motion.div>

          <motion.div
            className="bg-charcoal-800/80 border border-electric-500/15 rounded-2xl p-6 md:p-8 shadow-[0_0_22px_rgba(57,255,20,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-electric-500/20 to-neon-500/20 border border-electric-500/30">
                <Sparkles className="text-electric-400" size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">Premium picks</p>
                <h2 className="text-2xl font-heading font-bold text-neon-500">{premiumRate.rate}</h2>
                <p className="text-white/80 mt-1">{premiumRate.description}</p>
              </div>
            </div>
            {renderLogoGrid(premiumLogos)}
          </motion.div>
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
              body: 'Trusted credits with fast turnaround so you can jump back into the action.',
            },
            {
              icon: <BadgePercent className="text-neon-500" size={24} />,
              title: 'Transparent pricing',
              body: 'Rates are front and center—no surprises when you top up.',
            },
            {
              icon: <Zap className="text-neon-500" size={24} />,
              title: 'Hands-on support',
              body: 'Quick responses if you ever need help with your order.',
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
