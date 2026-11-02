/**
 * Syndicated Metal Industries Limited
 * Central Configuration & Live Corporate Records
 * Verified against official company data and technical catalog (syndicatedmetal.com)
 */

export interface LocationInfo {
  city: string;
  state: string;
  role: string;
  address: string;
  additionalAddress?: string;
  phone: string;
  additionalPhone?: string;
  email: string;
  openingHours: string;
  isVerified: boolean;
}

export interface AffiliatePartner {
  id: string;
  name: string;
  legalEntity: string;
  country: string;
  countryFlag: string;
  logo: string;
  specialization: string;
  systemsSupplied: string[];
  description: string;
  standards: string;
  website?: string;
}

export interface CompanyConfig {
  companyName: string;
  legalName: string;
  tagline: string;
  overview: string;
  logoLight: string;
  logoDark: string;
  whatsappNumber: string; // international format e.g. "2348033169896"
  whatsappDisplay: string;
  generalEmail: string;
  generalPhone: string;
  locations: LocationInfo[];
  editorialNotice: string;
}

export const COMPANY_CONFIG: CompanyConfig = {
  companyName: "Syndicated Metal Industries",
  legalName: "Syndicated Metal Industries Limited",
  tagline: "High-Standard Architectural Aluminium, Curtain Walls, Cladding & Interior Systems",
  overview: "Syndicated Metal Industries Limited is an ISO-certified Nigerian manufacturer and installer of European-standard architectural aluminium building products. Operating across Lagos, Abuja, and Port Harcourt, we provide advanced curtain walls, aluminium composite panel (ACP) cladding, demountable glass partitions, and specialized ceiling and flooring systems in partnership with premier European manufacturers.",
  logoLight: "/assets/real/smi-logo-white.png",
  logoDark: "/assets/real/smi-logo.png",
  whatsappNumber: "2348033169896",
  whatsappDisplay: "+234 803 316 9896",
  generalEmail: "info@syndicatedmetal.com",
  generalPhone: "+234 803 316 9896",
  locations: [
    {
      city: "Lagos",
      state: "Lagos State",
      role: "Factory Yard & Operations Headquarters",
      address: "Nigeria Railway Corporation Yard, Old Apapa Road, Beside Fire Service, Ebute-Metta, Lagos.",
      additionalAddress: "109, Tafawa Balewa Crescent, Off 22 Adeniran Ogunsanya Street, Surulere, Lagos.",
      phone: "+234 803 316 9896",
      additionalPhone: "+234 803 720 3407",
      email: "info@syndicatedmetal.com",
      openingHours: "Mon – Sat: 9:00 AM – 5:00 PM",
      isVerified: true
    },
    {
      city: "Abuja",
      state: "Federal Capital Territory",
      role: "Northern Regional Office & Technical Center",
      address: "No. 21 Harper Crescent, Wuse Zone 7, Abuja FCT, Nigeria.",
      phone: "+234 803 385 7111",
      email: "info.abuja@syndicatedmetal.com",
      openingHours: "Mon – Sat: 9:00 AM – 5:00 PM",
      isVerified: true
    },
    {
      city: "Port Harcourt",
      state: "Rivers State",
      role: "South-South Regional Fabrication & Project Unit",
      address: "23 Mini Ezekwu Street, Hillview Estate, Port Harcourt, Rivers State, Nigeria.",
      phone: "+234 806 212 4700",
      email: "info.phc@syndicatedmetal.com",
      openingHours: "Mon – Sat: 9:00 AM – 5:00 PM",
      isVerified: true
    }
  ],
  editorialNotice: "Corporate addresses, verified phone numbers, and official international technical partnerships verified from Syndicated Metal Industries records."
};

