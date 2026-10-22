"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export type NavigationTab = 'GET A DEMO' | 'LOGIN' | 'SIGNUP';

interface TopbarProps {
  activeTab?: NavigationTab;
  onTabChange?: (tab: NavigationTab) => void;
  onReserveClick?: () => void;
}

const TAB_ROUTES: Record<NavigationTab, string> = {
  'GET A DEMO': '/demo',
  'LOGIN': '/login',
  'SIGNUP': '/',
};

// Route → onglet (pour dériver l'onglet actif depuis l'URL)
const ROUTE_TO_TAB: { path: string; tab: NavigationTab }[] = [
  { path: '/cars', tab: 'GET A DEMO' },
  { path: '/login', tab: 'LOGIN' },
  { path: '/signup', tab: 'SIGNUP' },
];

export const Topbar: React.FC<TopbarProps> = ({
  activeTab,
  onTabChange,
  onReserveClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks: NavigationTab[] = [
    'GET A DEMO',
    'LOGIN',
    'SIGNUP',
  ];

  const derivedTab: NavigationTab | undefined = ROUTE_TO_TAB.find(
    ({ path }) => pathname === path || pathname.startsWith(`${path}/`)
  )?.tab;

  const currentTab = derivedTab ?? activeTab;

  const handleNavClick = (tab: NavigationTab) => {
    onTabChange?.(tab);
    setMobileMenuOpen(false);
    router.push(TAB_ROUTES[tab]);
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <header className="w-full bg-linear-to-b from-black/90 via-[#121212]/90 to-[#1a1a1a]/90 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('GET A DEMO')}
        >

          <span
            onClick={(e) => {
              e.stopPropagation();  const currentTab = derivedTab ?? activeTab;

              handleHomeClick();
            }}
            className="tracking-[1.05em] text-base font-bold text-white uppercase hidden sm:inline-block"
          >
            NERVA
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentTab === link;
            return (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`text-xsPRESTIGE CARS tracking-[0.2em] font-medium transition-all duration-200 py-1 relative border-b-2 ${isActive
                  ? 'text-[#c5a059] border-[#c5a059]'
                  : 'text-gray-400 border-transparent hover:text-white'
                  }`}
              >
                {link}
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-t border-[#222222] px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = currentTab === link;
            return (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`text-left text-xs tracking-[0.2em] py-2.5 px-3 rounded transition-all ${isActive
                  ? 'text-[#c5a059] bg-[#222222] font-semibold border-l-2 border-[#c5a059]'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                  }`}
              >
                {link}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Topbar;