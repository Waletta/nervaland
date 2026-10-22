import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#222222] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end md:justify-end gap-2 text-xs text-gray-400">
        <p>© 2026 Nerva</p>
        <div className="flex items-right gap-2 flex-wrap">
          <span className="hidden md:inline">-</span>
          <Link
            href="/disclaimer"
            className="hover:text-[#c5a059] transition-colors"
          >
              General Terms
          </Link>
          <span className="hidden md:inline">-</span>
          <Link
            href="/privacy"
            className="hover:text-[#c5a059] transition-colors"
          >
            Privacy Policy
          </Link>          
        </div>
      </div>
    </footer>
  );
}