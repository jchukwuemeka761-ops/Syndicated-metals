import React, { useState } from 'react';
import { Eye, MapPin, X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { REAL_PROJECTS_LIST, RealProject } from '../data/companyConfig.ts';

interface ProjectsGalleryProps {
  onRequestQuote: () => void;
  onSelectProjectForInquiry?: (project: RealProject) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onRequestQuote,
  onSelectProjectForInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<RealProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'curtain-walls', label: 'Curtain Walls & Facades' },
    { id: 'windows-doors', label: 'Aluminium Windows & Doors' },
    { id: 'acp-cladding', label: 'ACP Cladding' },
    { id: 'interior-partitions', label: 'DEKO Glass Partitions' },
    { id: 'raised-floors', label: 'Lindner Raised Floors' },
  ];

  const states = [
    { id: 'all', label: 'All Locations' },
    { id: 'Lagos', label: 'Lagos' },
    { id: 'Abuja FCT', label: 'Abuja FCT' },
    { id: 'Anambra', label: 'Anambra' },
    { id: 'Edo', label: 'Edo' },
    { id: 'Bayelsa', label: 'Bayelsa' },
    { id: 'Delta', label: 'Delta' },
  ];

  const filteredProjects = REAL_PROJECTS_LIST.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesState = selectedState === 'all' || p.state === selectedState;
    return matchesCategory && matchesState;
  });

  const handleInquireProject = (project: RealProject) => {
    setActiveProject(null);
    if (onSelectProjectForInquiry) {
      onSelectProjectForInquiry(project);
    } else {
      onRequestQuote();
    }
  };

  return (
    <section id="projects-gallery" className="py-16 lg:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Completed Project Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Projects Handled by Syndicated Metal Industries
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
            Verified architectural installations delivered across Lagos, Abuja FCT, Edo, Bayelsa, Anambra, and Delta States. Highlighting European-standard curtain walls, Albond ACP cladding, DEKO glass partitions, and Saint-Gobain solar-reflective glazing.
          </p>
        </div>

        {/* Filters Bar adhering to zero-pill discipline */}
        <div className="space-y-4 mb-10 pb-6 border-b border-slate-200/80">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Regional Location Filter */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="font-semibold text-slate-500 mr-1">Filter by State:</span>
            {states.map((st) => (
              <button
                key={st.id}
                onClick={() => setSelectedState(st.id)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  selectedState === st.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            Showing <strong className="text-slate-800 font-semibold">{filteredProjects.length}</strong> verified installation showcases
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.locationLabel}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">
                    {project.clientPartner}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-amber-800 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600"
                  aria-label={`Inspect ${project.title}`}
                >
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>Inspect Project</span>
                </button>
                <button
                  onClick={() => handleInquireProject(project)}
                  className="py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Inquire about this specification"
                >
                  Quote Similar
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Major Corporate Clients Section */}
        <div className="mt-16 p-8 bg-slate-900 text-white rounded-2xl shadow-xl space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              Trusted By Nigeria's Foremost Organizations
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Commercial, Banking & Energy Sector Track Record
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Syndicated Metal Industries Limited has executed facade, cladding, and demountable partitioning projects for major financial and industrial leaders across Nigeria:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
            {[
              { name: "Central Bank of Nigeria", sub: "CBN Projects" },
              { name: "Citibank Nigeria", sub: "Corporate Branches" },
              { name: "Chevron Nigeria", sub: "Offices & Facilities" },
              { name: "Julius Berger PLC", sub: "Infrastructure Contracts" },
              { name: "Nigeria LNG (NLNG)", sub: "Bonny Island Projects" },
              { name: "Delta State Government", sub: "Public Sector Buildings" }
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <div className="text-sm font-bold text-slate-100 font-display">{c.name}</div>
                <div className="text-[10px] text-amber-400 font-medium">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Lightbox & Specification Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200">
            <div className="relative aspect-[16/9] bg-slate-900">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/70 hover:bg-slate-950 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                  {activeProject.categoryLabel}
                </div>
                <h3 className="text-xl font-bold font-display">{activeProject.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="font-semibold text-slate-800">{activeProject.locationLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-500">{activeProject.clientPartner}</span>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed">
                {activeProject.description}
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Engineering & Architectural Specifications:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeProject.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close View
                </button>
                <button
                  onClick={() => handleInquireProject(activeProject)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request Quotation for Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
