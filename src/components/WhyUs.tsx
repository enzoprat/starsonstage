"use client";

import { motion } from "framer-motion";
import { values } from "@/data/content";
import { SectionHeader } from "./ui/SectionHeader";

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Pourquoi nous"
          title="Plus qu’un contact artiste, un vrai cadre de booking."
          description="Notre rôle : transformer une demande en événement réussi. Brief, sélection, coordination — chaque étape est cadrée."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="glass hairline relative h-full overflow-hidden rounded-3xl p-8">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-violet-neon/15 to-pink-neon/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  <div className="font-display text-4xl text-chrome/30">
                    0{i + 1}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                </div>

                <h3 className="relative mt-6 font-display text-2xl uppercase tracking-tight text-bone sm:text-3xl">
                  {v.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-chrome/75 sm:text-base">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
