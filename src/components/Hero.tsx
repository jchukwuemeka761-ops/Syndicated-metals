import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MapPin,
  ShieldCheck,
  Ruler,
  Wrench,
  Award,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { REAL_PROJECTS_LIST, RealProject } from '../data/companyConfig.ts';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
  onSelectProjectForInquiry?: (project: RealProject) => void;
  onNavigateToProjects?: () => void;
  onNavigateToAffiliates?: () => void;
}

// 5 premier featured completed projects from Syndicated Metal Industries
const FEATURED_SLIDES: (RealProject & {
  tagline: string;
  systemsHighlight: string;
  impactMetrics: string;
})[] = [
  {
    ...REAL_PROJECTS_LIST[1], // Abuja Curtain Wall
    tagline: "Commercial Headquarters & Institutional Landmark",
    systemsHighlight: "Saint-Gobain Cool-Lite Solar Control Glass · Schüco Structural Mullions",
    impactMetrics: "Full-Height Structural Facade · Abuja FCT"
  },
  {
    ...REAL_PROJECTS_LIST[0], // Anambra Windows
    tagline: "High-Specification Residential & Public Architecture",
    systemsHighlight: "Integrated Semi-Automatic Retractable Flyscreens · Top Fixed Daylighting",
    impactMetrics: "Monsoon Weather-Sealed Sash · Anambra State"
  },
  {
    ...REAL_PROJECTS_LIST[2], // Edo Curved Curtain Wall
    tagline: "Architectural Curved Facade Engineering",
    systemsHighlight: "Continuous Radial Curved Facade · Saint-Gobain Reflective Solar Glazing",
    impactMetrics: "High Wind-Load Anchorage · Edo State"
  },
  {
    ...REAL_PROJECTS_LIST[4], // Bayelsa Semi-Frameless Curtain Wall
    tagline: "Niger Delta Marine & Coastal Envelope",
    systemsHighlight: "Concealed Top-Hung Ventilation Vents · Coastal Corrosion-Resistant Extrusions",
    impactMetrics: "Semi-Frameless Glazing · Bayelsa State"
  },
  {
    ...REAL_PROJECTS_LIST[3], // Abuja Albond ACP Cladding
    tagline: "Commercial Facades, Soffits & Column Encasements",
    systemsHighlight: "ALBOND (Turkey) Fire-Retardant ACP Panels · Multi-Coat Metallic PVDF",
    impactMetrics: "Rainscreen Substructure · Abuja FCT"
  }
];

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onRequestQuote,
  onSelectProjectForInquiry,
  onNavigateToProjects,
  onNavigateToAffiliates,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);

  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const PROGRESS_INTERVAL = 50; // update progress every 50ms
  const currentSlide = FEATURED_SLIDES[currentSlideIndex];

  // Auto-play timer with progress bar
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const progressTimer = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((oldIndex) => (oldIndex + 1) % FEATURED_SLIDES.length);
          return 0;
        }
        return prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(progressTimer);
  }, [isPlaying, isHovered, currentSlideIndex]);

  const handleNextSlide = () => {
    setSlideProgress(0);
    setCurrentSlideIndex((prev) => (prev + 1) % FEATURED_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setSlideProgress(0);
    setCurrentSlideIndex((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const handleGoToSlide = (index: number) => {
    setSlideProgress(0);
    setCurrentSlideIndex(index);
  };

  const handleInquireThisProject = () => {
    if (onSelectProjectForInquiry) {
      onSelectProjectForInquiry(currentSlide);
    } else {
      onRequestQuote();
    }
  };

  return (
    <section
      className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800"
      aria-label="Syndicated Metal Industries Featured Projects Showcase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides with crossfade transition */}
      <div className="absolute inset-0 z-0 select-none">
        {FEATURED_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] transition-transform duration-7000 ease-out transform scale-100 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Cinematic Multilayer Vignette & Gradients for Crisp Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent sm:w-4/5" />
            </div>
          );
        })}
      </div>

      {/* Top Slide Countdown Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 h-1.5 bg-slate-800/80">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-all duration-75 ease-linear"
          style={{ width: `${slideProgress}%` }}
        />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        
        {/* Top Kicker Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Completed Work Showcase · Slide 0{currentSlideIndex + 1} of 0{FEATURED_SLIDES.length}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-300 font-medium bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentSlide.locationLabel}</span>
            </span>
          </div>

          {/* Autoplay Controls & Slide Counter */}
          <div className="flex items-center gap-2 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/80 text-xs text-slate-200">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded hover:bg-slate-800 text-amber-400 transition-colors cursor-pointer"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="font-mono text-slate-400 font-bold">
              0{currentSlideIndex + 1} <span className="text-slate-600">/</span> 0{FEATURED_SLIDES.length}
            </span>
            <div className="h-3 w-px bg-slate-700 mx-1" />
            <button
              onClick={handlePrevSlide}
              className="p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Project Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextSlide}
              className="p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Next Project Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Slide Content (Animated Keyframe Transition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Bold Typography & Project Information (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tagline & Client */}
            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wide uppercase flex items-center gap-2">
                <span>{currentSlide.categoryLabel}</span>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span className="text-slate-200">{currentSlide.tagline}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display text-balance drop-shadow-md">
                {currentSlide.title}
              </h1>
            </div>

            {/* Description & Systems Highlight */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl text-balance">
              {currentSlide.description}
            </p>

            {/* Architectural Systems Inclusions */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md max-w-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Engineered Specifications & Materials:</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 font-medium">
                {currentSlide.systemsHighlight}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentSlide.specifications.slice(0, 3).map((spec, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Actions Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleInquireThisProject}
                className="px-7 py-4 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>Request Quote for Similar System</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToProjects || onExploreProducts}
                className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600/80 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md whitespace-nowrap"
              >
                <span>View All Completed Projects</span>
                <ExternalLink className="w-4 h-4 text-slate-300" />
              </button>
            </div>

          </div>

          {/* Right Column: Live Project Floating Badge & Quick Switcher (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Project Card Highlight Box */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/85 backdrop-blur-md p-5 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Project Details
                </span>
                <span className="text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded font-semibold">
                  Verified Contract
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Client / Context:</span>
                  <span className="font-semibold text-white block text-sm">{currentSlide.clientPartner}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Project Location:</span>
                  <span className="font-semibold text-amber-200 block">{currentSlide.locationLabel}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Core Capability:</span>
                  <span className="font-semibold text-slate-200 block">{currentSlide.categoryLabel}</span>
                </div>
              </div>

              <button
                onClick={handleInquireThisProject}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Inquire for {currentSlide.state} Region</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Slide Selector Pill Indicators */}
            <div className="flex items-center justify-between gap-1.5 px-2">
              {FEATURED_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleGoToSlide(idx)}
                    className={`flex-1 py-2 px-1 text-center rounded-lg transition-all text-xs font-bold cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400/50'
                        : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                    title={`Slide 0${idx + 1}: ${slide.title}`}
                    aria-label={`Jump to slide ${idx + 1}`}
                  >
                    0{idx + 1}
                  </button>
                );
              })}
            </div>

          </div>

        </div>

        {/* 5-Slide Interactive Thumbnail Carousel Strip */}
        <div className="mt-10 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Direct Slide Navigation (Click to inspect any project)
            </span>
            <span className="text-[11px] text-amber-400">
              {isHovered ? "Paused on hover" : "Autoplay active (6s)"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {FEATURED_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleGoToSlide(idx)}
                  className={`relative text-left rounded-xl overflow-hidden p-2.5 border transition-all cursor-pointer group flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-850 border-amber-500 ring-2 ring-amber-500/40 shadow-lg'
                      : 'bg-slate-900/60 hover:bg-slate-850 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-slate-950">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1 left-1 bg-slate-950/80 text-[10px] text-amber-400 font-bold px-1.5 py-0.5 rounded">
                      0{idx + 1}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-400 font-semibold uppercase truncate">
                      {slide.state}
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 leading-snug">
                      {slide.title}
                    </div>
                  </div>
                </button>
              );
            })}
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
                <div className="text-sm font-bold text-slate-100">Factory Fabrication</div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">Calibrated mitres, reinforced joints, and quality seals.</div>
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
                <div className="text-sm font-bold text-slate-100">Lagos, Abuja & Port Harcourt</div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">Active nationwide operational centers.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
