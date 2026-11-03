import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  Clock,
  Compass,
  ArrowRight,
  ExternalLink,
  Building2,
  CheckCircle2,
  Copy,
  Check,
  Globe2,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import {
  LocationInfo,
  HOME_LOCATIONS,
  ABROAD_LOCATIONS,
  ALL_LOCATIONS_LIST,
  COMPANY_CONFIG
} from '../data/companyConfig.ts';

interface LocationsPageProps {
  onRequestQuote: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onRequestQuote }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('lagos');
  const [filterRegion, setFilterRegion] = useState<'all' | 'nigeria' | 'international'>('all');
  const [copiedCoord, setCopiedCoord] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyAzvz8l-1wsyd5z9SYLosj219vFSj4G9C8';

  const selectedLocation =
    ALL_LOCATIONS_LIST.find((loc) => loc.id === selectedLocationId) || HOME_LOCATIONS[0];

  const filteredLocations = ALL_LOCATIONS_LIST.filter((loc) => {
    if (filterRegion === 'all') return true;
    return loc.region === filterRegion;
  });

  const handleCopyCoords = (loc: LocationInfo) => {
    const text = `${loc.lat}, ${loc.lng}`;
    navigator.clipboard.writeText(text);
    setCopiedCoord(loc.id);
    setTimeout(() => {
      setCopiedCoord(null);
    }, 2500);
  };

  const getDirectionsUrl = (loc: LocationInfo) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      loc.directionQuery || `${loc.lat},${loc.lng}`
    )}`;
  };

  const getFullMapUrl = (loc: LocationInfo) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      loc.mapQuery || `${loc.lat},${loc.lng}`
    )}`;
  };

  const getWhatsAppLocationUrl = (loc: LocationInfo) => {
    const message = encodeURIComponent(
      `Hello Syndicated Metal Industries, I am inquiring about services and site coordination for your ${loc.city} (${loc.role}) facility.`
    );
    return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${message}`;
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5" />
              Global Footprint & Live Google Navigation
            </span>
            <span className="text-xs text-slate-400">
              Nigeria Operations & European Technical Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Our Facilities & Regional Hubs{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Home and Abroad
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                Connect directly with our Nigerian production yards in Lagos, regional project centers in
                Abuja and Port Harcourt, and inspect live Google Maps with one-click turn-by-turn navigation.
              </p>
            </div>

            {/* Quick Action Navigation bar */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" />
                  Quick Navigation Direct Jump
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      setSelectedLocationId('lagos');
                      document.getElementById('live-map-view')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-all text-center ${
                      selectedLocationId === 'lagos'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400/50'
                    }`}
                  >
                    Lagos (HQ)
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLocationId('abuja');
                      document.getElementById('live-map-view')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-all text-center ${
                      selectedLocationId === 'abuja'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400/50'
                    }`}
                  >
                    Abuja
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLocationId('port-harcourt');
                      document.getElementById('live-map-view')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-all text-center ${
                      selectedLocationId === 'port-harcourt'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400/50'
                    }`}
                  >
                    Port Harcourt
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Interactive Map & Location Spotlight Section */}
      <section id="live-map-view" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Live Location Navigator</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any branch or international hub below to inspect the interactive Google Map and launch direct route directions.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setFilterRegion('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                filterRegion === 'all'
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Hubs ({ALL_LOCATIONS_LIST.length})
            </button>
            <button
              onClick={() => setFilterRegion('nigeria')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                filterRegion === 'nigeria'
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇳🇬 Nigeria / Home ({HOME_LOCATIONS.length})
            </button>
            <button
              onClick={() => setFilterRegion('international')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                filterRegion === 'international'
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🌍 Abroad / Partners ({ABROAD_LOCATIONS.length})
            </button>
          </div>
        </div>

        {/* 2-Column Interactive Map View: Selector + Live Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Location Selection Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 flex items-center justify-between">
              <span>Choose Location ({filteredLocations.length})</span>
              <span className="text-[11px] text-amber-400">Click to load on map</span>
            </div>

            {filteredLocations.map((loc) => {
              const isSelected = loc.id === selectedLocation.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-slate-800 border-amber-400 shadow-xl shadow-amber-500/5 ring-1 ring-amber-400/50'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl" aria-hidden="true">
                        {loc.countryFlag}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white text-base font-display">
                            {loc.city}
                          </h3>
                          {loc.region === 'nigeria' ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              Nigeria
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">
                              {loc.country}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-amber-400 font-medium line-clamp-1">
                          {loc.role}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                    {loc.address}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-750 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-mono text-[11px] text-slate-300">
                      <Phone className="w-3 h-3 text-amber-400" />
                      {loc.phone}
                    </span>
                    <a
                      href={getDirectionsUrl(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2"
                    >
                      <Navigation className="w-3 h-3" />
                      Navigate
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Google Map + Deep-Dive Facility Detail (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Google Map Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-750 bg-slate-950 shadow-2xl relative">
              
              {/* Map Bar / Header */}
              <div className="bg-slate-850 px-4 py-3 border-b border-slate-750 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{selectedLocation.countryFlag}</span>
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Live Google Map:{' '}
                    </span>
                    <span className="text-xs font-semibold text-amber-400">
                      {selectedLocation.city}, {selectedLocation.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyCoords(selectedLocation)}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 border border-slate-700 transition-colors"
                    title="Copy latitude & longitude"
                  >
                    {copiedCoord === selectedLocation.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>GPS {selectedLocation.lat.toFixed(3)}, {selectedLocation.lng.toFixed(3)}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={getFullMapUrl(selectedLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-750 text-amber-400 hover:text-amber-300 text-xs font-medium flex items-center gap-1 border border-slate-700 transition-colors"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* The Live Interactive Google Map Embed */}
              <div className="w-full h-[380px] sm:h-[440px] bg-slate-950 relative">
                <iframe
                  title={`Google Map - ${selectedLocation.city} Location`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
                    selectedLocation.mapQuery
                  )}&zoom=${selectedLocation.zoom || 15}`}
                />

                {/* Overlaid Navigation Button on Map */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={getDirectionsUrl(selectedLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Navigation className="w-4 h-4 fill-slate-950" />
                    <span>Get Turn-by-Turn Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Selected Location Summary Drawer */}
              <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      {selectedLocation.partnerOrDivision || selectedLocation.role}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {selectedLocation.city} Facility
                    </h3>
                  </div>

                  {/* Immediate Actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`tel:${selectedLocation.phone.replace(/[^0-9+]/g, '')}`}
                      className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Call {selectedLocation.city}</span>
                    </a>

                    <a
                      href={getWhatsAppLocationUrl(selectedLocation)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Desk</span>
                    </a>

                    <a
                      href={getDirectionsUrl(selectedLocation)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Find My Way Here</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-800 text-xs">
                  <div className="space-y-2">
                    <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                      Official Physical Address
                    </div>
                    <p className="text-slate-200 leading-relaxed font-medium">
                      {selectedLocation.address}
                    </p>
                    {selectedLocation.additionalAddress && (
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        <span className="text-amber-400/90 font-semibold">Additional Facility / Office:</span>{' '}
                        {selectedLocation.additionalAddress}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                      Operational Hours & Contact
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{selectedLocation.openingHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <a
                        href={`mailto:${selectedLocation.email}`}
                        className="hover:text-amber-300 underline underline-offset-2"
                      >
                        {selectedLocation.email}
                      </a>
                    </div>
                    {selectedLocation.additionalPhone && (
                      <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                        <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Alt: {selectedLocation.additionalPhone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Operational Highlights */}
                {selectedLocation.highlights && selectedLocation.highlights.length > 0 && (
                  <div className="pt-3 border-t border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Facility Capabilities & Operations
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedLocation.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

        {/* Complete Directory Grid: All Locations Detailed */}
        <div className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Complete Corporate Directory & Route Access
            </h2>
            <p className="text-sm text-slate-300">
              Click “Navigate” on any facility card to launch live Google Maps directions from your current location.
            </p>
          </div>

          {/* Section: Nigeria Locations (Home) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <span className="text-2xl">🇳🇬</span>
              <h3 className="text-xl font-bold text-white font-display">
                Nigeria Facilities (Home Operational Works)
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold ml-auto">
                3 Key Cities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOME_LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/80 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          {loc.state}
                        </div>
                        <h4 className="text-2xl font-black text-white font-display">
                          {loc.city}
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-bold text-slate-300 border border-slate-700">
                        {loc.role.includes('Headquarters') ? 'Headquarters' : 'Regional Hub'}
                      </span>
                    </div>

                    <p className="text-xs text-amber-300/90 font-medium">
                      {loc.role}
                    </p>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Address:</span>
                        <p className="font-medium text-slate-200 mt-0.5">{loc.address}</p>
                      </div>
                      {loc.additionalAddress && (
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Additional Facility:</span>
                          <p className="text-slate-300 mt-0.5">{loc.additionalAddress}</p>
                        </div>
                      )}
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Phone:</span>
                        <a href={`tel:${loc.phone}`} className="font-mono text-slate-200 hover:text-amber-400">
                          {loc.phone}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Hours:</span>
                        <p className="text-slate-300">{loc.openingHours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-2">
                    <a
                      href={getDirectionsUrl(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
                    >
                      <Navigation className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Find Way to {loc.city} (Google Maps)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setSelectedLocationId(loc.id);
                          document.getElementById('live-map-view')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                      >
                        Inspect Map
                      </button>
                      <a
                        href={getWhatsAppLocationUrl(loc)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Abroad / International Partner Facilities */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <span className="text-2xl">🌍</span>
              <h3 className="text-xl font-bold text-white font-display">
                International Partner Facilities (Abroad Supply & Engineering Hubs)
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 font-semibold ml-auto">
                European Supply Alliances
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ABROAD_LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                          <span>{loc.countryFlag}</span>
                          <span>{loc.country}</span>
                        </div>
                        <h4 className="text-xl font-black text-white font-display mt-0.5">
                          {loc.city}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-700">
                        {loc.partnerOrDivision?.split(' ')[0]}
                      </span>
                    </div>

                    <p className="text-xs text-amber-300/80 font-medium line-clamp-1">
                      {loc.partnerOrDivision}
                    </p>

                    <p className="text-xs text-slate-400">
                      {loc.role}
                    </p>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Facility Address:</span>
                        <p className="font-medium text-slate-200 mt-0.5 line-clamp-2">{loc.address}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">International Line:</span>
                        <span className="font-mono text-slate-200">{loc.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-2">
                    <a
                      href={getDirectionsUrl(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => {
                        setSelectedLocationId(loc.id);
                        document.getElementById('live-map-view')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="py-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-750 transition-colors"
                    >
                      Inspect in Live Embed
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight">
              Ready to Coordinate Your Project in Any Nigerian City?
            </h3>
            <p className="text-sm sm:text-base font-medium text-slate-900 max-w-2xl">
              Our site engineers conduct precision reveal laser measurements and project surveys across Lagos,
              Abuja, Port Harcourt, and nationwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm transition-all shadow-xl flex items-center gap-2"
            >
              <span>Request Regional Quote</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello Syndicated Metal Industries, I would like to schedule a site survey or visit your nearest branch.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-950 font-extrabold text-sm transition-all shadow-xl flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};
