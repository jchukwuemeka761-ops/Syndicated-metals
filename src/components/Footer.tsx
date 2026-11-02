import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, FileCheck2, Globe } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig.ts';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/real/smi-logo-white.png"
                alt="Syndicated Metal Industries logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display block">
                  Syndicated Metal
                </span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400 block -mt-0.5">
                  Industries Limited
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Nigerian manufacturer and installer of European-standard architectural aluminium doors, windows, curtain walls, and composite cladding. Delivering precision facades across Lagos, Abuja, Port Harcourt, and nationwide.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-amber-400 text-xs font-medium transition-colors cursor-pointer"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Technical Specifications & Sources</span>
              </button>
            </div>
          </div>

          {/* Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Products Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Projects Handled
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('affiliates')}
                  className="hover:text-amber-400 font-semibold transition-colors cursor-pointer flex items-center gap-1 text-slate-200"
                >
                  <span>Affiliates</span>
                  <span className="text-[10px] bg-amber-600/30 text-amber-400 px-1.5 rounded">New</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Hubs (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Operations Hubs
            </div>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <div className="font-semibold text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Lagos Facility (Headquarters)</span>
                </div>
                <div className="text-slate-400 mt-0.5 pl-4.5 text-[11px] leading-snug">
                  Railway yard, Old Apapa Road, Beside Fire Service, Ebute-Metta, Lagos.
                </div>
              </div>

              <div>
                <div className="font-semibold text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Abuja FCT Office</span>
                </div>
                <div className="text-slate-400 mt-0.5 pl-4.5 text-[11px] leading-snug">
                  No. 21 Harper Crescent, Wuse Zone 7, Abuja FCT.
                </div>
              </div>

              <div>
                <div className="font-semibold text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Port Harcourt Unit</span>
                </div>
                <div className="text-slate-400 mt-0.5 pl-4.5 text-[11px] leading-snug">
                  23 Mini Ezekwu Street, Hillview Estate, Port Harcourt.
                </div>
              </div>
            </div>
          </div>

          {/* Inquiries & Direct Line (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold text-slate-200">{COMPANY_CONFIG.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>{COMPANY_CONFIG.generalEmail}</span>
              </div>
              <div className="pt-1 text-[11px] text-slate-400">
                Monday – Saturday: 9:00 AM – 5:00 PM
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 px-3 text-center text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Request a Quotation
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Syndicated Metal Industries Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('affiliates')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Affiliate Partners
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Completed Projects
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
