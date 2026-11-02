/**
 * Pure Validation & Estimator Utilities
 * Designed to decouple pure business logic from UI components for testability.
 */

export interface NigerianPhoneValidationResult {
  isValid: boolean;
  normalized?: string;
  formatted?: string;
  error?: string;
}

/**
 * Validates and normalizes Nigerian mobile and landline telephone numbers.
 * Supports:
 * - Local mobile: 080, 081, 070, 090, 091 (11 digits)
 * - International: +234 or 234 followed by 10 digits
 * - Lagos landlines: 01 followed by 7 digits, or +234 1 ...
 * - Port Harcourt landlines: 084 followed by 6-7 digits, or +234 84 ...
 */
export function validateNigerianPhone(input: string): NigerianPhoneValidationResult {
  if (!input || typeof input !== 'string') {
    return { isValid: false, error: 'Phone number is required.' };
  }

  // Remove spaces, dashes, parentheses, dots
  const cleaned = input.replace(/[\s\-\(\)\.]/g, '');

  if (cleaned.length === 0) {
    return { isValid: false, error: 'Phone number cannot be blank.' };
  }

  // Check international format starting with +234 or 234
  let normalizedDigits = cleaned;
  if (normalizedDigits.startsWith('+')) {
    normalizedDigits = normalizedDigits.substring(1);
  }

  if (normalizedDigits.startsWith('234')) {
    // 234 + 10 digits for mobile (e.g. 2348031234567) or 234 + landline
    const withoutCountry = normalizedDigits.substring(3);
    if (/^[789][01]\d{8}$/.test(withoutCountry)) {
      // Valid mobile
      const formatted = `+234 ${withoutCountry.substring(0, 3)} ${withoutCountry.substring(3, 6)} ${withoutCountry.substring(6)}`;
      return { isValid: true, normalized: `+234${withoutCountry}`, formatted };
    }
    // Lagos landline 234 + 1 + 7 digits
    if (/^1\d{7}$/.test(withoutCountry)) {
      const formatted = `+234 1 ${withoutCountry.substring(1, 4)} ${withoutCountry.substring(4)}`;
      return { isValid: true, normalized: `+234${withoutCountry}`, formatted };
    }
    // Port Harcourt landline 234 + 84 + 6-7 digits
    if (/^84\d{6,7}$/.test(withoutCountry)) {
      const formatted = `+234 84 ${withoutCountry.substring(2)}`;
      return { isValid: true, normalized: `+234${withoutCountry}`, formatted };
    }
  }

  // Check local 11-digit mobile starting with 0
  if (/^0[789][01]\d{8}$/.test(cleaned)) {
    const withoutZero = cleaned.substring(1);
    const formatted = `+234 ${withoutZero.substring(0, 3)} ${withoutZero.substring(3, 6)} ${withoutZero.substring(6)}`;
    return { isValid: true, normalized: `+234${withoutZero}`, formatted };
  }

  // Check local Lagos landline 01 + 7 digits (9 digits total)
  if (/^01\d{7}$/.test(cleaned)) {
    const withoutZero = cleaned.substring(1);
    const formatted = `+234 1 ${withoutZero.substring(1, 4)} ${withoutZero.substring(4)}`;
    return { isValid: true, normalized: `+234${withoutZero}`, formatted };
  }

  // Check local Port Harcourt landline 084 + 6-7 digits
  if (/^084\d{6,7}$/.test(cleaned)) {
    const withoutZero = cleaned.substring(1);
    const formatted = `+234 84 ${withoutZero.substring(2)}`;
    return { isValid: true, normalized: `+234${withoutZero}`, formatted };
  }

  return {
    isValid: false,
    error: 'Please enter a valid Nigerian telephone number (e.g. 0803 123 4567 or +234 803 123 4567).'
  };
}

