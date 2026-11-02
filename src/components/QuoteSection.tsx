import React, { useState, useEffect } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Calculator,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink
} from 'lucide-react';
import { COMPANY_CONFIG, ProductItem } from '../data/companyConfig.ts';
import {
  validateQuoteForm,
  validateNigerianPhone,
  validateEmail,
  calculateIndicativeScope,
  QuoteFormData,
  FormValidationErrors,
  ScopeCalculationResult
} from '../utils/validation.ts';

interface QuoteSectionProps {
  preselectedProduct?: ProductItem | null;
  preselectedFinish?: string;
  preselectedGlass?: string;
  onClearPreselection?: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  preselectedProduct,
  preselectedFinish,
  preselectedGlass,
  onClearPreselection,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Private Residential Villa',
    projectLocation: 'Lagos',
    customLocation: '',
    productInterests: ['aluminium-sliding-doors'],
    dimensionsOrQuantity: '',
    preferredContact: 'phone',
    projectNotes: '',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Estimator state
  const [showEstimator, setShowEstimator] = useState(false);
  const [estimatorOpenings, setEstimatorOpenings] = useState(8);
  const [estimatorWidth, setEstimatorWidth] = useState(1200);
  const [estimatorHeight, setEstimatorHeight] = useState(1500);
  const [estimatorFinish, setEstimatorFinish] = useState('Matte Charcoal Black');
  const [estimatorGlass, setEstimatorGlass] = useState('6mm Single Toughened Glass');
  const [scopeResult, setScopeResult] = useState<ScopeCalculationResult | null>(null);

