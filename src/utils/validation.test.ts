import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateNigerianPhone,
  validateEmail,
  validateQuoteForm,
  calculateIndicativeScope
} from './validation.ts';

test('validateNigerianPhone handles standard 11-digit mobile numbers', () => {
  const result = validateNigerianPhone('08031234567');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '+2348031234567');
  assert.equal(result.formatted, '+234 803 123 4567');
});

test('validateNigerianPhone handles numbers with spaces and dashes', () => {
  const result = validateNigerianPhone('0812-345-6789');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '+2348123456789');
});

test('validateNigerianPhone handles +234 international prefix', () => {
  const result = validateNigerianPhone('+234 809 988 7766');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '+2348099887766');
});

test('validateNigerianPhone handles Lagos landline format', () => {
  const result = validateNigerianPhone('014501200');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '+23414501200');
});

test('validateNigerianPhone rejects invalid or too short input', () => {
  const result = validateNigerianPhone('12345');
  assert.equal(result.isValid, false);
  assert.ok(result.error);
});

test('validateEmail validates standard emails', () => {
  assert.equal(validateEmail('info@syndicatedmetal.com'), true);
  assert.equal(validateEmail('client.project@gmail.com'), true);
  assert.equal(validateEmail('not-an-email'), false);
  assert.equal(validateEmail('missing@domain'), false);
});

test('validateQuoteForm catches missing fields', () => {
  const result = validateQuoteForm({
    fullName: '',
    phone: '',
    email: 'bad',
    projectLocation: '',
    productInterests: []
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.email);
  assert.ok(result.errors.projectLocation);
  assert.ok(result.errors.productInterests);
});

test('validateQuoteForm passes when required fields are valid', () => {
  const result = validateQuoteForm({
    fullName: 'Emeka Nwosu',
    phone: '08023456789',
    email: 'emeka@example.com',
    projectType: 'Private Residential Villa',
    projectLocation: 'Lagos',
    productInterests: ['aluminium-sliding-doors'],
    dimensionsOrQuantity: '12 windows, 3 terrace doors',
    preferredContact: 'phone',
    projectNotes: 'Site near Lekki Phase 1.'
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('calculateIndicativeScope computes area and perimeter correctly', () => {
  const scope = calculateIndicativeScope({
    estimatedOpeningCount: 10,
    averageWidthMm: 1200,
    averageHeightMm: 1500,
    selectedFinish: 'Anodized Natural Silver',
    selectedGlass: '12mm Double Glazed'
  });

  assert.equal(scope.totalOpenings, 10);
  assert.equal(scope.totalAreaSqm, 18); // 1.2 * 1.5 = 1.8 * 10 = 18 m2
  assert.equal(scope.estimatedPerimeterMeters, 54); // 2 * (1.2 + 1.5) = 5.4 * 10 = 54 m
  assert.equal(scope.complexityFactor, 'Elevated');
  assert.ok(scope.advisoryNotes.length > 0);
});
