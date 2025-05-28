import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProviderCard from '../components/ProviderCard';
import { providers } from '../data/providers';
import { ChevronDown } from 'lucide-react';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [showSpecialties, setShowSpecialties] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const specialties = [
    'Acupuncture',
    'Ayurveda',
    'Chiropractic',
    'Naturopathy',
    'Functional Medicine',
    'Integrative Medicine',
    'Traditional Chinese Medicine (TCM)',
    'Herbal Medicine',
    'Homeopathy',
    'Osteopathy',
    'Massage Therapy',
    'Physical Therapy',
    'Energy Healing',
    'Reflexology',
    'Aromatherapy',
    'Reiki',
    'Craniosacral Therapy',
    'Biofeedback',
    'Breathwork',
    'Sound Healing',
    'Cupping Therapy',
    'Hypnotherapy',
    'Meditation Coaching',
    'Yoga Therapy',
    'Nutrition Counseling',
    'Holistic Dentistry',
    'Mind-Body Therapy',
    'Life Coaching',
    'Art Therapy',
    'Somatic Therapy',
    'Manual Lymphatic Drainage',
    'Rolfing',
    'Myofascial Release',
    'Colon Hydrotherapy',
    'IV Nutrient Therapy',
    'Hormone Balancing Therapy'
  ].sort();

  const categories = [
    'Natural',
    'Environmental',
    'Mind-Body',
    'Energetic',
    'Manual / Physical',
    'Nutritional',
    'Lifestyle-Based',
    'Traditional / Ancestral',
    'Integrative / Whole-Person',
    'Movement-Based',
    'Preventive',
    'Detoxification',
    'Mental / Emotional',
    'Spiritual',
    'Technological',
    'Expressive / Creative',
    'Alternative'
  ].sort();

  useEffect(() => {
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      const filtered = providers.filter(provider => {
        const matchesQuery = 
          provider.name.toLowerCase().includes(lowerQuery) ||
          provider.specialty.toLowerCase().includes(lowerQuery) ||
          provider.location.toLowerCase().includes(lowerQuery) ||
          provider.summary.toLowerCase().includes(lowerQuery);
          
        const matchesSpecialty = 
          selectedSpecialties.length === 0 || 
          selectedSpecialties.includes(provider.specialty);

        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.some(category => 
            provider.tags?.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
          );
          
        return matchesQuery && matchesSpecialty && matchesCategory;
      });
      setFilteredProviders(filtered);
    } else {
      let filtered = providers;
      if (selectedSpecialties.length > 0) {
        filtered = filtered.filter(p => selectedSpecialties.includes(p.specialty));
      }
      if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => 
          selectedCategories.some(category => 
            p.tags?.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
          )
        );
      }
      setFilteredProviders(filtered);
    }
  }, [searchQuery, selectedSpecialties, selectedCategories]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.filter-dropdown')) {
        setShowSpecialties(false);
        setShowCategories(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <SearchBar initialQuery={searchQuery} onSearch={handleSearch} />
      </div>

      {/* Filter Dropdowns */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        {/* Specialties Dropdown */}
        <div className="relative filter-dropdown">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowSpecialties(!showSpecialties);
              setShowCategories(false);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            <span>Specialties</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showSpecialties ? 'rotate-180' : ''}`} />
            {selectedSpecialties.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-sm">
                {selectedSpecialties.length}
              </span>
            )}
          </button>

          {showSpecialties && (
            <div className="absolute z-20 mt-2 w-72 bg-white rounded-lg shadow-lg max-h-[60vh] overflow-y-auto">
              <div className="p-4 space-y-1">
                {specialties.map((specialty, index) => (
                  <label key={index} className="flex items-center py-2 hover:bg-gray-50 cursor-pointer px-2 rounded">
                    <input 
                      type="checkbox" 
                      className="rounded text-blue-600 focus:ring-blue-500"
                      checked={selectedSpecialties.includes(specialty)}
                      onChange={() => toggleSpecialty(specialty)}
                    />
                    <span className="ml-2 text-gray-700">{specialty}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Categories Dropdown */}
        <div className="relative filter-dropdown">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCategories(!showCategories);
              setShowSpecialties(false);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            <span>Categories</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
            {selectedCategories.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-sm">
                {selectedCategories.length}
              </span>
            )}
          </button>

          {showCategories && (
            <div className="absolute z-20 mt-2 w-72 bg-white rounded-lg shadow-lg max-h-[60vh] overflow-y-auto">
              <div className="p-4 space-y-1">
                {categories.map((category, index) => (
                  <label key={index} className="flex items-center py-2 hover:bg-gray-50 cursor-pointer px-2 rounded">
                    <input 
                      type="checkbox" 
                      className="rounded text-blue-600 focus:ring-blue-500"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Results Area */}
      <div>
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {filteredProviders.length} {filteredProviders.length === 1 ? 'Provider' : 'Providers'} Found
          </h1>
          <div className="text-sm text-gray-500">
            Sort by: 
            <select className="ml-2 border-0 focus:ring-0 text-gray-500 bg-transparent">
              <option>Relevance</option>
              <option>Rating</option>
              <option>Distance</option>
            </select>
          </div>
        </div>
        
        {filteredProviders.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProviders.map(provider => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No providers found matching your criteria.</p>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;