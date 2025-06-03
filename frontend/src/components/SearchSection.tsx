import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SearchBar from './SearchBar';
import ProviderCard from './ProviderCard';
import { providers } from '../data/providers';

interface SearchSectionProps {
    showFilters?: boolean;
    showResults?: boolean;
    isHero?: boolean;
}

const specialties = [
    'Acupuncture', 'Ayurveda', 'Chiropractic', 'Naturopathy', 'Functional Medicine',
    'Integrative Medicine', 'Traditional Chinese Medicine (TCM)', 'Herbal Medicine',
    'Homeopathy', 'Osteopathy', 'Massage Therapy', 'Physical Therapy', 'Energy Healing',
    'Reflexology', 'Aromatherapy', 'Reiki', 'Craniosacral Therapy', 'Biofeedback',
    'Breathwork', 'Sound Healing', 'Cupping Therapy', 'Hypnotherapy', 'Meditation Coaching',
    'Yoga Therapy', 'Nutrition Counseling', 'Holistic Dentistry', 'Mind-Body Therapy',
    'Life Coaching', 'Art Therapy', 'Somatic Therapy', 'Manual Lymphatic Drainage',
    'Rolfing', 'Myofascial Release', 'Colon Hydrotherapy', 'IV Nutrient Therapy',
    'Hormone Balancing Therapy'
].sort();

const categories = [
    'Natural', 'Environmental', 'Mind-Body', 'Energetic', 'Manual / Physical',
    'Nutritional', 'Lifestyle-Based', 'Traditional / Ancestral', 'Integrative / Whole-Person',
    'Movement-Based', 'Preventive', 'Detoxification', 'Mental / Emotional', 'Spiritual',
    'Technological', 'Expressive / Creative', 'Alternative'
].sort();

const SearchSection: React.FC<SearchSectionProps> = ({ showFilters = false, showResults = false, isHero = false }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialQuery = queryParams.get('q') || '';

    const [query, setQuery] = useState(initialQuery);
    const [filteredProviders, setFilteredProviders] = useState(providers);
    const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [showSpecialtyDropdown, setShowSpecialtyDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    // Apply all filters to providers
    useEffect(() => {
        if (query) {
            const lowerQuery = query.toLowerCase();
            const queryIsSpecialtyMatch = specialties.map(s => s.toLowerCase()).includes(lowerQuery);

            const filtered = providers.filter(provider => {
                const matchesQuery =
                    provider.name.toLowerCase().includes(lowerQuery) ||
                    provider.specialty.toLowerCase().includes(lowerQuery) ||
                    provider.location.toLowerCase().includes(lowerQuery) ||
                    provider.summary.toLowerCase().includes(lowerQuery);

                const matchesSpecialty =
                    selectedSpecialties.length === 0 ||
                    selectedSpecialties.includes(provider.specialty) ||
                    (queryIsSpecialtyMatch && provider.specialty.toLowerCase() === lowerQuery);

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
                    selectedCategories.some(cat =>
                        p.tags?.some(tag => tag.toLowerCase().includes(cat.toLowerCase()))
                    )
                );
            }
            setFilteredProviders(filtered);
        }
    }, [query, selectedSpecialties, selectedCategories]);


    // Keep URL in sync with state
    useEffect(() => {
        const params = new URLSearchParams();
        if (query) params.set('q', query);
        if (selectedSpecialties.length > 0) params.set('specialties', selectedSpecialties.join(','));
        if (selectedCategories.length > 0) params.set('categories', selectedCategories.join(','));

        const hasFilters = query || selectedSpecialties.length > 0 || selectedCategories.length > 0;
        if (!hasFilters) {
            setFilteredProviders([]);
            return;
        }

        navigate(`/search?${params.toString()}`, { replace: true });
    }, [query, selectedSpecialties, selectedCategories]);

    // Hydrate filter state from URL on mount
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q') || '';
        const specialtiesParam = params.get('specialties');
        const categoriesParam = params.get('categories');

        setQuery(q);
        if (specialtiesParam) setSelectedSpecialties(specialtiesParam.split(','));
        if (categoriesParam) setSelectedCategories(categoriesParam.split(','));
    }, []);

    const handleSearch = (q: string) => {
        setQuery(q);
    };

    return (
        <section className={`py-16 ${isHero ? 'bg-gradient-to-b from-[#f0f7ff] to-white' : ''}`}>
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    {isHero ? 'Bringing Healthcare and Wellness Together' : 'Find the right care. Fast.'}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    {isHero
                        ? 'Our community cares for the whole person'
                        : 'Connect with trusted healthcare providers in your area who meet your specific needs.'}
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="max-w-xl mx-auto">
                    <SearchBar initialQuery={query} onSearch={handleSearch} />
                </div>

                {showFilters && (
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                        {/* Specialty Filter */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowSpecialtyDropdown(!showSpecialtyDropdown);
                                    setShowCategoryDropdown(false);
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded shadow-sm border"
                            >
                                Specialties <ChevronDown className={`h-4 w-4 ${showSpecialtyDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {showSpecialtyDropdown && (
                                <div className="absolute z-10 mt-2 w-72 bg-white shadow-lg max-h-60 overflow-y-auto rounded">
                                    <div className="p-4 space-y-1">
                                        {specialties.map((item, idx) => (
                                            <label key={idx} className="flex items-center py-1">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedSpecialties.includes(item)}
                                                    onChange={() =>
                                                        setSelectedSpecialties(prev =>
                                                            prev.includes(item)
                                                                ? prev.filter(s => s !== item)
                                                                : [...prev, item]
                                                        )
                                                    }
                                                />
                                                <span className="ml-2">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowCategoryDropdown(!showCategoryDropdown);
                                    setShowSpecialtyDropdown(false);
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded shadow-sm border"
                            >
                                Categories <ChevronDown className={`h-4 w-4 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {showCategoryDropdown && (
                                <div className="absolute z-10 mt-2 w-72 bg-white shadow-lg max-h-60 overflow-y-auto rounded">
                                    <div className="p-4 space-y-1">
                                        {categories.map((item, idx) => (
                                            <label key={idx} className="flex items-center py-1">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(item)}
                                                    onChange={() =>
                                                        setSelectedCategories(prev =>
                                                            prev.includes(item)
                                                                ? prev.filter(c => c !== item)
                                                                : [...prev, item]
                                                        )
                                                    }
                                                />
                                                <span className="ml-2">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {showResults && (
                    <div className="mt-10 max-w-5xl mx-auto px-4">
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            {filteredProviders.length} Provider{filteredProviders.length !== 1 && 's'} Found
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredProviders.map(provider => (
                                <ProviderCard key={provider.id} provider={provider} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchSection;
