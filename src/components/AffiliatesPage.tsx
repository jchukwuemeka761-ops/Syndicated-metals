import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Globe, Layers, Building, Eye } from 'lucide-react';
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
    <section id="affiliates-page" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Global Technical Partnerships
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Our International Affiliate Partners
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Syndicated Metal Industries Limited partners with globally certified European and international manufacturers to bring certified engineering, fire-rated materials, and precision architectural systems to Nigerian building developments.
          </p>
        </div>

        {/* Global Partnership Value Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Certified EU Standards</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Materials manufactured under rigorous European EN, DIN, and ISO standards for fire safety, wind loading, and acoustic insulation.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              <Globe className="w-4 h-4 text-amber-600" />
              <span>Tropical Climate Adaptation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-performance solar control glass (Saint-Gobain) and salt-spray resistant powder coatings (Albond & Schüco) tailored for coastal Nigeria.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              <Building className="w-4 h-4 text-amber-600" />
              <span>Turnkey Nigerian Installation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Factory fabrication and certified site anchoring executed by Syndicated Metal crews stationed in Lagos, Abuja, and Port Harcourt.
            </p>
          </div>
        </div>

        {/* Affiliates Grid - Clickable Cards Matching Original Website Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AFFILIATES_LIST.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Logo Zone */}
              <div className="p-8 pb-6 bg-slate-50/70 border-b border-slate-100 flex flex-col items-center justify-center min-h-[170px] relative">
                <div className="w-full max-w-[200px] h-20 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-16 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-3 right-3 text-xs bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-medium flex items-center gap-1 shadow-2xs">
                  <span>{partner.countryFlag}</span>
                  <span className="font-semibold">{partner.country}</span>
                </div>
              </div>

              {/* Content Zone */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    {partner.specialization}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-amber-800 transition-colors">
                    {partner.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-500">
                    {partner.legalEntity}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {partner.description}
                  </p>
                </div>

                {/* Key systems supplied */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Architectural Systems:
                  </div>
                  {partner.systemsSupplied.slice(0, 3).map((sys, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sys}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Clickable Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectPartnerForQuote(partner)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600"
                  >
                    <span>Inquire for {partner.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedPartnerModal(partner)}
                    className="py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600"
                    title="View Partnership Details"
                  >
                    Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Original Website Verification Box */}
        <div className="mt-16 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Verified Technical Catalog
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Need technical submittals, test certificates, or architectural CAD drawings for these systems?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We provide architects and structural engineers with full EN/DIN test certificates, acoustic decibel ratings (DEKO / OWA), solar performance g-values (Saint-Gobain), and fire classifications (Albond / Schüco).
            </p>
          </div>
          <button
            onClick={onRequestGeneralQuote}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Technical Submittal Package
          </button>
        </div>

      </div>

      {/* Partner Detailed Modal */}
      {selectedPartnerModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200">
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={selectedPartnerModal.logo}
                  alt={selectedPartnerModal.name}
                  className="h-10 max-w-[140px] object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {selectedPartnerModal.name}
                  </h3>
                  <div className="text-xs text-slate-500">
                    {selectedPartnerModal.legalEntity} · {selectedPartnerModal.country}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedPartnerModal(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              <div>
                <strong className="text-slate-900 font-semibold block mb-1">Partnership Overview:</strong>
                <p className="leading-relaxed text-slate-600">{selectedPartnerModal.description}</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl space-y-2 border border-slate-200">
                <strong className="text-slate-900 font-semibold block">Full Systems Range Supplied & Installed:</strong>
                <ul className="space-y-1.5 text-slate-600">
                  {selectedPartnerModal.systemsSupplied.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">·</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg">
                  <span className="font-semibold text-amber-950 block">Technical Standards:</span>
                  <span className="text-slate-700 mt-0.5 block">{selectedPartnerModal.standards}</span>
                </div>
                {selectedPartnerModal.website && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-900 block">Manufacturer Website:</span>
                      <span className="text-slate-500 truncate block text-[11px]">{selectedPartnerModal.website}</span>
                    </div>
                    <a
                      href={selectedPartnerModal.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-amber-600 hover:text-amber-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                <button
                  onClick={() => setSelectedPartnerModal(null)}
                  className="px-4 py-2 font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const p = selectedPartnerModal;
                    setSelectedPartnerModal(null);
                    onSelectPartnerForQuote(p);
                  }}
                  className="px-5 py-2.5 font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request Quote for {selectedPartnerModal.name} Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
