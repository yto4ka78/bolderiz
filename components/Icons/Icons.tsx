import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
}

export function ClockIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function MapPinIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function PhoneIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6 1.07 1.07 0 0 0 1-.94 2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
    </svg>
  );
}

export function ChatIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function LeafIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M2 22c1.25-1.25 2.5-2.5 4-3 3.5-1.25 7.5-.5 10-3 3-3 3-7 2-10-3-1-7-1-10 2-2.5 2.5-1.75 6.5-3 10-.5 1.5-1.75 2.75-3 4z" />
      <path d="M2 22l10-10" />
    </svg>
  );
}

export function BookIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function FlameIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

export function UsersIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function ChefIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  );
}

export function BowlIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 20a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8z" />
      <path d="M2 12h20" />
      <path d="M10 4c0 1.5.5 2.5 1 3.5" />
      <path d="M14 4c0 1.5-.5 2.5-1 3.5" />
    </svg>
  );
}

export function SparkleIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 2l2.4 7.4L22 12l-7.6 2.6L12 22l-2.4-7.4L2 12l7.6-2.6z" />
    </svg>
  );
}

export function NoodleIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 20a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8z" />
      <path d="M2 12h20" />
      <line x1="9" y1="4" x2="9" y2="10" />
      <line x1="12" y1="2" x2="12" y2="10" />
      <line x1="15" y1="4" x2="15" y2="10" />
    </svg>
  );
}

export function DiamondIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <polygon points="12 2 22 12 12 22 2 12" />
    </svg>
  );
}

export function StarIcon({ size = 14, filled = false, ...p }: P & { filled?: boolean }) {
  const extra = filled
    ? { fill: "currentColor" as const, stroke: "none" as const }
    : {};
  return (
    <svg {...base(size)} {...extra} {...p}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function GlassIcon({ size = 20, ...p }: P) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M8 2h8l-2 10H10z" />
      <path d="M10 12v6" />
      <path d="M14 12v6" />
      <path d="M7 18h10" />
    </svg>
  );
}
