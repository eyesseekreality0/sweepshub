import React from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, Sparkles, ShieldCheck } from 'lucide-react';
import { premiumRate, tieredDiscount } from '../data/creditGames';

const CreditHome = () => {
  const renderGameGroup = (items: string[]) => (
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((game) => (
        <span
          key={game}
          className="px-3 py-1 rounded-full bg-charcoal-900/80 border border-electric-500/20 text-xs md:text-sm font-medium text-white/90"
        >
          {game}
        </span>
      ))}
    </div>
  );

  return (
    <section className="pt-6 pb-12 md:pb-16 relative" id="home">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <img
              src="/pimp-gamez-logo.svg"
              alt="Pimp Gamez logo"
              className="w-full max-w-3xl drop-shadow-[0_0_35px_rgba(57,255,20,0.35)]"
              loading="eager"
            />
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              Load up your favorite games instantly. Transparent pricing, quick fulfillment, and loyalty-worthy deals right
              up front.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          <motion.div
            className="lg:col-span-2 bg-charcoal-800/80 border border-electric-500/15 rounded-2xl p-6 md:p-8 shadow-[0_0_28px_rgba(57,255,20,0.12)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-electric-500/20 to-neon-500/20 border border-electric-500/30">
                  <BadgePercent className="text-electric-400" size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">Deals that scale</p>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-neon-500">
                    {tieredDiscount.rate}
                  </h2>
                  <p className="text-white/80 mt-1">{tieredDiscount.description}</p>
                </div>
              </div>
              <div className="rounded-xl bg-charcoal-900/70 border border-electric-500/20 px-4 py-3 text-sm text-white/80 shadow-inner">
                <p className="font-semibold text-white">{tieredDiscount.title}</p>
                <p>No hidden fees. Discounts calculated before checkout.</p>
              </div>
            </div>
            {renderGameGroup(tieredDiscount.games)}
          </motion.div>

          <motion.div
            className="bg-charcoal-800/80 border border-electric-500/15 rounded-2xl p-6 md:p-8 shadow-[0_0_28px_rgba(57,255,20,0.12)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            {renderGameGroup(premiumRate.games)}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 md:mt-10 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
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
              icon: <Sparkles className="text-neon-500" size={24} />,
              title: 'Curated lineup',
              body: 'Hand-picked platforms you already love to play on.',
            },
          ].map((perk) => (
            <div
              key={perk.title}
              className="bg-charcoal-800/80 border border-electric-500/10 rounded-xl p-4 shadow-[0_0_12px_rgba(57,255,20,0.18)] flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-charcoal-900/80 border border-electric-500/10">
                {perk.icon}
              </div>
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
