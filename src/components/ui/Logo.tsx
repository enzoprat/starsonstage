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
      {/* Subtle neon halo on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236,72,153,0.35), rgba(139,92,246,0.25) 50%, transparent 75%)",
        }}
      />
      <Image
        src="/assets/logo-white.svg"
        alt="Stars On Stage"
        width={320}
        height={180}
        priority
        sizes="(max-width: 768px) 160px, 220px"
        className="h-14 w-auto transition-transform duration-500 group-hover:scale-[1.03] sm:h-16 md:h-[72px]"
      />
    </Link>
  );
}