export const AFFILIATES_LIST: AffiliatePartner[] = [
  {
    id: "albond",
    name: "ALBOND",
    legalEntity: "ALBOND ALUMINIUM SANAYI VE TICARET A.S",
    country: "Turkey",
    countryFlag: "🇹🇷",
    logo: "/assets/real/albond.png",
    specialization: "Architectural Aluminium Composite Panels (ACP) & Facade Cladding",
    systemsSupplied: [
      "Fire-resistant (FR) and non-combustible A2 facade panels",
      "Exterior curtain wall spandrel panels and soffit covers",
      "High-durability PVDF multi-layer surface coatings",
      "Custom architectural canopy and fascia cladding"
    ],
    description: "ALBOND is one of Europe's premier manufacturers of composite panels. Syndicated Metal Industries partners with ALBOND to fabricate and install high-grade aluminium composite cladding on major commercial, banking, and public institutions across Nigeria.",
    standards: "ISO 9001 / EN 13501-1 Fire Classification B-s1, d0 & A2",
    website: "https://www.albond.com.tr/"
  },
  {
    id: "deko",
    name: "DEKO",
    legalEntity: "DEKO PARTITIONS LIMITED",
    country: "Denmark",
    countryFlag: "🇩🇰",
    logo: "/assets/real/deko.png",
    specialization: "Fire-Rated & Acoustic Demountable Interior Glass Partitions",
    systemsSupplied: [
      "DEKO FG fully glazed relocatable partition systems",
      "Sound-insulating double glazed acoustic meeting room screens",
      "Fire-rated glazed partition assemblies (EI30 / EI60)",
      "Minimalist aluminium profile frames with frosted privacy branding"
    ],
    description: "DEKO (Denmark) develops market-leading demountable interior glass and aluminium partition solutions. Syndicated Metal brings DEKO's Danish design minimalism and certified acoustic privacy to modern Nigerian corporate headquarters and executive boardrooms.",
    standards: "Danish Standards / ISO 140-3 Acoustic Ratings up to 53 dB / EN Fire Rated",
    website: "https://www.deko.com/"
  },
  {
    id: "meta",
    name: "META PRIVACY SOLUTIONS",
    legalEntity: "META TRENNWANDANLAGEN GmbH & Co",
    country: "Germany",
    countryFlag: "🇩🇪",
    logo: "/assets/real/meta.png",
    specialization: "High-Quality Engineered Commercial Toilet Cubicles & Sanitary Partitions",
    systemsSupplied: [
      "Heavy-duty solid grade laminate (HPL) waterproof cubicle systems",
      "Anodized aluminium post and hinge architectural hardware",
      "Vandal-resistant and moisture-impervious privacy partitions",
      "Modular changing room cubicles and executive lockers"
    ],
    description: "META (Germany) is an internationally acknowledged manufacturer of durable sanitary partition systems. Syndicated Metal provides supply and precision installation of META cubicles for high-traffic airports, commercial malls, corporate banks, and hotels throughout Nigeria.",
    standards: "TÜV Certified / DIN EN ISO 9001 / 100% Water Resistant Solid Grade Laminate",
    website: "https://www.meta.de/"
  },
  {
    id: "owa",
    name: "OWA (OWAcustic)",
    legalEntity: "ODENWALD FASERPLATTENWERK GmbH",
    country: "Germany",
    countryFlag: "🇩🇪",
    logo: "/assets/real/owa-logo.png",
    specialization: "High-Quality Acoustic Suspended Ceiling Systems",
    systemsSupplied: [
      "OWAcustic premium mineral wool acoustic ceiling tiles",
      "Fire-protective suspended ceiling grid frameworks",
      "Hygienic and clean-room antibacterial ceiling panels",
      "Architectural metal mesh and linear canopy acoustic baffles"
    ],
    description: "OWA (Germany) has set international benchmarks for acoustic ceilings. Syndicated Metal Industries installs OWA suspended ceiling systems to guarantee sound absorption, fire resistance, and humidity stability in Nigerian institutional and commercial interiors.",
    standards: "CE Mark / ISO 9001 / EN 13964 Suspended Ceilings / Green Building Compliant",
    website: "https://www.owa-ceilings.com/"
  },
  {
    id: "saint-gobain",
    name: "SAINT-GOBAIN GLASS",
    legalEntity: "SAINT GOBAIN GLASS (SSG)",
    country: "France",
    countryFlag: "🇫🇷",
    logo: "/assets/real/saint-gobain.png",
    specialization: "Solar Controlled Cool-Lite & High-Performance Architectural Glazing",
    systemsSupplied: [
      "Cool-Lite ST and SKN solar-control reflective glass",
      "Double glazed Insulated Glass Units (IGU) with argon filling",
      "Structural laminated safety and acoustic barrier glass",
      "Low-E heat insulation glass for tropical energy savings"
    ],
    description: "Saint-Gobain Glass is the global pioneer in advanced architectural glass. In Nigeria's tropical climate, Syndicated Metal utilizes genuine Saint-Gobain Cool-Lite glass in curtain wall installations to slash solar heat penetration while providing exceptional luminous transparency.",
    standards: "EN 1279 Insulated Units / EN 12150 Toughened / Solar Factor g-values down to 0.28",
    website: "https://www.saint-gobain-glass.com/"
  },
  {
    id: "schuco",
    name: "SCHÜCO",
    legalEntity: "SCHÜCO INTERNATIONAL KG",
    country: "Germany",
    countryFlag: "🇩🇪",
    logo: "/assets/real/schuco.png",
    specialization: "Precision Aluminium Facades, Curtain Walls, Windows & Doors",
    systemsSupplied: [
      "Schüco FWS 50 / FWS 60 structural curtain wall systems",
      "Thermally engineered aluminium entrance and sliding doors",
      "Concealed top-hung and projected window vents",
      "Heavy-duty stainless steel fittings, rollers, and multi-point locks"
    ],
    description: "Schüco is the premier global authority in precision aluminium building envelopes. Syndicated Metal manufactures and anchors EU-standard structural curtain walls and window solutions utilizing Schüco profile geometries and engineering standards.",
    standards: "German Quality Standard / EN 13830 Curtain Walling / Wind Resistance Class CWCT",
    website: "https://www.schueco.com/"
  },
  {
    id: "lindner",
    name: "LINDNER SE",
    legalEntity: "LINDNER GROUP SE",
    country: "Germany",
    countryFlag: "🇩🇪",
    logo: "/assets/real/schuco.png", // German engineering partner in catalog
    specialization: "Modular Heavy-Duty Raised Access Floors & Underfloor Service Plenums",
    systemsSupplied: [
      "NORTEC calcium sulphate high-load floor panels",
      "Heavy-duty galvanized steel support pedestals and stringers",
      "Acoustic and antistatic raised flooring for corporate data centers",
      "Cable and underfloor HVAC plenum distribution infrastructure"
    ],
    description: "Lindner SE is Europe's leading specialist in interior fit-out and raised floor systems. Syndicated Metal supplies and installs certified Lindner raised floor solutions for high-spec corporate offices and banking halls across Nigeria.",
    standards: "EN 12825 Raised Access Floors / Class 1-6 Load Capabilities / German DIN Standards",
    website: "https://www.lindner-group.com/"
  }
];

