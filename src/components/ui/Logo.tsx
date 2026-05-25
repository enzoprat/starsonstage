import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "#accueil",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 select-none",
        className,
      )}
      aria-label="Stars On Stage — Accueil"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-neon via-pink-neon to-champagne shadow-glow-pink">
        <span className="absolute inset-[2px] rounded-full bg-ink-950" />
        <svg
          viewBox="0 0 24 24"
          className="relative h-4 w-4"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 2.5l2.4 6.1 6.5.5-4.95 4.2 1.55 6.3L12 16.4 6.5 19.6l1.55-6.3L3.1 9.1l6.5-.5L12 2.5z"
            fill="url(#sg)"
          />
          <defs>
            <linearGradient id="sg" x1="0" x2="24" y1="0" y2="24">
              <stop stopColor="#F5F2EA" />
              <stop offset="0.5" stopColor="#EC4899" />
              <stop offset="1" stopColor="#D6B56D" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] tracking-[0.18em] text-bone">
          STARS ON STAGE
        </span>
        <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.4em] text-chrome/60">
          Booking premium
        </span>
      </span>
    </Link>
  );
}