  // Sync preselected product if passed
  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productInterests: Array.from(new Set([...prev.productInterests, preselectedProduct.id])),
        projectNotes: `${prev.projectNotes ? prev.projectNotes + '\n' : ''}Inquiring for: ${preselectedProduct.name}${
          preselectedFinish ? ` [Finish: ${preselectedFinish}]` : ''
        }${preselectedGlass ? ` [Glass: ${preselectedGlass}]` : ''}`.trim(),
      }));
    }
  }, [preselectedProduct, preselectedFinish, preselectedGlass]);

  // Recalculate scope when estimator values change
  useEffect(() => {
    const res = calculateIndicativeScope({
      estimatedOpeningCount: estimatorOpenings,
      averageWidthMm: estimatorWidth,
      averageHeightMm: estimatorHeight,
      selectedFinish: estimatorFinish,
      selectedGlass: estimatorGlass,
    });
    setScopeResult(res);
  }, [estimatorOpenings, estimatorWidth, estimatorHeight, estimatorFinish, estimatorGlass]);

  const handleProductToggle = (productId: string) => {
    setFormData((prev) => {
      const exists = prev.productInterests.includes(productId);
      const updated = exists
        ? prev.productInterests.filter((id) => id !== productId)
        : [...prev.productInterests, productId];
      return { ...prev, productInterests: updated };
    });
    if (errors.productInterests) {
      setErrors((prev) => ({ ...prev, productInterests: undefined }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = validateQuoteForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setErrors({});
    }, 450);
  };

  const handleApplyEstimatorToQuote = () => {
    if (!scopeResult) return;
    const summary = `Estimated Scope: ${scopeResult.totalOpenings} openings, approx ${scopeResult.totalAreaSqm} m² area, ${estimatorFinish}, ${estimatorGlass}. Complexity: ${scopeResult.complexityFactor}.`;
    setFormData((prev) => ({
      ...prev,
      dimensionsOrQuantity: `${scopeResult.totalOpenings} units (~${scopeResult.totalAreaSqm} m²)`,
      projectNotes: `${prev.projectNotes ? prev.projectNotes + '\n' : ''}${summary}`.trim(),
    }));
    setShowEstimator(false);
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `SYNDICATED METAL INDUSTRIES - QUOTE REQUEST
Name: ${submittedData.fullName}
Phone: ${submittedData.phone}
Email: ${submittedData.email}
Project Type: ${submittedData.projectType}
Location: ${submittedData.projectLocation === 'Other' ? submittedData.customLocation : submittedData.projectLocation}
Products: ${submittedData.productInterests.join(', ')}
Dimensions/Quantity: ${submittedData.dimensionsOrQuantity || 'To be measured on site'}
Preferred Contact: ${submittedData.preferredContact}
Notes: ${submittedData.projectNotes || 'None'}`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  // WhatsApp link construction
  const whatsappMessage = encodeURIComponent(
    `Hello Syndicated Metal Industries, I would like to request an architectural aluminium quotation for a project in ${formData.projectLocation}.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="quote-section" className="py-16 lg:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Inquiry & Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Request an Architectural Aluminium Quotation
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
            Send your window/door schedules, opening dimensions, or project drawings. Our technical estimator will review your specifications and contact you via your preferred channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Comprehensive Quote Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            
            {/* Preselected product banner if coming from catalog */}
            {preselectedProduct && (
              <div className="mb-6 p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-950">
                <div>
                  <span className="font-semibold text-amber-900">Configuring Inquiry for: </span>
                  <span className="font-bold">{preselectedProduct.name}</span>
                  {preselectedFinish && <span className="ml-1 text-slate-600">({preselectedFinish})</span>}
                </div>
                {onClearPreselection && (
                  <button
                    onClick={onClearPreselection}
                    className="text-amber-800 hover:text-amber-950 font-medium underline text-[11px] cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            )}

            {/* Success Submission State */}
            {submittedData ? (
              <div className="space-y-6 py-4">
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-emerald-950 font-display">
                    Quotation Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="font-semibold">{submittedData.fullName}</strong>. Your project inquiry has been queued for our technical estimators in <strong className="font-semibold">{submittedData.projectLocation}</strong>.
                  </p>
                  <p className="text-xs text-slate-500">
                    We will review your opening requirements and reach out via <strong className="font-semibold capitalize text-slate-800">{submittedData.preferredContact}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Inquiry Summary:</div>
                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <div><span className="font-medium text-slate-800">Phone:</span> {submittedData.phone}</div>
                    <div><span className="font-medium text-slate-800">Email:</span> {submittedData.email}</div>
                    <div><span className="font-medium text-slate-800">Project Type:</span> {submittedData.projectType}</div>
                    <div><span className="font-medium text-slate-800">Location:</span> {submittedData.projectLocation === 'Other' ? submittedData.customLocation : submittedData.projectLocation}</div>
                  </div>
                  {submittedData.projectNotes && (
                    <div className="pt-2 text-slate-600 border-t border-slate-200">
                      <span className="font-medium text-slate-800">Notes:</span> {submittedData.projectNotes}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleCopySummary}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        projectType: 'Private Residential Villa',
                        projectLocation: 'Lagos',
                        customLocation: '',
                        productInterests: ['aluminium-sliding-doors'],
                        dimensionsOrQuantity: '',
                        preferredContact: 'phone',
                        projectNotes: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-100">
                    1. Contact Information
                  </div>

                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800 mb-1">
                      Full Name / Company Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Arc. Babatunde Okafor / Prime Structures Ltd"
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/40' : 'border-slate-300'
                      }`}
                      required
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-800 mb-1">
                        Phone Number (Nigerian Format) <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0803 123 4567 or +234..."
                        className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/40' : 'border-slate-300'
                        }`}
                        required
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-800 mb-1">
                        Email Address <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. project@firm.com"
                        className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-300'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-100">
                    2. Project Profile & Location
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-slate-800 mb-1">
                        Project Category
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all cursor-pointer"
                      >
                        <option value="Private Residential Villa">Private Residential Villa</option>
                        <option value="Multi-Unit Residential Block">Multi-Unit Residential Block</option>
                        <option value="Commercial Office / Plaza">Commercial Office / Plaza</option>
                        <option value="Storefront / Retail Space">Storefront / Retail Space</option>
                        <option value="Institutional / Hospital / School">Institutional / Public Building</option>
                        <option value="Renovation / Window Replacement">Renovation / Replacement</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="projectLocation" className="block text-xs font-semibold text-slate-800 mb-1">
                        Project Location State <span className="text-amber-600">*</span>
                      </label>
                      <select
                        id="projectLocation"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all cursor-pointer"
                      >
                        <option value="Lagos">Lagos State (Island / Mainland)</option>
                        <option value="Rivers">Rivers State (Port Harcourt / Environs)</option>
                        <option value="Abuja FCT">Abuja FCT</option>
                        <option value="Ogun">Ogun State</option>
                        <option value="Delta">Delta State</option>
                        <option value="Other">Other Nigerian State / Region</option>
                      </select>
                    </div>
                  </div>

                  {formData.projectLocation === 'Other' && (
                    <div>
                      <label htmlFor="customLocation" className="block text-xs font-semibold text-slate-800 mb-1">
                        Specify City / State <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="customLocation"
                        name="customLocation"
                        type="text"
                        value={formData.customLocation}
                        onChange={handleChange}
                        placeholder="e.g. Asaba, Delta State or Ibadan, Oyo State"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Product Interests Multi-select */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      3. Products of Interest <span className="text-amber-600">*</span>
                    </label>
                    <span className="text-[11px] text-slate-500">Select all that apply</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'aluminium-sliding-doors', label: 'Aluminium Sliding Doors' },
                      { id: 'heavy-duty-hinged-doors', label: 'Heavy-Duty Entrance Doors' },
                      { id: 'aluminium-casement-windows', label: 'Casement Windows' },
                      { id: 'aluminium-sliding-windows', label: 'Sliding Windows' },
                      { id: 'curtain-wall-facades', label: 'Curtain Wall / Facade' },
                      { id: 'aluminium-louvres-sunshades', label: 'Louvres & Sunshades' },
                    ].map((item) => {
                      const isChecked = formData.productInterests.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleProductToggle(item.id)}
                          className={`p-2.5 rounded-lg border text-xs text-left font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isChecked
                              ? 'border-amber-600 bg-amber-50/60 text-slate-950 font-semibold'
                              : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                              isChecked
                                ? 'bg-amber-600 border-amber-600 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.productInterests && (
                    <p className="text-[11px] text-red-600 font-medium">{errors.productInterests}</p>
                  )}
                </div>

                {/* Scope & Quantity + Estimator Helper Trigger */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <label htmlFor="dimensionsOrQuantity" className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      4. Approximate Dimensions or Units
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowEstimator(!showEstimator)}
                      className="text-amber-700 hover:text-amber-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>{showEstimator ? 'Hide Scope Estimator' : 'Use Scope Estimator Helper'}</span>
                    </button>
                  </div>

                  {/* Interactive Indicative Scope Estimator Tool */}
                  {showEstimator && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="font-bold text-slate-900">Indicative Architectural Estimator</span>
                        <span className="text-[11px] text-slate-500">Estimates opening area & perimeter</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-medium text-slate-700 mb-1">
                            Opening Count: {estimatorOpenings} units
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="50"
                            value={estimatorOpenings}
                            onChange={(e) => setEstimatorOpenings(parseInt(e.target.value))}
                            className="w-full accent-amber-600"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-slate-700 mb-1">
                            Avg Width: {estimatorWidth} mm
                          </label>
                          <input
                            type="range"
                            min="600"
                            max="3000"
                            step="100"
                            value={estimatorWidth}
                            onChange={(e) => setEstimatorWidth(parseInt(e.target.value))}
                            className="w-full accent-amber-600"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-slate-700 mb-1">
                            Avg Height: {estimatorHeight} mm
                          </label>
                          <input
                            type="range"
                            min="600"
                            max="3200"
                            step="100"
                            value={estimatorHeight}
                            onChange={(e) => setEstimatorHeight(parseInt(e.target.value))}
                            className="w-full accent-amber-600"
                          />
                        </div>
                      </div>

                      {scopeResult && (
                        <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-2">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono tabular-nums text-slate-800">
                            <div>Total Openings: <strong className="font-bold">{scopeResult.totalOpenings}</strong></div>
                            <div>Approx Area: <strong className="font-bold">{scopeResult.totalAreaSqm} m²</strong></div>
                            <div>Est. Framing: <strong className="font-bold">{scopeResult.estimatedPerimeterMeters} m</strong></div>
                          </div>
                          <div className="text-[11px] text-slate-600">
                            <strong>Engineering Category:</strong> {scopeResult.complexityFactor} · {scopeResult.environmentalNotes}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleApplyEstimatorToQuote}
                          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded text-xs transition-colors cursor-pointer"
                        >
                          Insert Calculations into Form
                        </button>
                      </div>
                    </div>
                  )}

                  <input
                    id="dimensionsOrQuantity"
                    name="dimensionsOrQuantity"
                    type="text"
                    value={formData.dimensionsOrQuantity}
                    onChange={handleChange}
                    placeholder="e.g. 14 casement windows (approx 1200x1500mm), 2 sliding patio doors"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                    5. Preferred Channel for Estimate Delivery
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'phone', label: 'Direct Phone Call' },
                      { id: 'whatsapp', label: 'WhatsApp' },
                      { id: 'email', label: 'Email PDF' },
                    ].map((m) => (
                      <label
                        key={m.id}
                        className={`p-2.5 rounded-lg border text-xs text-center font-medium cursor-pointer transition-all ${
                          formData.preferredContact === m.id
                            ? 'border-amber-600 bg-amber-50 text-slate-900 font-semibold'
                            : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={m.id}
                          checked={formData.preferredContact === m.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{m.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Notes */}
                <div className="space-y-1 pt-4 border-t border-slate-100">
                  <label htmlFor="projectNotes" className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                    6. Architectural Notes / Glass Preferences
                  </label>
                  <textarea
                    id="projectNotes"
                    name="projectNotes"
                    rows={3}
                    value={formData.projectNotes}
                    onChange={handleChange}
                    placeholder="Add details on preferred powder-coat color (e.g. Matte Black 9005), glass type (double glazed, tinted), site stage (lintel level, plastered), or drawings availability..."
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Submit Action & Privacy Disclosure */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Processing Estimate Request...' : 'Send Quotation Request'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 leading-normal text-center">
                    Your contact information will only be used to process this quote and schedule technical site consultations. We do not sell or share contact details with third-party vendors.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Verified Contact & Dual-City Facilities (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Action */}
            <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-md border border-emerald-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-800 rounded-xl text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display">Need Quick Project Advice?</h3>
                  <div className="text-xs text-emerald-200">Chat with Technical Sales on WhatsApp</div>
                </div>
              </div>

              <p className="text-xs text-emerald-100 leading-relaxed">
                Send opening dimensions, photos of masonry reveals, or PDF window schedules directly for instant triage.
              </p>

              <div className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold text-emerald-950 bg-emerald-300 hover:bg-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp ({COMPANY_CONFIG.whatsappDisplay})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <div className="text-[10px] text-emerald-300/80 text-center mt-1.5">
                  Configurable WhatsApp line in companyConfig.ts (marked editable placeholder)
                </div>
              </div>
            </div>

            {/* Direct Facilities Cards */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm">
              <div className="border-b border-slate-100 pb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Regional Operating Hubs
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Lagos, Abuja & Port Harcourt Facilities
                </h3>
              </div>

              {COMPANY_CONFIG.locations.map((loc, idx) => (
                <div key={idx} className="space-y-2 text-xs border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      {loc.city} ({loc.state})
                    </span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                      Verified Branch
                    </span>
                  </div>

                  <div className="text-[11px] font-medium text-amber-800 pl-5">{loc.role}</div>
                  <p className="text-slate-600 pl-5">{loc.address}</p>
                  {loc.additionalAddress && (
                    <p className="text-slate-500 text-[11px] pl-5"><strong>Office:</strong> {loc.additionalAddress}</p>
                  )}

                  <div className="pl-5 space-y-1 text-slate-600 pt-1">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>{loc.phone} {loc.additionalPhone && `· ${loc.additionalPhone}`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{loc.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{loc.openingHours}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2 p-3 bg-slate-50 rounded-lg text-[11px] text-slate-600 space-y-1 border border-slate-200">
                <div className="font-semibold text-slate-800">ISO-Certified Nigerian Fabricator:</div>
                <div>Syndicated Metal Industries operates directly across Nigeria with verified European technology partnerships (Schüco, Saint-Gobain, ALBOND, DEKO, META, OWA).</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