export interface RealProject {
  id: string;
  title: string;
  state: string;
  locationLabel: string;
  category: 'curtain-walls' | 'windows-doors' | 'acp-cladding' | 'interior-partitions' | 'raised-floors';
  categoryLabel: string;
  clientPartner: string;
  description: string;
  specifications: string[];
  image: string;
  isCompletedWork: boolean;
}

export const REAL_PROJECTS_LIST: RealProject[] = [
  {
    id: "proj-anambra-windows",
    title: "EU Standard Special Windows with Top Fixed Light & Semi-Automatic Flyscreen",
    state: "Anambra",
    locationLabel: "Anambra State, Nigeria",
    category: "windows-doors",
    categoryLabel: "Aluminium Windows",
    clientPartner: "Private Institutional / Residential Development",
    description: "Precision-engineered EU standard architectural aluminium windows with top fixed transoms and integrated semi-automatic insect screens for tropical natural ventilation and weather tightness.",
    specifications: [
      "Architectural aluminium profile with durable electro-colour finish",
      "Top fixed daylight transom with lower opening sash",
      "Concealed semi-automatic retractable insect flyscreen",
      "Perimeter EPDM compression gaskets for driving rain protection"
    ],
    image: "/assets/real/project-anambra-windows.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-abuja-curtain-wall",
    title: "EU Standard Frameless Aluminium Structural Curtain Wall",
    state: "Abuja FCT",
    locationLabel: "Abuja FCT, Nigeria",
    category: "curtain-walls",
    categoryLabel: "Curtain Walling",
    clientPartner: "Commercial Headquarters with Saint-Gobain Solar Controlled Cool-Lite Glass",
    description: "Full-height structural frameless aluminium curtain wall facade engineered with Saint-Gobain Cool-Lite solar-reflective solar-control glazing for high energy efficiency and thermal deflection under intense Abuja sunlight.",
    specifications: [
      "Structural aluminium box mullions and transoms with concealed anchors",
      "Saint-Gobain Cool-Lite solar-control reflective safety glass",
      "Silicone structural glazing with UV-resistant neutral-cure sealants",
      "Engineered floor-slab expansion joints for building thermal movement"
    ],
    image: "/assets/real/project-abuja-curtain-wall.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-edo-curved-curtain-wall",
    title: "EU Standard Curved Structural Curtain Wall Facade",
    state: "Edo",
    locationLabel: "Edo State, Nigeria",
    category: "curtain-walls",
    categoryLabel: "Curtain Walling",
    clientPartner: "Institutional & Commercial Building with Saint-Gobain Cool-Lite Glazing",
    description: "Complex curved structural curtain wall installation featuring custom faceted mullions, continuous radial geometry, and Saint-Gobain Cool-Lite reflective glass.",
    specifications: [
      "Engineered faceted radial aluminium framing geometry",
      "Saint-Gobain high-performance reflective solar glass panels",
      "Custom anodized mullion cap profiles for modern exterior styling",
      "High wind-load structural anchoring tested for monsoon gusts"
    ],
    image: "/assets/real/project-edo-curved-wall.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-bayelsa-semi-frameless",
    title: "EU Standard Semi-Frameless Aluminium Structural Curtain Wall",
    state: "Bayelsa",
    locationLabel: "Bayelsa State, Niger Delta, Nigeria",
    category: "curtain-walls",
    categoryLabel: "Curtain Walling",
    clientPartner: "Regional Corporate Complex with Projected Window Vents",
    description: "Semi-frameless architectural aluminium curtain wall system with integrated concealed top-hung opening window vents and Saint-Gobain solar-control glass, built to withstand coastal Niger Delta rainfall and salinity.",
    specifications: [
      "Semi-frameless structural curtain wall with slim vertical sightlines",
      "Concealed exterior projected top-hung ventilation vents",
      "Heavy corrosion-resistant anodized aluminium alloy profiles",
      "Continuous silicone perimeter weather-proofing"
    ],
    image: "/assets/real/project-bayelsa-curtain-wall.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-abuja-acp-cladding",
    title: "Aluminium Composite Panel (ACP) Commercial Facade Cladding",
    state: "Abuja FCT",
    locationLabel: "Abuja FCT, Nigeria",
    category: "acp-cladding",
    categoryLabel: "Aluminium Cladding",
    clientPartner: "Albond Composite Panel Facade & Canopy Cladding",
    description: "Supply and precision installation of Albond architectural aluminium composite panels (ACP) across multistory building facades, column casings, and entrance portico soffits.",
    specifications: [
      "Albond fire-retardant aluminium composite panels (ACP)",
      "Multi-coat PVDF metallic silver exterior finish",
      "Rainscreen sub-frame ventilated installation system",
      "Precision routed groove joints and weather-sealed expansions"
    ],
    image: "/assets/real/project-abuja-cladding.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-industrial-cladding",
    title: "Commercial & Industrial Aluminium Cladding Systems",
    state: "Industrial",
    locationLabel: "Industrial Facility Cladding, Nigeria",
    category: "acp-cladding",
    categoryLabel: "Aluminium Cladding",
    clientPartner: "Industrial Complex Facade & Parapet Envelopes",
    description: "Comprehensive external protective cladding system engineered for industrial complexes, incorporating weather-resistant composite fascias, roofline trims, and high-impact column surrounds.",
    specifications: [
      "Heavy-duty exterior aluminium cladding panel arrays",
      "Sub-frame galvanized steel anchorage to reinforced concrete",
      "Architectural horizontal shadow gaps with EPDM backer seals",
      "UV and industrial atmospheric pollution resistant coatings"
    ],
    image: "/assets/real/project-industrial-cladding.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-delta-curtain-wall",
    title: "Structural Curtain Wall with Projected Window Vents",
    state: "Delta",
    locationLabel: "Delta State, Nigeria",
    category: "curtain-walls",
    categoryLabel: "Curtain Walling",
    clientPartner: "Corporate Oil & Gas Regional Facility",
    description: "High-spec commercial curtain wall envelope with custom projected sashes allowing natural air circulation without compromising exterior facade continuity.",
    specifications: [
      "Structural aluminium framing with integrated friction-stay vents",
      "Solar control double glazed laminated safety glass",
      "Stainless steel heavy-duty project-out hardware",
      "Engineered drainage weep holes for tropical monsoon rain"
    ],
    image: "/assets/real/project-bayelsa-curtain-wall.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-deko-frosted-partitions",
    title: "DEKO Aluminium Framed Glass Partition with Acid Frosting",
    state: "Lagos",
    locationLabel: "Corporate Headquarters, Lagos, Nigeria",
    category: "interior-partitions",
    categoryLabel: "Demountable Partitions",
    clientPartner: "Corporate Financial Services & Bank Boardroom (DEKO Denmark System)",
    description: "High-end DEKO demountable acoustic glass partition system featuring slimline black powder-coated aluminium frames and custom acid-frosted decorative privacy bands.",
    specifications: [
      "DEKO (Denmark) aluminium framed demountable partition system",
      "10mm toughened acoustic security glass",
      "Custom horizontal frosted privacy manifestation",
      "Acoustic perimeter drop seals on aluminium framed glass doors"
    ],
    image: "/assets/real/project-deko-frosted.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-deko-clear-partitions",
    title: "DEKO Minimalist Aluminium Framed Glass Partitions",
    state: "Lagos",
    locationLabel: "Executive Office Suite, Lagos, Nigeria",
    category: "interior-partitions",
    categoryLabel: "Demountable Partitions",
    clientPartner: "Corporate Offices (DEKO Relocatable System)",
    description: "Minimalist floor-to-ceiling interior glass walls providing maximum natural daylight penetration, clean spatial division, and flexible future office re-configuration.",
    specifications: [
      "Fully relocatable Danish DEKO aluminium framework",
      "Flush glazed junctions with clear dry joints",
      "Heavy-duty anodized aluminium pivot hinges and magnetic latches",
      "Acoustic sound reduction compliant with European commercial standards"
    ],
    image: "/assets/real/project-deko-clear.jpg",
    isCompletedWork: true
  },
  {
    id: "proj-lindner-raised-floor",
    title: "Lindner Heavy-Duty Raised Access Floor Systems",
    state: "Lagos",
    locationLabel: "Commercial Banking & Corporate Center, Lagos, Nigeria",
    category: "raised-floors",
    categoryLabel: "Raised Access Floors",
    clientPartner: "Lindner SE (Germany) Corporate Installation",
    description: "European-certified modular raised access floor system providing flexible underfloor distribution for electrical cabling, fiber optics, and air management.",
    specifications: [
      "Lindner (Germany) calcium sulphate / steel-encased modular panels",
      "Adjustable galvanized steel pedestals and perimeter stringers",
      "Point-load and distributed load compliance for corporate server rooms",
      "Antistatic and sound-decoupling floor finishes"
    ],
    image: "/assets/real/project-lindner-floor.jpg",
    isCompletedWork: true
  }
];

