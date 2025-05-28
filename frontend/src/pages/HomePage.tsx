import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Heart, ShieldCheck, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Find the right care. Fast.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with trusted healthcare providers in your area who meet your specific needs.
          </p>
          
          <div 
            className="mb-12 transition-all duration-300 transform"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          >
            <SearchBar isExpanded={isSearchFocused} />
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">Dermatologist</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">Cardiologist</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">Pediatrician</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">Family Doctor</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">Therapist</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why choose MediSearch?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Top Quality Providers</h3>
              <p className="text-gray-600">
                Our network includes only verified healthcare professionals with excellent patient reviews.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Insurance Accepted</h3>
              <p className="text-gray-600">
                Easily find providers who accept your insurance plan to avoid unexpected costs.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quick Appointments</h3>
              <p className="text-gray-600">
                Find available appointments and book instantly with participating providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;