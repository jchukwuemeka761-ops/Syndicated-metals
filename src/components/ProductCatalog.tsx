import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_CATALOG, ProductItem } from '../data/companyConfig.ts';
import { ProductDetailModal } from './ProductDetailModal.tsx';

interface ProductCatalogProps {
  onSelectForQuote: (product: ProductItem, finish?: string, glass?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'doors', label: 'Aluminium Doors' },
    { id: 'windows', label: 'Aluminium Windows' },
    { id: 'glazing', label: 'Curtain Walls & Glazing' },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenSpecs = (product: ProductItem) => {
    setActiveModalProduct(product);
  };

  const handleModalQuote = (product: ProductItem, finish: string, glass: string) => {
    setActiveModalProduct(null);
    onSelectForQuote(product, finish, glass);
  };

  return (
    <section id="products-catalog" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Architectural Product Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Precision Aluminium Doors, Windows & Glazing Profiles
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
            Fabricated to exact project dimensions using architectural-grade aluminium extrusions. Each assembly is designed for tropical weather resistance, smooth operation, and structural stability.
          </p>
        </div>

        {/* Filter and Search Bar adhering to Zero-Pill discipline */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          
          {/* Functional segmented category filter */}
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

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or specs..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting your search query or selecting another category.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {product.categoryLabel}
                  </div>
                  <button
                    onClick={() => handleOpenSpecs(product)}
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-700 rounded-lg shadow-xs hover:shadow transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                    title="View Technical Specs"
                    aria-label={`View technical specifications for ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-amber-800 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 leading-snug">
                      {product.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Finishes Preview & Specs Indicator */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Available Finishes:</span>
                      <span className="font-medium text-slate-700">{product.specs.standardFinishes.length} options</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.specs.standardFinishes.slice(0, 3).map((f, i) => (
                        <span key={i} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                      {product.specs.standardFinishes.length > 3 && (
                        <span className="text-[10px] text-slate-400 py-0.5 px-1">
                          +{product.specs.standardFinishes.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectForQuote(product)}
                      aria-label={`Ask about ${product.name}`}
                      className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600"
                    >
                      <span>Ask About This</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleOpenSpecs(product)}
                      aria-label={`View specifications for ${product.name}`}
                      className="py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-600"
                    >
                      Specifications
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Custom requirements callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 font-display">Need a custom extrusion profile or project schedule?</h4>
            <p className="text-xs text-slate-600">
              We fabricate bespoke opening dimensions, custom powder-coat RAL colors, and specialized commercial structural glazing systems.
            </p>
          </div>
          <button
            onClick={() => onSelectForQuote(PRODUCTS_CATALOG[0])}
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Submit Custom Window & Door Schedule
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onSelectForQuote={handleModalQuote}
      />
    </section>
  );
};