export interface ProductItem {
  id: string;
  name: string;
  category: 'doors' | 'windows' | 'glazing' | 'custom' | 'interior';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  isImagePlaceholder: boolean;
  partnerBrand?: string;
  specs: {
    standardFinishes: string[];
    glassOptions: string[];
    typicalDimensions: string;
    framingSystem: string;
    hardwareOptions: string[];
    recommendedUseCases: string[];
    leadTimeGuide: string;
  };
}

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: "curtain-wall-facades",
    name: "Structural Curtain Wall & Facade Systems",
    category: "glazing",
    categoryLabel: "Curtain Walls",
    partnerBrand: "Schüco & Saint-Gobain",
    subtitle: "Frameless, semi-frameless, and curved structural aluminium curtain walling",
    description: "Engineered aluminium mullions and transoms designed to support expansive glazed building envelopes with genuine Saint-Gobain Cool-Lite solar-reflective double glazing. Custom-anchored to floor slabs to carry extreme wind loads while delivering world-class architectural elegance.",
    image: "/assets/real/project-abuja-curtain-wall.jpg",
    isImagePlaceholder: false,
    specs: {
      standardFinishes: ["PVDF Architectural Finish", "Anodized Dark Bronze", "Charcoal Gray 7016", "Matte Black 9005"],
      glassOptions: ["Saint-Gobain Cool-Lite Solar-Control Double Glazing", "Reflective Low-E Insulated Units", "Acoustic Laminated Safety Glass"],
      typicalDimensions: "Engineered per structural floor-to-floor height (typically 3.3m – 4.5m spans)",
      framingSystem: "Schüco-geometry heavy structural aluminium box mullions with external pressure plates and beauty caps",
      hardwareOptions: ["Integrated top-hung concealed opening vents", "Stainless steel anchor brackets and expansion bolts"],
      recommendedUseCases: ["Corporate headquarters", "Commercial plazas & bank branches", "Hotel atriums", "Public institutional buildings"],
      leadTimeGuide: "Project-specific engineered timeline following site survey"
    }
  },
  {
    id: "acp-cladding-systems",
    name: "ALBOND Aluminium Composite Panel (ACP) Cladding",
    category: "custom",
    categoryLabel: "Cladding & Facades",
    partnerBrand: "ALBOND (Turkey)",
    subtitle: "Fire-rated architectural aluminium composite facade and soffit paneling",
    description: "Official Nigerian partner for ALBOND (Turkey). High-performance aluminium composite panels for modern exterior facades, column wraps, portico canopies, and architectural building accents.",
    image: "/assets/real/project-abuja-cladding.jpg",
    isImagePlaceholder: false,
    specs: {
      standardFinishes: ["Metallic Silver", "Matte Charcoal", "Champagne Metallic", "Custom Architectural RAL"],
      glassOptions: ["Solid composite panel system (paired with structural glazing)"],
      typicalDimensions: "Panel modules up to 1500mm × 4000mm fabricated to drawing",
      framingSystem: "Extruded aluminium hanging rails with thermal-expansion fasteners",
      hardwareOptions: ["Concealed rivet attachment", "EPDM gaskets and weather silicone joints"],
      recommendedUseCases: ["Commercial building facades", "Canopy soffits and fascia wraps", "Automotive showrooms", "Retail bank branches"],
      leadTimeGuide: "10–20 working days post-measurement"
    }
  },
  {
    id: "deko-glass-partitions",
    name: "DEKO Demountable Acoustic Glass Office Partitions",
    category: "interior",
    categoryLabel: "Interior Partitions",
    partnerBrand: "DEKO (Denmark)",
    subtitle: "Danish-engineered acoustic relocatable glass partitions & boardroom systems",
    description: "Official partnership with DEKO Partitions Limited (Denmark). Minimalist aluminium profile frames, floor-to-ceiling clear or frosted acoustic safety glass, and fully demountable modular systems for contemporary Nigerian corporate spaces.",
    image: "/assets/real/project-deko-frosted.jpg",
    isImagePlaceholder: false,
    specs: {
      standardFinishes: ["Matte Black Powder-Coat", "Anodized Natural Silver", "Brushed Stainless Look"],
      glassOptions: ["10mm / 12mm Toughened Glass", "Acoustic Double Glazing (up to 53dB)", "Custom Frosted Privacy Manifestation"],
      typicalDimensions: "Ceiling heights up to 3300mm; modular panel widths to suit grid",
      framingSystem: "DEKO patented slimline aluminium top/base track and dry joint system",
      hardwareOptions: ["Drop seals for acoustic isolation", "Aluminium framed glass swing doors", "Magnetic smart-latch handles"],
      recommendedUseCases: ["Corporate headquarters", "Executive boardrooms", "Banking consultation suites", "Legal and financial firms"],
      leadTimeGuide: "14–21 working days"
    }
  },
  {
    id: "aluminium-special-windows",
    name: "EU Standard Special Windows with Semi-Automatic Flyscreen",
    category: "windows",
    categoryLabel: "Aluminium Windows",
    partnerBrand: "European Standard Profiles",
    subtitle: "Side-hung and projected casement windows with integrated insect screens",
    description: "Manufactured for Nigerian residential and commercial climates. Features top fixed daylight transoms, multi-point locking compression gaskets, and smooth semi-automatic retractable insect flyscreens for insect-free tropical ventilation.",
    image: "/assets/real/project-anambra-windows.jpg",
    isImagePlaceholder: false,
    specs: {
      standardFinishes: ["Electro-colour Bronze", "Matte Charcoal Black", "Pure White", "Anodized Silver"],
      glassOptions: ["6mm Toughened Glass", "Saint-Gobain Solar Tinted Glass", "Double Glazed Acoustic Units"],
      typicalDimensions: "Configurable sash sizes from 600mm to 1800mm width",
      framingSystem: "European standard extruded aluminium profile with dedicated weep-holes and condensation channels",
      hardwareOptions: ["Stainless steel friction stays", "Multi-point shootbolt locking handles", "Integrated semi-automatic retractable insect flyscreens"],
      recommendedUseCases: ["Private residences and luxury villas", "Corporate offices", "Educational and medical facilities"],
      leadTimeGuide: "7–14 working days"
    }
  },
  {
    id: "lindner-raised-floors",
    name: "Lindner Heavy-Duty Modular Raised Access Floors",
    category: "interior",
    categoryLabel: "Raised Access Floors",
    partnerBrand: "Lindner SE (Germany)",
    subtitle: "German-manufactured modular access floor systems for corporate infrastructure",
    description: "Official supplier and installer of Lindner Group SE (Germany) raised access floors. Essential for modern corporate offices, bank trading floors, and server rooms requiring underfloor electrical, data cabling, and HVAC plenum airflow.",
    image: "/assets/real/project-lindner-floor.jpg",
    isImagePlaceholder: false,
    specs: {
      standardFinishes: ["Bare finish for carpet overlay", "High-pressure laminate (HPL)", "Antistatic vinyl"],
      glassOptions: ["N/A - Solid calcium sulphate or steel-encased modular panels"],
      typicalDimensions: "600mm × 600mm standard modular panel size",
      framingSystem: "Galvanized steel adjustable pedestals with acoustic rubber gaskets and perimeter stringers",
      hardwareOptions: ["Floor grommets and cable outlet boxes", "Integrated step and ramp assemblies", "Underfloor fire barrier wraps"],
      recommendedUseCases: ["Corporate headquarters", "Bank branches and trading floors", "Data centers and server rooms"],
      leadTimeGuide: "Project-specific timeline"
    }
  },
  {
    id: "meta-toilet-cubicles",
    name: "META High-Quality Commercial Toilet Cubicles",
    category: "interior",
    categoryLabel: "Sanitary Partitions",
    partnerBrand: "META (Germany)",
    subtitle: "German-engineered waterproof solid-grade laminate sanitary cubicles",
    description: "Official partnership with META Trennwandanlagen GmbH & Co (Germany). Heavy-duty waterproof HPL toilet cubicles and privacy dividers built for commercial malls, airports, offices, and hotel facilities across Nigeria.",
    image: "/assets/real/meta.png",
    isImagePlaceholder: false,
    specs: {
      standardFinishes: ["Solid Color HPL (White, Grey, Charcoal, Blue)", "Textured Woodgrain", "Stainless Steel Fittings"],
      glassOptions: ["N/A - 13mm Solid Core High-Pressure Laminate (100% water resistant)"],
      typicalDimensions: "Standard 2000mm height with adjustable 150mm ground clearance legs",
      framingSystem: "Anodized aluminium stabilizing top rails and corner wall channels",
      hardwareOptions: ["Nylon/stainless steel self-closing gravity hinges", "Emergency release occupancy indicator locks", "Heavy-duty coat hooks with rubber buffers"],
      recommendedUseCases: ["Commercial shopping malls", "International airports", "Corporate office washrooms", "Hotels and sports complexes"],
      leadTimeGuide: "14–20 working days"
    }
  }
];

