"use client";

import { useRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * A premium CTA with magnetic hover (cursor pulls the button slightly toward it)
 * and a glowing halo behind the button. Layered on top of the .btn-primary class
 * so it inherits all visual styling. Disabled on touch.
 */
export function MagneticCTA({
  href,
  children,
  className,
  variant = "primary",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = wrapperRef.current;
    const link = innerRef.current;
    if (!el || !link) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    const strength = 0.25;
    link.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const link = innerRef.current;
    if (link) link.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative inline-block"
    >
      {/* Halo */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-3 -z-10 rounded-full blur-2xl transition-opacity duration-500",
          variant === "primary"
            ? "bg-gradient-to-r from-violet-neon/45 via-pink-neon/45 to-champagne/25 opacity-60"
            : "bg-white/5 opacity-0",
        )}
      />
      <Link
        ref={innerRef}
        href={href}
        onClick={onClick}
        className={cn(
          variant === "primary" ? "btn-primary" : "btn-ghost",
          "will-change-transform transition-[transform] duration-300 ease-out",
          className,
        )}
      >
        {children}
      </Link>
    </div>
  );
}
