import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProductCatalog } from './components/ProductCatalog.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsGallery } from './components/ProjectsGallery.tsx';
import { AffiliatesPage } from './components/AffiliatesPage.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { QuoteSection } from './components/QuoteSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PlaceholderGuideModal } from './components/PlaceholderGuideModal.tsx';
import { ProductItem, AffiliatePartner, RealProject, AFFILIATES_LIST, REAL_PROJECTS_LIST } from './data/companyConfig.ts';
import {
  ShieldCheck,
  Ruler,
  Wrench,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Globe,
  Building,
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<ProductItem | null>(null);
  const [selectedFinishForQuote, setSelectedFinishForQuote] = useState<string | undefined>(undefined);
  const [selectedGlassForQuote, setSelectedGlassForQuote] = useState<string | undefined>(undefined);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuote = () => {
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('quote-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectProductForQuote = (product: ProductItem, finish?: string, glass?: string) => {
    setSelectedProductForQuote(product);
    setSelectedFinishForQuote(finish);
    setSelectedGlassForQuote(glass);
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('quote-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectPartnerForQuote = (partner: AffiliatePartner) => {
    setSelectedProductForQuote({
      id: partner.id,
      name: `${partner.name} (${partner.country}) Architectural Systems`,
      category: 'custom',
      categoryLabel: partner.specialization,
      subtitle: partner.legalEntity,
      description: partner.description,
      image: partner.logo,
      isImagePlaceholder: false,
      specs: {
        standardFinishes: ["European Certified Finishes"],
        glassOptions: ["Saint-Gobain or Partner Certified Glass"],
        typicalDimensions: "Engineered per project schedules",
        framingSystem: `${partner.name} European Standard System`,
        hardwareOptions: partner.systemsSupplied,
        recommendedUseCases: ["Commercial and Residential Nigerian Projects"],
        leadTimeGuide: "Coordinated shipment & fabrication schedule"
      }
    });
    setSelectedFinishForQuote(partner.standards);
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('quote-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectProjectForInquiry = (project: RealProject) => {
    setSelectedProductForQuote({
      id: project.id,
      name: project.title,
      category: 'custom',
      categoryLabel: project.categoryLabel,
      subtitle: project.locationLabel,
      description: project.description,
      image: project.image,
      isImagePlaceholder: false,
      specs: {
        standardFinishes: ["Verified European Spec Finish"],
        glassOptions: ["Saint-Gobain Solar Reflective"],
        typicalDimensions: "Custom architectural opening schedule",
        framingSystem: "EU Standard Structural Extrusion",
        hardwareOptions: project.specifications,
        recommendedUseCases: [project.clientPartner],
        leadTimeGuide: "Project specific"
      }
    });
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('quote-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleClearPreselection = () => {
    setSelectedProductForQuote(null);
    setSelectedFinishForQuote(undefined);
    setSelectedGlassForQuote(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-600 selection:text-white">
      
      {/* Universal Top Bar */}
      <Header
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <Hero
              onExploreProducts={() => handleNavigate('products')}
              onRequestQuote={handleRequestQuote}
            />

            {/* International Technical Affiliates Spotlight Ribbon */}
            <section className="py-12 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Technical Partnerships
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Engineered with World-Class International Affiliates
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('affiliates')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span>View Dedicated Affiliates Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Clickable Partners Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
                  {AFFILIATES_LIST.slice(0, 6).map((partner) => (
                    <button
                      key={partner.id}
                      onClick={() => handleNavigate('affiliates')}
                      className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer text-center"
                    >
                      <div className="h-10 w-full flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-8 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="text-[11px] font-bold text-slate-900 group-hover:text-amber-800">
                        {partner.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {partner.country}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Core Architectural Solutions */}
            <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                    Architectural Systems
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
                    Precision Aluminium Building Products & Cladding
                  </h2>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                    Fabricated to European standards using Schüco profiles, Albond composite panels, and Saint-Gobain solar-reflective safety glass.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Category 1: Curtain Walls */}
                  <div className="group rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
                        <img
                          src="/assets/real/project-abuja-curtain-wall.jpg"
                          alt="Structural curtain walling by Syndicated Metal"
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Schüco & Saint-Gobain Systems</div>
                        <h3 className="text-xl font-bold text-slate-900 font-display mt-1">Curtain Walls & Facades</h3>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          Frameless, semi-frameless, and curved structural curtain walls with solar-reflective Cool-Lite glass for Nigerian commercial towers.
                        </p>
                      </div>
                    </div>
                    <div className="pt-6">
                      <button
                        onClick={() => handleNavigate('products')}
                        className="text-xs font-semibold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Explore Facade Systems</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Category 2: ACP Cladding */}
                  <div className="group rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
                        <img
                          src="/assets/real/project-abuja-cladding.jpg"
                          alt="Albond ACP facade cladding by Syndicated Metal"
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">ALBOND (Turkey) Cladding</div>
                        <h3 className="text-xl font-bold text-slate-900 font-display mt-1">Aluminium Composite Cladding</h3>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          Fire-rated aluminium composite panels (ACP) for commercial facades, soffits, sun blades, and entrance canopy fascias.
                        </p>
                      </div>
                    </div>
                    <div className="pt-6">
                      <button
                        onClick={() => handleNavigate('products')}
                        className="text-xs font-semibold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Explore Cladding Systems</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Category 3: Demountable Partitions & Windows */}
                  <div className="group rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
                        <img
                          src="/assets/real/project-deko-frosted.jpg"
                          alt="DEKO demountable acoustic glass partitions by Syndicated Metal"
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">DEKO (Denmark) Partitions</div>
                        <h3 className="text-xl font-bold text-slate-900 font-display mt-1">Acoustic Glass Partitions</h3>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          Danish-engineered demountable glass partition systems with frosted branding, acoustic seals, and relocatable frames for corporate offices.
                        </p>
                      </div>
                    </div>
                    <div className="pt-6">
                      <button
                        onClick={() => handleNavigate('products')}
                        className="text-xs font-semibold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Explore Interior Systems</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Work With Us Section */}
            <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                    Professional Standards
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
                    European Standards Manufactured in Nigeria
                  </h2>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                    Combining certified international materials with precision on-site surveying, factory extrusion cutting, and seasoned installation teams across Nigeria.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="p-2.5 w-fit rounded-xl bg-amber-50 text-amber-700">
                      <Ruler className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display">Exact On-Site Surveys</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We verify structural reveals and finished floor levels on-site prior to fabrication, preventing costly site modifications.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="p-2.5 w-fit rounded-xl bg-amber-50 text-amber-700">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display">Controlled Fabrication</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Calibrated mitre joints, reinforced corner cleats, and factory-fitted weather gaskets assembled in our Ebute-Metta factory yard.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="p-2.5 w-fit rounded-xl bg-amber-50 text-amber-700">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display">Tropical Durability</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Finishes selected for UV resistance, salt-air corrosion protection in coastal Lagos/Niger Delta, and driving rain sealing.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="p-2.5 w-fit rounded-xl bg-amber-50 text-amber-700">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display">Nationwide Footprint</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Active regional centers and technical crews stationed in Lagos, Abuja FCT, and Port Harcourt.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Selected Real Projects Showcase Snapshot */}
            <section className="py-16 lg:py-24 bg-slate-100/70 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div className="max-w-2xl">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                      Real Executed Work
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
                      Recent Projects Handled Across Nigeria
                    </h2>
                    <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
                      Verified installations by Syndicated Metal Industries across commercial towers, banks, and state facilities.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate('projects')}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>View All {REAL_PROJECTS_LIST.length} Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {REAL_PROJECTS_LIST.slice(0, 3).map((proj) => (
                    <div key={proj.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                      <div className="relative aspect-[4/3] bg-slate-900">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-xs">
                          Verified Project
                        </div>
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white bg-slate-950/80 px-2.5 py-1 rounded">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{proj.locationLabel}</span>
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <div className="text-[11px] font-semibold text-amber-800">{proj.clientPartner}</div>
                        <h3 className="text-base font-bold text-slate-900 font-display line-clamp-1">{proj.title}</h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom Contact CTA Banner */}
            <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <div className="max-w-2xl mx-auto space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Get in Touch
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-balance">
                    Ready to Discuss Your Building Schedule?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Whether you require a full curtain wall package, Albond composite cladding, or DEKO interior acoustic partitions, our technical team in Lagos, Abuja, and Port Harcourt is ready to evaluate your drawings.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={handleRequestQuote}
                    className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    Request a Quotation & Consultation
                  </button>
                  <button
                    onClick={() => handleNavigate('affiliates')}
                    className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all cursor-pointer"
                  >
                    Explore Affiliate Partners
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: PRODUCTS PAGE */}
        {activeTab === 'products' && (
          <div>
            <ProductCatalog onSelectForQuote={handleSelectProductForQuote} />
          </div>
        )}

        {/* VIEW 3: SERVICES PAGE */}
        {activeTab === 'services' && (
          <div>
            <ServicesSection onRequestQuote={handleRequestQuote} />
          </div>
        )}

        {/* VIEW 4: PROJECTS / GALLERY PAGE (Real Projects Handled) */}
        {activeTab === 'projects' && (
          <div>
            <ProjectsGallery
              onRequestQuote={handleRequestQuote}
              onSelectProjectForInquiry={handleSelectProjectForInquiry}
            />
          </div>
        )}

        {/* VIEW 5: DEDICATED AFFILIATES PAGE */}
        {activeTab === 'affiliates' && (
          <div>
            <AffiliatesPage
              onSelectPartnerForQuote={handleSelectPartnerForQuote}
              onRequestGeneralQuote={handleRequestQuote}
            />
          </div>
        )}

        {/* VIEW 6: ABOUT PAGE */}
        {activeTab === 'about' && (
          <div>
            <AboutSection
              onRequestQuote={handleRequestQuote}
              onOpenAudit={() => setIsAuditModalOpen(true)}
            />
          </div>
        )}

        {/* VIEW 7: CONTACT / REQUEST A QUOTE PAGE */}
        {activeTab === 'contact' && (
          <div>
            <QuoteSection
              preselectedProduct={selectedProductForQuote}
              preselectedFinish={selectedFinishForQuote}
              preselectedGlass={selectedGlassForQuote}
              onClearPreselection={handleClearPreselection}
            />
          </div>
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Client Audit Guide Modal */}
      <PlaceholderGuideModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

    </div>
  );
}
