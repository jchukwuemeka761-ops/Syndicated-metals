import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/companyConfig.ts';

interface ServicesSectionProps {
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestQuote }) => {
  return (
    <section id="services-section" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              End-to-End Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
              From Opening Measurement to Final Glazing & Handover
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              Aluminium systems only perform well when site openings are measured accurately, joints are crimped square, and sealants are applied correctly. We support your project at every milestone.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book Site Measurement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Highlight Image Banner */}
        <div className="mb-16 relative rounded-2xl overflow-hidden border border-slate-200 aspect-[21/9] max-h-96 bg-slate-900">
          <img
            src="/src/assets/images/service_fabrication_workshop_1793218235186.jpg"
            alt="Aluminium fabrication workshop with precision mitre saws and extrusion assembly benches"
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
              Precision Workshop Fabrication
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display">
              Calibrated cutting, corner crimping, and pre-glazed frame verification.
            </h3>
            <p className="text-xs text-slate-300 mt-1 hidden sm:block">
              Every aluminium window and door frame is manufactured to verified opening dimensions before dispatch to your construction site.
            </p>
          </div>
        </div>

        {/* 5-Step Process & Services Breakdown */}
        <div className="space-y-6">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2 text-xs text-slate-600">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" />
            <span>All service workflow stages below represent standard operational methodology; confirmation per specific project contract.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl p-6 border border-slate-200 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  {/* Clean editorial numbering */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-display text-slate-400">
                      {service.stepNumber}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      Service Milestone
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-2 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Deliverables:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Next Step */}
                <div className="pt-4 border-t border-slate-200/80 bg-white/80 p-3 rounded-xl space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                    What You Provide / Next Step:
                  </div>
                  <p className="text-xs text-slate-700 leading-normal">
                    {service.customerNextStep}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Direct Next Action */}
        <div className="mt-12 text-center bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold font-display max-w-xl mx-auto text-balance">
            Ready to schedule a technical consultation or site measurement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
            Speak directly with our technical representatives in Lagos or Port Harcourt to discuss architectural profiles, glass specifications, and timelines.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              Request Technical Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
