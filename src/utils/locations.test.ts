import { describe, it } from 'node:test';
import assert from 'node:assert';
import { HOME_LOCATIONS, ABROAD_LOCATIONS, ALL_LOCATIONS_LIST } from '../data/companyConfig.ts';

describe('Locations & Google Maps Data Integrity', () => {
  it('includes all 3 Nigerian home operational hubs (Lagos, Abuja, Port Harcourt)', () => {
    const homeCities = HOME_LOCATIONS.map((loc) => loc.city);
    assert.ok(homeCities.includes('Lagos'), 'Missing Lagos home location');
    assert.ok(homeCities.includes('Abuja'), 'Missing Abuja home location');
    assert.ok(homeCities.includes('Port Harcourt'), 'Missing Port Harcourt home location');
    assert.strictEqual(HOME_LOCATIONS.length, 3);
  });

  it('all home locations have valid coordinates, map queries, and direction queries', () => {
    for (const loc of HOME_LOCATIONS) {
      assert.ok(loc.lat !== 0 && !isNaN(loc.lat), `${loc.city} has invalid lat`);
      assert.ok(loc.lng !== 0 && !isNaN(loc.lng), `${loc.city} has invalid lng`);
      assert.ok(loc.mapQuery && loc.mapQuery.length > 5, `${loc.city} missing mapQuery`);
      assert.ok(loc.directionQuery && loc.directionQuery.length > 5, `${loc.city} missing directionQuery`);
      assert.ok(loc.phone && loc.phone.startsWith('+234'), `${loc.city} has invalid phone prefix`);
    }
  });

  it('all abroad locations have valid European partner details and coordinates', () => {
    assert.ok(ABROAD_LOCATIONS.length >= 6, 'Should have at least 6 international partner hubs');
    const abroadCountries = ABROAD_LOCATIONS.map((loc) => loc.country);
    assert.ok(abroadCountries.includes('Turkey'), 'Missing Turkey abroad location');
    assert.ok(abroadCountries.includes('Denmark'), 'Missing Denmark abroad location');
    assert.ok(abroadCountries.includes('Germany'), 'Missing Germany abroad location');
    assert.ok(abroadCountries.includes('France'), 'Missing France abroad location');

    for (const loc of ABROAD_LOCATIONS) {
      assert.ok(loc.lat !== 0 && !isNaN(loc.lat), `${loc.city} abroad has invalid lat`);
      assert.ok(loc.lng !== 0 && !isNaN(loc.lng), `${loc.city} abroad has invalid lng`);
      assert.ok(loc.mapQuery && loc.mapQuery.length > 5, `${loc.city} abroad missing mapQuery`);
    }
  });

  it('ALL_LOCATIONS_LIST accurately combines home and abroad without duplicates', () => {
    assert.strictEqual(ALL_LOCATIONS_LIST.length, HOME_LOCATIONS.length + ABROAD_LOCATIONS.length);
    const ids = ALL_LOCATIONS_LIST.map((loc) => loc.id);
    const uniqueIds = new Set(ids);
    assert.strictEqual(uniqueIds.size, ids.length, 'Duplicate location IDs detected in list');
  });
});