export interface ServiceItem {
  id: string;
  stepNumber: string;
  title: string;
  shortSummary: string;
  description: string;
  deliverables: string[];
  customerNextStep: string;
  partnerBrand?: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "curtain-wall-fabrication",
    stepNumber: "01",
    title: "Fabrication & Installation of Aluminium Doors, Windows & Curtain Walls",
    shortSummary: "EU standard structural framing with Schüco systems and Saint-Gobain glazing.",
    description: "We manufacture, assemble, and anchor high-performance aluminium window systems, entrance doors, and multi-storey curtain wall facades engineered to resist tropical wind storms, heavy seasonal rain, and coastal corrosion in Lagos and Port Harcourt.",
    deliverables: ["Structural wind-load engineering", "Precision extrusion cutting & crimping", "Saint-Gobain solar-control glazing setting", "Perimeter weather-tight silicone sealing"],
    customerNextStep: "Provide architectural elevation drawings and window schedules for schedule review.",
    partnerBrand: "Schüco & Saint-Gobain"
  },
  {
    id: "acp-cladding",
    stepNumber: "02",
    title: "Aluminium Composite Panel (ACP) Cladding",
    shortSummary: "Official Albond (Turkey) architectural cladding for feature walls and canopies.",
    description: "Precision CNC routing, grooving, and installation of fire-rated Albond aluminium composite panels across commercial facades, soffits, column encasements, sun blades, and entrance canopies.",
    deliverables: ["Ventilated rainscreen substructure", "Routed and folded ACP panel cassettes", "Thermal expansion joint seals", "Durable PVDF finish warranty"],
    customerNextStep: "Share building facade dimensions or coordinate with our site measurement team.",
    partnerBrand: "ALBOND (Turkey)"
  },
  {
    id: "demountable-partitions",
    stepNumber: "03",
    title: "Fire & Non-Fire Rated Demountable Glass Partitions",
    shortSummary: "Official DEKO (Denmark) relocatable acoustic glass office dividers.",
    description: "Supply and installation of Danish DEKO glass and aluminium partitions. Creates light-filled, acoustically confidential meeting spaces, executive offices, and boardrooms with demountable relocation flexibility.",
    deliverables: ["Acoustic certification up to 53dB", "Concealed slimline profile frames", "Custom frosted glass privacy graphics", "Integral acoustic drop-seal doors"],
    customerNextStep: "Share office interior space plans and required acoustic or fire-rating parameters.",
    partnerBrand: "DEKO (Denmark)"
  },
  {
    id: "toilet-cubicles",
    stepNumber: "04",
    title: "High-Quality Commercial Toilet Cubicles from META",
    shortSummary: "German-engineered waterproof solid-grade laminate cubicles.",
    description: "Official installation of META (Germany) sanitary cubicle systems. Made from impervious 13mm solid high-pressure laminate with heavy-duty anodized aluminium and stainless hardware for high-traffic environments.",
    deliverables: ["100% water and rot-resistant panels", "Vandal-resistant safety hinges and locks", "Custom panel colour schemes", "Clean sanitary installation"],
    customerNextStep: "Send washroom plumbing layout and cubicle divider dimensions.",
    partnerBrand: "META (Germany)"
  },
  {
    id: "suspended-ceilings",
    stepNumber: "05",
    title: "High-Quality Acoustic Suspended Ceilings from OWA (Germany)",
    shortSummary: "OWAcustic mineral tile and architectural metal ceiling grids.",
    description: "Supply and installation of certified OWA suspended ceiling systems. Delivers acoustic reverberation control, thermal insulation, and fire-resistant grid support for commercial buildings.",
    deliverables: ["Acoustic sound absorption tiles", "Galvanized steel suspended grid framing", "Cleanroom and moisture-resistant tile options", "Integrated lighting and HVAC diffuser cutouts"],
    customerNextStep: "Provide ceiling plans, lighting positions, and room acoustic goals.",
    partnerBrand: "OWA (Germany)"
  },
  {
    id: "raised-floors",
    stepNumber: "06",
    title: "High-Quality Modular Raised Access Floors from Lindner (Germany)",
    shortSummary: "Heavy-duty modular access floors for corporate and data infrastructure.",
    description: "Certified supply and leveling of Lindner SE (Germany) calcium sulphate raised access floors, creating accessible underfloor voids for high-density power, data, and cooling distribution.",
    deliverables: ["Calibrated adjustable floor pedestals", "Heavy-load calcium sulphate floor panels", "Ramp and step transitions", "Antistatic and acoustic finishes"],
    customerNextStep: "Specify required finished floor height (FFH) and server/office floor loading requirements.",
    partnerBrand: "Lindner SE (Germany)"
  }
];
