"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroBadges } from "@/data/content";

const floatingCards = [
  { label: "Showcase", x: "8%", y: "18%", rotate: -6, delay: 0.2 },
  { label: "DJ Set", x: "82%", y: "14%", rotate: 4, delay: 0.35 },
  { label: "Club Event", x: "12%", y: "70%", rotate: -3, delay: 0.5 },
  { label: "BDE", x: "78%", y: "66%", rotate: 6, delay: 0.65 },
  { label: "Private Event", x: "50%", y: "85%", rotate: 0, delay: 0.8 },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden pt-[160px] pb-24 md:pt-[200px] md:pb-32"
    >
      {/* Floating format cards (hidden on small screens) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {floatingCards.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30, rotate: c.rotate }}
            animate={{ opacity: 1, y: 0, rotate: c.rotate }}
            transition={{ delay: c.delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: c.x, top: c.y, ["--tw-rotate" as any]: `${c.rotate}deg` }}
            className="absolute animate-float-slow"
          >
            <div className="glass-strong hairline relative flex items-center gap-2 rounded-2xl px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-neon to-violet-neon shadow-glow-pink" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bone">
                {c.label}
              </span>
            </div>
          </motion.div>
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
            <span className="block">Bookez les artistes</span>
            <span className="relative block">
              <span className="text-gradient-neon">qui font exploser</span>
            </span>
            <span className="block">vos soirées.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base text-chrome/80 sm:text-lg">
            Stars On Stage accompagne clubs, bars, plages, BDE et organisateurs
            d’événements dans le booking d’artistes, DJ et showcases adaptés à
            leur public, leur budget et leur date.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="#contact" className="btn-primary">
              Demander un booking
              <ArrowRight />
            </Link>
            <Link href="#evenements" className="btn-ghost">
              Découvrir les formats
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {heroBadges.map((b) => (
              <span key={b} className="chip">
                {b}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stage glow under hero */}
        <div className="pointer-events-none mx-auto mt-16 h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-pink-neon/60 to-transparent" />
        <div className="pointer-events-none mx-auto mt-1 h-24 w-full max-w-4xl bg-gradient-to-b from-pink-neon/15 via-violet-neon/10 to-transparent blur-2xl" />
      </div>
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
