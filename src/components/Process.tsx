"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/content";
import { SectionHeader } from "./ui/SectionHeader";

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Process"
          title="Un process simple, rapide et professionnel."
          description="Chaque demande est étudiée pour proposer un format cohérent, réaliste et adapté à votre événement."
        />

        <div className="relative mt-16">
          {/* timeline */}
          <div className="absolute left-1/2 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />

          <ol className="space-y-10 lg:space-y-16">
            {processSteps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={s.step}
                  className="grid items-center gap-6 lg:grid-cols-2"
                >
                  <motion.div
                    initial={{ opacity: 0, x: left ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative ${left ? "lg:order-1" : "lg:order-2 lg:text-right"}`}
                  >
                    <div
                      className={`glass hairline rounded-3xl p-8 ${left ? "" : "lg:ml-auto"}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-display text-3xl text-gradient-neon">
                          {s.step}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                      </div>
                      <h3 className="mt-3 font-display text-2xl uppercase tracking-tight text-bone sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-chrome/75 sm:text-base">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* node */}
                  <div className={`relative ${left ? "lg:order-2" : "lg:order-1"} hidden lg:block`}>
                    <div className="mx-auto h-3 w-3 rounded-full bg-gradient-to-br from-violet-neon to-pink-neon shadow-glow-pink" />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
