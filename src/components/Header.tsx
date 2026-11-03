import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig.ts';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onRequestQuote: () => void;
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onRequestQuote,
  onOpenAudit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'affiliates', label: 'Affiliates' },
    { id: 'locations', label: 'Locations & Maps' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top editorial notice bar for client transparency */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-3 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] sm:text-xs">
            <span className="font-medium text-slate-200">Syndicated Metal Industries Limited</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Lagos & Port Harcourt</span>
          </div>
          <button
            onClick={onOpenAudit}
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center gap-1 transition-colors text-[11px] sm:text-xs font-medium cursor-pointer"
            title="Review placeholders requiring company confirmation before launch"
          >
            <span>Client Checklist & Deployment Guide</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display face with official mark) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600 rounded-sm shrink-0 flex items-center gap-3"
          >
            <img
              src="/assets/real/smi-logo.png"
              alt="Syndicated Metal Industries logo"
              className="h-9 w-auto object-contain hidden sm:block"
              onError={(e) => {
                // If logo fails to load, gracefully hide
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-display group-hover:text-amber-700 transition-colors whitespace-nowrap">
                Syndicated Metal
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-slate-500 -mt-0.5">
                Industries Limited
              </div>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean single-line text links with subtle hover underlines) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-slate-700" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600 rounded-sm ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Request a Quote) & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Request a Quote
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-2">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-950 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 px-4 text-center font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
              >
                Request a Consultation & Quote
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-2 px-3 text-center text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded"
              >
                Placeholder & Launch Verification Checklist
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
