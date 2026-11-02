import React, { useState } from 'react';
import { X, Check, ArrowRight, AlertCircle, Layers, Sliders, Maximize2 } from 'lucide-react';
import { ProductItem } from '../data/companyConfig.ts';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSelectForQuote: (product: ProductItem, selectedFinish: string, selectedGlass: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  if (!product) return null;

  const [selectedFinish, setSelectedFinish] = useState<string>(
    product.specs.standardFinishes[0] || 'Matte Charcoal Black'
  );
  const [selectedGlass, setSelectedGlass] = useState<string>(
    product.specs.glassOptions[0] || '6mm Single Toughened Glass'
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-amber-700">
              <span>{product.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Specification Sheet</span>
            </div>
            <h2 id="modal-product-title" className="text-lg font-bold text-slate-900 font-display">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Close product specifications"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Editable placeholder disclaimer banner */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Editable Specification Notice:</span> The dimensions, glass types, and hardware lists below are standard architectural configurations. Final profile gauges, certified wind ratings, and hardware brands will be confirmed per project drawings.
            </div>
          </div>

          {/* Product Overview & Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="text-sm text-slate-700 leading-relaxed">
                {product.description}
              </div>
              <div className="pt-2 text-xs text-slate-600 space-y-1">
                <div><span className="font-semibold text-slate-900">Typical Opening Dimensions:</span> {product.specs.typicalDimensions}</div>
                <div><span className="font-semibold text-slate-900">Framing Structure:</span> {product.specs.framingSystem}</div>
                <div><span className="font-semibold text-slate-900">Estimated Lead Time:</span> {product.specs.leadTimeGuide}</div>
              </div>
            </div>
          </div>

          {/* Interactive Finish Configuration */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-500" />
                <span>Available Profile Finishes</span>
              </label>
              <span className="text-xs text-slate-500">Selected: <strong className="text-slate-800">{selectedFinish}</strong></span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {product.specs.standardFinishes.map((finish) => {
                const isSelected = selectedFinish === finish;
                return (
                  <button
                    key={finish}
                    type="button"
                    onClick={() => setSelectedFinish(finish)}
                    className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/50 text-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="truncate">{finish}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Glass Options */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-500" />
                <span>Glazing & Glass Options</span>
              </label>
              <span className="text-xs text-slate-500">Selected: <strong className="text-slate-800">{selectedGlass}</strong></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.specs.glassOptions.map((glass) => {
                const isSelected = selectedGlass === glass;
                return (
                  <button
                    key={glass}
                    type="button"
                    onClick={() => setSelectedGlass(glass)}
                    className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/50 text-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span>{glass}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hardware & Recommended Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-2">
              <div className="font-bold text-slate-900">Standard Hardware Inclusions:</div>
              <ul className="space-y-1 text-slate-600">
                {product.specs.hardwareOptions.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">·</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-2">
              <div className="font-bold text-slate-900">Typical Applications:</div>
              <ul className="space-y-1 text-slate-600">
                {product.specs.recommendedUseCases.map((u, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">·</span>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Configuration: <span className="font-semibold text-slate-800">{selectedFinish}</span> with <span className="font-semibold text-slate-800">{selectedGlass}</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onSelectForQuote(product, selectedFinish, selectedGlass)}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Request Quote for this Product</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
