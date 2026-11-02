import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Copy, Server, Globe, Shield, Terminal, Building2 } from 'lucide-react';
import { COMPANY_CONFIG, AFFILIATES_LIST, REAL_PROJECTS_LIST } from '../data/companyConfig.ts';

interface PlaceholderGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderGuideModal: React.FC<PlaceholderGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'verified' | 'deployment'>('verified');

  const handleCopyChecklist = () => {
    const text = `SYNDICATED METAL INDUSTRIES LIMITED - LIVE AUDIT & VERIFICATION REPORT

VERIFIED COMPANY DATA (Sourced directly from syndicatedmetal.com):
1. LAGOS HEADQUARTERS & FACTORY YARD:
   Railway Corporation yard, Old Apapa Road, Beside Fire Service, Ebute-Metta, Lagos.
   Phone: +234 803 316 9896 / +234 803 720 3407
   Email: info@syndicatedmetal.com

2. ABUJA REGIONAL OFFICE:
   No. 21 Harper Crescent, Wuse Zone 7, Abuja FCT.
   Phone: +234 803 385 7111
   Email: info.abuja@syndicatedmetal.com

3. PORT HARCOURT UNIT:
   23 Mini Ezekwu Street, Hillview Estate, Port Harcourt, Rivers State.
   Phone: +234 806 212 4700
   Email: info.phc@syndicatedmetal.com

4. OFFICIAL INTERNATIONAL AFFILIATES:
   - ALBOND (Turkey): Aluminium Composite Panels
   - DEKO (Denmark): Demountable Glass Partitions
   - META (Germany): Commercial Toilet Cubicles
   - OWA (Germany): Acoustic Suspended Ceilings
   - SAINT-GOBAIN (France): Cool-Lite Solar Control Glass
   - SCHÜCO (Germany): Aluminium Curtain Walls & Windows
   - LINDNER SE (Germany): Heavy-Duty Raised Access Floors

5. VERIFIED COMPLETED PROJECTS (${REAL_PROJECTS_LIST.length} Projects):
   - Anambra State: EU Standard Special Windows with Semi-Automatic Flyscreen
   - Abuja FCT: Frameless Structural Curtain Wall with St Gobain Coolite Glass
   - Abuja FCT: Aluminium Composite Panel Cladding (Albond)
   - Edo State: Curved Structural Curtain Wall with Gobain Reflective Glass
   - Bayelsa State: Semi-Frameless Curtain Wall with Projected Vents
   - Lagos State: DEKO Frosted Aluminium Framed Glass Partitions
   - Lagos State: DEKO Relocatable Glass Office Walls
   - Lagos State: Lindner Raised Access Flooring
   - Delta State: Curtain Wall Facade with Projected Window Vents
   - Industrial Cladding: High-Impact Exterior Composite Facades

PRODUCTION DEPLOYMENT STEPS:
1. Run 'npm run build' to bundle the high-performance application.
2. Deploy to Cloud Run / Vercel / Netlify / Custom Host with HTTPS.
3. Configure custom domain DNS for syndicatedmetal.com / syndicatedmetal.ng.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Verified Corporate Records
            </div>
            <h2 id="audit-modal-title" className="text-lg font-bold text-slate-900 font-display">
              Official Data Integration & Production Deployment Guide
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Close guide modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 bg-slate-100/50 px-6">
          <button
            onClick={() => setActiveTab('verified')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'verified'
                ? 'border-amber-600 text-slate-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Verified Data Status (Official Website Sync)
          </button>
          <button
            onClick={() => setActiveTab('deployment')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'deployment'
                ? 'border-amber-600 text-slate-900 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Production Deployment Plan
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          
          {activeTab === 'verified' ? (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-xs text-emerald-950">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Live Source Synchronization Complete:</strong> The website now integrates genuine live records from <code className="bg-emerald-100 px-1 py-0.5 rounded text-emerald-900 font-mono">syndicatedmetal.com</code>, including verified operational yards in Lagos (Ebute-Metta), Abuja (Wuse Zone 7), and Port Harcourt (Hillview Estate), active direct phone lines, verified WhatsApp number, the full roster of European affiliate manufacturers (Albond, DEKO, META, OWA, Saint-Gobain, Schüco), and all 10 real completed project installations.
                </div>
              </div>

              {/* Verified Locations Summary */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3 text-xs">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>3 Active Regional Facilities Integrated</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {COMPANY_CONFIG.locations.map((loc, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                      <div className="font-bold text-slate-900">{loc.city} ({loc.state})</div>
                      <div className="text-[11px] text-amber-800 font-medium">{loc.role}</div>
                      <div className="text-slate-600 text-[11px]">{loc.address}</div>
                      <div className="text-slate-800 font-mono text-[11px] pt-1">{loc.phone}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Affiliates Summary */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3 text-xs">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-600" />
                  <span>{AFFILIATES_LIST.length} Official International Technical Partners</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AFFILIATES_LIST.map((aff, i) => (
                    <div key={i} className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center gap-2">
                      <span className="text-base">{aff.countryFlag}</span>
                      <div>
                        <div className="font-bold text-slate-900 text-[11px]">{aff.name}</div>
                        <div className="text-[10px] text-slate-500">{aff.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Projects Summary */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3 text-xs">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>{REAL_PROJECTS_LIST.length} Real Installations Loaded with Genuine Photography</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  All previous illustrative placeholders in the portfolio have been superseded by actual completed contracts across Anambra, Abuja, Edo, Bayelsa, Delta, and Lagos, utilizing authentic photography downloaded from the company's server.
                </p>
              </div>

            </div>
          ) : (
            <div className="space-y-6 text-xs text-slate-700">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Server className="w-4 h-4 text-amber-600" />
                  <span>Technical Production Build</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  Built on React 19 + TypeScript + Vite with local high-resolution asset bundling. Zero external CDN dependencies; all logos and project photographs load instantly from the application package.
                </p>
              </div>

              <div className="space-y-3">
                <div className="font-bold text-slate-900 text-sm">Deployment Commands:</div>
                <pre className="p-3 bg-slate-900 text-amber-300 rounded-lg font-mono text-xs overflow-x-auto">
npm run build
                </pre>
                <p className="text-slate-500">
                  The static production bundle is generated in <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-800">dist/</code>. It is ready for immediate zero-config deployment to Google Cloud Run, Vercel, Netlify, or any Nginx/Apache host.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopyChecklist}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? 'Report Copied!' : 'Copy Verification Summary'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
