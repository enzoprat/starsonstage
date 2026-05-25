import Image from "next/image";
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
        "group relative inline-flex items-center select-none",
        className,
      )}
      aria-label="Stars On Stage — Accueil"
    >
      {/* Glow halo on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236,72,153,0.35), rgba(139,92,246,0.25) 50%, transparent 70%)",
        }}
      />
      <span className="relative inline-block">
        {/* Pink halo behind logo for premium feel */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-4 -z-10 rounded-full opacity-40 blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(236,72,153,0.4), rgba(139,92,246,0.25) 50%, transparent 75%)",
          }}
        />
        <Image
          src="/assets/logo.png"
          alt="Stars On Stage"
          width={300}
          height={90}
          priority
          sizes="(max-width: 768px) 180px, 240px"
          className="h-14 w-auto transition-[filter] duration-500 sm:h-16 md:h-[72px]"
          style={{
            filter:
              "invert(1) brightness(1.4) contrast(1.6) drop-shadow(0 0 14px rgba(255,255,255,0.18))",
          }}
        />
      </span>
    </Link>
  );
}