/**
 * Validates standard email address syntax.
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  // Standard strict email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(trimmed);
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  customLocation?: string;
  productInterests: string[];
  dimensionsOrQuantity: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  projectNotes: string;
}

export interface FormValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  projectLocation?: string;
  productInterests?: string;
  dimensionsOrQuantity?: string;
  preferredContact?: string;
  general?: string;
}

export function validateQuoteForm(data: Partial<QuoteFormData>): {
  isValid: boolean;
  errors: FormValidationErrors;
} {
  const errors: FormValidationErrors = {};

  // Full Name
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  // Phone
  const phoneResult = validateNigerianPhone(data.phone || '');
  if (!phoneResult.isValid) {
    errors.phone = phoneResult.error || 'A valid phone number is required.';
  }

  // Email
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  // Project Type
  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a project type.';
  }

  // Project Location
  if (!data.projectLocation || data.projectLocation.trim() === '') {
    errors.projectLocation = 'Please select your project location.';
  } else if (data.projectLocation === 'Other' && (!data.customLocation || data.customLocation.trim().length < 2)) {
    errors.projectLocation = 'Please specify your project state or city.';
  }

  // Product Interests
  if (!data.productInterests || data.productInterests.length === 0) {
    errors.productInterests = 'Please select at least one aluminium product of interest.';
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}

export interface ScopeCalculationInput {
  estimatedOpeningCount: number;
  averageWidthMm: number;
  averageHeightMm: number;
  selectedFinish: string;
  selectedGlass: string;
}

export interface ScopeCalculationResult {
  totalOpenings: number;
  totalAreaSqm: number;
  estimatedPerimeterMeters: number;
  complexityFactor: 'Standard' | 'Elevated' | 'Engineered Heavy-Duty';
  environmentalNotes: string;
  advisoryNotes: string[];
}

/**
 * Calculates indicative technical architectural scope parameters for inquiry preparation.
 */
export function calculateIndicativeScope(input: ScopeCalculationInput): ScopeCalculationResult {
  const count = Math.max(1, input.estimatedOpeningCount || 1);
  const widthM = Math.max(0.3, (input.averageWidthMm || 1200) / 1000);
  const heightM = Math.max(0.3, (input.averageHeightMm || 1500) / 1000);

  const singleArea = widthM * heightM;
  const totalAreaSqm = parseFloat((singleArea * count).toFixed(2));
  const singlePerimeter = 2 * (widthM + heightM);
  const totalPerimeterMeters = parseFloat((singlePerimeter * count).toFixed(1));

  let complexity: 'Standard' | 'Elevated' | 'Engineered Heavy-Duty' = 'Standard';
  const advisoryNotes: string[] = [];

  if (heightM > 2.4 || widthM > 2.0) {
    complexity = 'Engineered Heavy-Duty';
    advisoryNotes.push('Large span opening requires heavier profile gauge and structural wind-load verification.');
  } else if (input.selectedGlass.toLowerCase().includes('double') || input.selectedGlass.toLowerCase().includes('laminated')) {
    complexity = 'Elevated';
    advisoryNotes.push('Double glazed or laminated units require deeper glazing pockets and heavy-duty friction stays/rollers.');
  }

  if (input.selectedFinish.toLowerCase().includes('anodized') || input.selectedFinish.toLowerCase().includes('pvdf')) {
    advisoryNotes.push('Premium anodized / PVDF finish provides superior salt-spray corrosion resistance for coastal coastal locations (Lagos / Port Harcourt).');
  }

  const environmentalNotes = totalAreaSqm > 30
    ? 'Significant glazed facade area; recommend sun-control tinted or Low-E double glazing to manage tropical solar heat gain.'
    : 'Standard residential scale; ensure sill flashing and exterior weep-hole clearance during masonry preparation.';

  return {
    totalOpenings: count,
    totalAreaSqm,
    estimatedPerimeterMeters: totalPerimeterMeters,
    complexityFactor: complexity,
    environmentalNotes,
    advisoryNotes
  };
}
