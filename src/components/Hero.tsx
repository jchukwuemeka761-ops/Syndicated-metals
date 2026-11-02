import React from 'react';
import { ArrowRight, ShieldCheck, Ruler, Wrench, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onRequestQuote }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background Architectural Scrim with subtle gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_aluminium_facade_1793218232793.jpg"
          alt="Modern architectural facade with precision dark aluminium window systems and curtain walling"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed regional kicker without pill enclosures */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>Aluminium Architectural Systems</span>
              <span aria-hidden="true">·</span>
              <span>Lagos & Port Harcourt</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display max-w-2xl text-balance">
              Engineered Aluminium Doors, Windows & Glazing for Nigerian Architecture.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Syndicated Metal Industries Limited manufactures and installs precision aluminium building products. We work directly with homeowners, architects, and contractors to deliver accurate site dimensions, reliable workshop fabrication, and neat installation.
            </p>

            {/* Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-slate-400 whitespace-nowrap"
              >
                Explore Product Catalog
              </button>
            </div>

            {/* Editorial notice for transparency */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
              <span>Fabricated to order for coastal and inland West African weather conditions.</span>
            </div>
          </div>

          {/* Focal Visual Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800/60 shadow-2xl backdrop-blur-sm p-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/product_aluminium_bifold_doors_1793218233210.jpg"
                  alt="Precision aluminium sliding patio door assembly with matte charcoal frame"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-medium">Product Highlight</div>
                  <div className="text-sm font-semibold text-white">Slimline Sliding Patio & Terrace Doors</div>
                  <div className="text-[11px] text-slate-300">Heavy-duty multi-track assemblies with weatherproof EPDM gaskets</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust & Capabilities Strip below hero */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 shrink-0 mt-0.5">
                <Ruler className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-100">Exact Site Survey</div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">On-site dimension check to reduce fitment re-work.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 shrink-0 mt-0.5">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-100">Workshop Fabrication</div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">Clean mitres, reinforced joints, and quality seals.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-100">Corrosion Resistant</div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">Powder-coated & anodized finishes for coastal climates.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-100">Lagos & Port Harcourt</div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">Regional project coverage across Nigeria.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
