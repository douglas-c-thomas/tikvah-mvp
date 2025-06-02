// src/pages/HomePage.tsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Heart, ShieldCheck, Clock } from 'lucide-react';
import MainLayout from '../components/MainLayout';

const HomePage: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-primary-light to-white">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/logo.png"
            alt="Tikvah Health & Wellness"
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral mb-4">
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
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-neutral">
            Why choose Tikvah Health?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-light p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral">Top Quality Providers</h3>
              <p className="text-gray-600">
                Our network includes only verified healthcare professionals with excellent patient reviews.
              </p>
            </div>

            <div className="bg-primary-light p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral">Insurance Accepted</h3>
              <p className="text-gray-600">
                Easily find providers who accept your insurance plan to avoid unexpected costs.
              </p>
            </div>

            <div className="bg-primary-light p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral">Quick Appointments</h3>
              <p className="text-gray-600">
                Find available appointments and book instantly with participating providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
