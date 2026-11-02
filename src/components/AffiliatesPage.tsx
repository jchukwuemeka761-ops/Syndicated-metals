import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Globe, Building, Award, Sparkles, Layers } from 'lucide-react';
import { AFFILIATES_LIST, AffiliatePartner } from '../data/companyConfig.ts';

interface AffiliatesPageProps {
  onSelectPartnerForQuote: (partner: AffiliatePartner) => void;
  onRequestGeneralQuote: () => void;
}

export const AffiliatesPage: React.FC<AffiliatesPageProps> = ({
  onSelectPartnerForQuote,
  onRequestGeneralQuote,
}) => {
  const [selectedPartnerModal, setSelectedPartnerModal] = useState<AffiliatePartner | null>(null);

  return (
    <section
      id="affiliates-page"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 overflow-hidden"
    >
      {/* Subtle luxury ambient lighting & architectural radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with commanding luxury typography */}
        <div className="max-w-4xl mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>International Engineering Partnerships</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08] text-balance">
            World-Class Technical Affiliate Partners
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            Syndicated Metal Industries Limited is the direct licensed fabrication and installation partner for Europe’s most revered architectural manufacturers. We engineer and install certified profiles, fire-rated composite panels, and solar-control glazing across Nigeria to exact European specifications.
          </p>
        </div>

        {/* Global Partnership Value Strip in Luxurious Dark Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 bg-slate-900/80 rounded-2xl border border-slate-800/90 shadow-xl backdrop-blur-md space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Certified European Standards</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every system conforms with rigorous EN, DIN, and ISO standards for fire classification (EN 13501-1), acoustic sound reduction up to 53dB, and CWCT wind load structural safety.
            </p>
          </div>

          <div className="p-7 bg-slate-900/80 rounded-2xl border border-slate-800/90 shadow-xl backdrop-blur-md space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Globe className="w-5 h-5 text-amber-400" />
              <span>Engineered for Coastal & Tropical Climates</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Saint-Gobain Cool-Lite reflective solar glass and Albond multi-coat PVDF panels defend against severe Nigerian sun heat, UV fading, and coastal salt-spray humidity.
            </p>
          </div>

          <div className="p-7 bg-slate-900/80 rounded-2xl border border-slate-800/90 shadow-xl backdrop-blur-md space-y-3 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Building className="w-5 h-5 text-amber-400" />
              <span>Factory Precision & Direct Site Anchoring</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Calibrated CNC mitre cutting, precision bracket machining, and certified structural silicone glazing executed by our trained engineering crews in Lagos, Abuja, and Port Harcourt.
            </p>
          </div>
        </div>

        {/* Affiliates Grid - Ultra-Bold, Super-Large Logos on Luxurious Floating Pedestals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {AFFILIATES_LIST.map((partner) => (
            <div
              key={partner.id}
              className="group bg-slate-900/90 rounded-3xl border-2 border-slate-800 hover:border-amber-400/80 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md transform hover:-translate-y-1"
            >
              {/* Premium Top Amber/Gold Metallic Accent Line */}
              <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

              {/* Luxurious Floating Logo Stage */}
              <div className="p-8 sm:p-10 bg-slate-950/70 border-b border-slate-800/80 flex flex-col items-center justify-center min-h-[250px] relative">
                
                {/* Large, High-Contrast Floating White Display Pedestal for Maximum Logo Recognition */}
                <div className="w-full max-w-[300px] h-32 sm:h-36 flex items-center justify-center p-4 bg-white rounded-2xl shadow-xl border-2 border-slate-200 group-hover:border-amber-400 group-hover:shadow-2xl group-hover:scale-103 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} official partner logo`}
                    className="max-h-24 sm:max-h-28 md:max-h-30 w-auto max-w-[240px] sm:max-w-[270px] object-contain filter group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Country Badge */}
                <div className="absolute top-4 right-4 text-xs bg-slate-900/95 text-amber-300 px-3.5 py-1.5 rounded-full border border-slate-700 font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="text-base">{partner.countryFlag}</span>
                  <span className="tracking-wide">{partner.country}</span>
                </div>
              </div>

              {/* Content Zone with High-Impact Typography & Dark Elegance */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-widest text-amber-400">
                    {partner.specialization}
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-amber-300 transition-colors tracking-tight">
                    {partner.name}
                  </h2>
                  
                  <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                    {partner.legalEntity}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {partner.description}
                  </p>
                </div>

                {/* Key systems supplied */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Architectural Systems Supplied:</span>
                  </div>
                  <div className="space-y-1.5">
                    {partner.systemsSupplied.map((sys, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standards Pill */}
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-[11px] text-slate-300">
                  <strong className="text-amber-300 font-semibold">Standard:</strong> {partner.standards}
                </div>

                {/* Interactive Clickable Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectPartnerForQuote(partner)}
                    className="flex-1 py-3.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
                  >
                    <span>Inquire for {partner.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSelectedPartnerModal(partner)}
                    className="py-3.5 px-4 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
                    title="View Partnership Details"
                  >
                    Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Technical Submittals Callout Box */}
        <div className="mt-20 p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl shadow-2xl border border-amber-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Architectural & Engineering Submittal Desk
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              Need technical CAD profiles, acoustic decibel ratings, or fire certificates?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We provide architects, facade consultants, and general contractors with certified European factory submittal packets, solar thermal g-values, and load calculation sheets for tender documentation.
            </p>
          </div>
          <button
            onClick={onRequestGeneralQuote}
            className="px-8 py-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Technical Submittal Package
          </button>
        </div>

      </div>

      {/* Partner Detailed Modal */}
      {selectedPartnerModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-slate-900 text-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-700">
            <div className="p-6 sm:p-8 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-md">
                  <img
                    src={selectedPartnerModal.logo}
                    alt={selectedPartnerModal.name}
                    className="h-12 max-w-[170px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedPartnerModal.name}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400">
                    {selectedPartnerModal.legalEntity} · {selectedPartnerModal.country}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedPartnerModal(null)}
                className="p-2.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer text-sm font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5 text-xs sm:text-sm text-slate-300">
              <div>
                <strong className="text-white font-bold block mb-1.5 uppercase text-xs tracking-wider">
                  Partnership & Brand Overview:
                </strong>
                <p className="leading-relaxed text-slate-300">{selectedPartnerModal.description}</p>
              </div>

              <div className="p-5 bg-slate-950/80 rounded-2xl space-y-3 border border-slate-800">
                <strong className="text-white font-bold block uppercase text-xs tracking-wider">
                  Full Systems Range Supplied & Installed:
                </strong>
                <ul className="space-y-2 text-slate-300 text-xs">
                  {selectedPartnerModal.systemsSupplied.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">·</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <span className="font-bold text-amber-300 block text-xs uppercase tracking-wider">Technical Standards:</span>
                  <span className="text-slate-200 mt-1 block font-medium">{selectedPartnerModal.standards}</span>
                </div>
                {selectedPartnerModal.website && (
                  <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block text-xs uppercase tracking-wider">Manufacturer Portal:</span>
                      <span className="text-slate-400 truncate block text-xs mt-0.5">{selectedPartnerModal.website}</span>
                    </div>
                    <a
                      href={selectedPartnerModal.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-amber-400 hover:text-amber-300 rounded-lg hover:bg-amber-400/10"
                      title="Open partner official site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <button
                  onClick={() => setSelectedPartnerModal(null)}
                  className="px-5 py-2.5 font-semibold text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const p = selectedPartnerModal;
                    setSelectedPartnerModal(null);
                    onSelectPartnerForQuote(p);
                  }}
                  className="px-6 py-3 font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Request Quote for {selectedPartnerModal.name} Systems</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
