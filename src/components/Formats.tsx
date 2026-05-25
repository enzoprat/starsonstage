"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formats } from "@/data/content";
import { SectionHeader } from "./ui/SectionHeader";

const visuals = [
  {
    grad: "from-violet-neon/40 via-pink-neon/20 to-ink-night",
    accent: "rgba(139,92,246,0.5)",
  },
  {
    grad: "from-pink-neon/40 via-champagne/15 to-ink-950",
    accent: "rgba(236,72,153,0.45)",
  },
  {
    grad: "from-ink-night via-violet-neon/25 to-pink-neon/30",
    accent: "rgba(139,92,246,0.4)",
  },
  {
    grad: "from-champagne/35 via-violet-neon/20 to-ink-950",
    accent: "rgba(214,181,109,0.5)",
  },
];

export function Formats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Formats"
          title="Quatre formats. Une infinité de soirées."
          description="Choisissez le format qui correspond à votre événement, votre durée et votre public."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {formats.map((f, i) => {
            const v = visuals[i % visuals.length];
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="hairline hairline-rotate relative overflow-hidden rounded-3xl bg-ink-900">
                  {/* visual */}
                  <div className={`relative aspect-[16/9] w-full bg-gradient-to-br ${v.grad}`}>
                    <div
                      className="absolute inset-0 opacity-50 mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
                        backgroundSize: "3px 3px",
                      }}
                    />
                    <div
                      className="absolute -top-1/2 left-1/2 h-[140%] w-[60%] -translate-x-1/2 opacity-50"
                      style={{
                        background: `radial-gradient(closest-side, ${v.accent}, transparent 70%)`,
                      }}
                    />
                    <div className="absolute inset-x-6 bottom-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-bone/80">
                      <span>Format {String(i + 1).padStart(2, "0")}</span>
                      <span>Stars On Stage</span>
                    </div>
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="font-display text-3xl uppercase tracking-tight text-bone sm:text-4xl">
                        {f.name}
                      </span>
                    </div>
                  </div>

                  {/* content */}
                  <div className="relative p-7">
                    <p className="text-sm leading-relaxed text-chrome/80 sm:text-base">
                      {f.description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <span className="chip">{f.use}</span>
                      <Link
                        href="#contact"
                        className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-bone"
                      >
                        Demander ce format
                        <span className="transition group-hover/btn:translate-x-0.5">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
