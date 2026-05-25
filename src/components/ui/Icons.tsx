import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "h-6 w-6";

export function IconClub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M5 19V8l7-4 7 4v11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 19v-5h6v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconBar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M4 4h16l-7 9v6h3M12 13v6H9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 4l4 5 4-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBeach(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <circle cx="17" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M14.6 6c-1.6-1.4-4.5-1.8-6.2-.6C6.5 6.7 6 9 7.2 10.6L13 5.6c.4-.2 1.2-.3 1.6.4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M13 7l-1 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M3 20c2-1 3-1 5 0s3 1 5 0 3-1 5 0 2 .5 3 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconGraduate(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M3 9l9-4 9 4-9 4-9-4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M21 9v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPrivate(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M12 3l2.4 5 5.6.8-4 4 1 5.6L12 16l-5 2.4 1-5.6-4-4L9.6 8 12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconFestival(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} {...props}>
      <path
        d="M3 19V11l9-6 9 6v8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M3 19h18M9 19v-5l3-2 3 2v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}

export const audienceIcons = {
  club: IconClub,
  bar: IconBar,
  beach: IconBeach,
  graduate: IconGraduate,
  private: IconPrivate,
  festival: IconFestival,
} as const;
