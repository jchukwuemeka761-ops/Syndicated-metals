import React from 'react';
import { ShieldCheck, MapPin, Check, Building2, Award, Phone, Mail } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig.ts';

interface AboutSectionProps {
  onRequestQuote: () => void;
  onOpenAudit: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestQuote, onOpenAudit }) => {
  return (
    <section id="about-section" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Company Background & Technical Heritage
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Syndicated Metal Industries Limited
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            An established Nigerian manufacturer and contractor of European-standard architectural aluminium systems, curtain walls, and interior infrastructure.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-sm text-slate-700 leading-relaxed">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Our Manufacturing & Engineering Discipline</span>
              </div>
              <p>
                In the Nigerian building environment, exterior building envelopes face demanding conditions: extreme tropical solar radiation, strong seasonal storm gusts, and severe salt-air corrosion in coastal Lagos and the Niger Delta.
              </p>
              <p>
                Syndicated Metal Industries Limited bridges international engineering benchmarks with local Nigerian fabrication capability. By partnering directly with premier global manufacturers—including <strong>Schüco (Germany)</strong>, <strong>Saint-Gobain Glass (France)</strong>, <strong>ALBOND (Turkey)</strong>, <strong>DEKO Partitions (Denmark)</strong>, and <strong>META (Germany)</strong>—we ensure that every curtain wall, window assembly, and demountable glass partition installed delivers certified structural safety, solar heat mitigation, and acoustic performance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                End-to-End Local Execution
              </h3>
              <p>
                From our factory yard in Ebute-Metta, Lagos, and regional coordination hubs in Abuja FCT and Port Harcourt, we manage complete turnkey architectural contracts:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <li className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>On-Site Surveys:</strong> 3D opening dimensioning & reveal verification</span>
                </li>
                <li className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Factory Fabrication:</strong> Calibrated mitre saws, crimping & CNC routing</span>
                </li>
                <li className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Structural Glazing:</strong> Certified Saint-Gobain Cool-Lite glass setting</span>
                </li>
                <li className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Turnkey Handover:</strong> Acoustic testing, weather seals & maintenance handover</span>
                </li>
              </ul>
            </div>

            {/* Corporate Clients Track Record */}
            <div className="p-5 bg-slate-900 text-white rounded-2xl space-y-3">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Proven Client Relationships
              </div>
              <h4 className="text-base font-bold font-display">
                Selected Commercial & Institutional Projects
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Syndicated Metal Industries has completed contracts for leading organizations including the <strong>Central Bank of Nigeria (CBN)</strong>, <strong>Citibank</strong>, <strong>Chevron</strong>, <strong>Julius Berger Nigeria PLC</strong>, <strong>Nigeria LNG (NLNG)</strong>, and government administrative facilities across the country.
              </p>
            </div>

          </div>

          {/* Right Column: Verified Operating Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  Verified Operating Footprint
                </div>
                <h3 className="text-xl font-bold font-display">
                  Lagos, Abuja & Port Harcourt Hubs
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {COMPANY_CONFIG.locations.map((loc, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-400" />
                        {loc.city} ({loc.state})
                      </span>
                      <span className="text-[10px] text-emerald-300 font-semibold bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60">
                        Active Facility
                      </span>
                    </div>
                    <div className="text-amber-300 font-medium text-[11px]">{loc.role}</div>
                    <div className="text-slate-300">{loc.address}</div>
                    {loc.additionalAddress && (
                      <div className="text-slate-400 text-[11px] pt-1">
                        <strong>Office:</strong> {loc.additionalAddress}
                      </div>
                    )}
                    <div className="pt-2 text-slate-300 border-t border-slate-700/60 space-y-1 text-[11px]">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span>{loc.phone} {loc.additionalPhone && `· ${loc.additionalPhone}`}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-amber-400" />
                        <span>{loc.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="w-full py-3 px-4 text-center font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-xs uppercase tracking-wider cursor-pointer"
                >
                  Contact Technical Sales Team
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
