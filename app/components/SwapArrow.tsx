"use client";

type SwapArrowProps = {
  className?: string;
  size?: number; // px, defaults to 16 (h-4 w-4)
};

/**
 * Shows a chevron ">" by default and swaps to a full arrow "→" on hover.
 * Requires the parent to have the `group` class.
 */
export default function SwapArrow({ className = "", size = 16 }: SwapArrowProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Chevron ">" — visible by default, slides out on hover */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute transition-transform duration-300 ease-out group-hover:translate-x-5"
        style={{ width: size, height: size }}
      >
        <path d="M9 6l6 6-6 6" />
      </svg>

      {/* Full arrow "→" — hidden by default, slides in on hover */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0"
        style={{ width: size, height: size }}
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </span>
  );
}