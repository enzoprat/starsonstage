"use client";

import { motion } from "framer-motion";
import { heroBadges } from "@/data/content";
import { MagneticCTA } from "./ui/MagneticCTA";
import { ParallaxLayer } from "./ui/ParallaxLayer";

const floatingCards = [
  { label: "Showcase", x: "8%", y: "18%", rotate: -6, delay: 0.2, depth: 0.7 },
  { label: "DJ Set", x: "82%", y: "14%", rotate: 4, delay: 0.35, depth: 0.9 },
  { label: "Club Event", x: "12%", y: "70%", rotate: -3, delay: 0.5, depth: 0.6 },
  { label: "BDE", x: "78%", y: "66%", rotate: 6, delay: 0.65, depth: 0.8 },
  { label: "Private Event", x: "50%", y: "85%", rotate: 0, delay: 0.8, depth: 0.5 },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden pt-[160px] pb-24 md:pt-[200px] md:pb-32"
    >
      {/* Floating format cards with parallax */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {floatingCards.map((c) => (
          <ParallaxLayer
            key={c.label}
            depth={c.depth}
            className="absolute"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: c.rotate }}
              animate={{ opacity: 1, y: 0, rotate: c.rotate }}
              transition={{ delay: c.delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                left: c.x,
                top: c.y,
                position: "absolute",
                ["--tw-rotate" as never]: `${c.rotate}deg`,
              }}
              className="animate-float-slow"
            >
              <div className="glass-strong hairline relative flex items-center gap-2 rounded-2xl px-4 py-2.5 shadow-glow-soft">
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-neon to-violet-neon shadow-glow-pink" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bone">
                  {c.label}
                </span>
              </div>
            </motion.div>
          </ParallaxLayer>
        ))}
      </div>

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-neon shadow-glow-pink" />
            Agence de booking — France & international
          </span>

          <h1 className="mt-8 font-display text-5xl uppercase leading-[0.95] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Bookez les artistes
            </motion.span>
            <motion.span
              className="relative block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-gradient-neon">qui font exploser</span>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              vos soirées.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-7 max-w-2xl text-base text-chrome/80 sm:text-lg"
          >
            Stars On Stage accompagne clubs, bars, plages, BDE et organisateurs
            d’événements dans le booking d’artistes, DJ et showcases adaptés à
            leur public, leur budget et leur date.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <MagneticCTA href="#contact">
              Demander un booking
              <ArrowRight />
            </MagneticCTA>
            <MagneticCTA href="#evenements" variant="ghost">
              Découvrir les formats
            </MagneticCTA>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {heroBadges.map((b) => (
              <span key={b} className="chip">
                {b}
              </span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-14 flex flex-col items-center gap-2 text-chrome/40"
          >
            <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            <span className="relative h-7 w-[1px] overflow-hidden bg-white/10">
              <span className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-pink-neon to-transparent animate-[scroll-hint_2s_ease-in-out_infinite]" />
            </span>
          </motion.div>
        </motion.div>

        {/* Stage glow under hero */}
        <div className="pointer-events-none mx-auto mt-16 h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-pink-neon/60 to-transparent" />
        <div className="pointer-events-none mx-auto mt-1 h-24 w-full max-w-4xl bg-gradient-to-b from-pink-neon/15 via-violet-neon/10 to-transparent blur-2xl" />
      </div>

      <style jsx>{`
        @keyframes scroll-hint {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(100%); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
