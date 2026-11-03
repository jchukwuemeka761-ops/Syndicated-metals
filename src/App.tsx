import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProductCatalog } from './components/ProductCatalog.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsGallery } from './components/ProjectsGallery.tsx';
import { AffiliatesPage } from './components/AffiliatesPage.tsx';
import { LocationsPage } from './components/LocationsPage.tsx';
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
        {/* VIEW 1: HOME PAGE (Pure Home Screen with 5-Project Slideshow & Dedicated Page Portals) */}
        {activeTab === 'home' && (
          <div className="bg-slate-950 text-white">
            {/* Hero Section: 5-Project Autoplay Slideshow */}
            <Hero
              onExploreProducts={() => handleNavigate('products')}
              onRequestQuote={handleRequestQuote}
              onSelectProjectForInquiry={handleSelectProjectForInquiry}
              onNavigateToProjects={() => handleNavigate('projects')}
              onNavigateToAffiliates={() => handleNavigate('affiliates')}
            />

            {/* Direct Gateway to Dedicated Pages */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                    <span>Explore Our Dedicated Portals</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
                    Dedicated Departments & Complete Portfolios
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    Select a section below to explore our verified systems, European technical affiliations, and executed project history across Nigeria.
                  </p>
                </div>

                {/* 6 Clean Gateways - One for each dedicated page */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Gateway 1: Products */}
                  <div
                    onClick={() => handleNavigate('products')}
                    className="group p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-lg">
                        01
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Products Catalog</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                          Architectural Systems & Finishes
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Explore our complete range of precision aluminium doors, sliding windows, curtain walls, and composite cladding specifications.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      <span>View Products Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gateway 2: Services */}
                  <div
                    onClick={() => handleNavigate('services')}
                    className="group p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-lg">
                        02
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Engineering Services</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                          Fabrication & Installation
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        On-site reveal laser surveys, factory CNC extrusion fabrication in Ebute-Metta, and certified installation across Nigeria.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      <span>View Services Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gateway 3: Projects */}
                  <div
                    onClick={() => handleNavigate('projects')}
                    className="group p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-lg">
                        03
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Projects Handled</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                          10 Real Executed Projects
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Inspect real executed curtain walls, commercial ACP cladding, and interior glazing across Lagos, Abuja, Edo, Bayelsa, and Anambra.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      <span>View Projects Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gateway 4: Affiliates */}
                  <div
                    onClick={() => handleNavigate('affiliates')}
                    className="group p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-lg">
                        04
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Technical Partners</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                          European Affiliate Alliances
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Certified partnerships with Schüco, Albond, DEKO, OWA, Saint-Gobain, META, and Lindner with bold logos and technical certifications.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      <span>View Affiliates Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gateway 5: Locations & Google Maps */}
                  <div
                    onClick={() => handleNavigate('locations')}
                    className="group p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-lg">
                        05
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Live Maps & Facilities</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                          Locations Home & Abroad
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Find your way to our Lagos factory, Abuja, or Port Harcourt units with interactive Google Maps and one-click turn-by-turn navigation.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      <span>View Locations & Maps</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gateway 6: About Us */}
                  <div
                    onClick={() => handleNavigate('about')}
                    className="group p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-lg">
                        06
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">About the Company</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                          Syndicated Metal Industries
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Learn about our corporate background, operations in Lagos, Abuja, and Port Harcourt, and commitment to structural durability.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      <span>View About Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gateway 7: Contact */}
                  <div
                    onClick={() => handleNavigate('contact')}
                    className="group p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-lg">
                        07
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Direct Contact & Quotes</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                          Request a Consultation
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Send opening schedules for rapid estimation, or connect directly with our regional teams via phone (+234 803 316 9896) or WhatsApp.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      <span>View Contact Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

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

        {/* VIEW 6: LOCATIONS & GOOGLE MAPS PAGE */}
        {activeTab === 'locations' && (
          <div>
            <LocationsPage onRequestQuote={handleRequestQuote} />
          </div>
        )}

        {/* VIEW 7: ABOUT PAGE */}
        {activeTab === 'about' && (
          <div>
            <AboutSection
              onRequestQuote={handleRequestQuote}
              onOpenAudit={() => setIsAuditModalOpen(true)}
            />
          </div>
        )}

        {/* VIEW 8: CONTACT / REQUEST A QUOTE PAGE */}
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
