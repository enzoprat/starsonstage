"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a number from 0 to its target value when scrolled into view.
 * Supports a prefix (e.g. "+") and a suffix (e.g. "K"). For non-numeric
 * values (e.g. "FR / INT", "<24H") just render as-is.
 */
export function AnimatedCounter({
  value,
  duration = 1400,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  // Parse: e.g. "+50" → { prefix: "+", number: 50, suffix: "" }
  const match = value.match(/^([^\d-]*)(-?\d+(?:[.,]\d+)?)([^\d]*)$/);
  const isNumeric = Boolean(match);

  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2].replace(",", ".")) : 0;
  const suffix = match?.[3] ?? "";

  const [display, setDisplay] = useState<number>(isNumeric ? 0 : 0);

  useEffect(() => {
    if (!isNumeric || !inView) return;
    let raf = 0;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(ease(t) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, target, duration]);

  if (!isNumeric) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
