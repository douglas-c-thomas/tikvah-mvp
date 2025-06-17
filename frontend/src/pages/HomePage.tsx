import React from 'react';
import MainLayout from '../components/MainLayout';
import SearchSection from '../components/SearchSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <SearchSection isHero={true} showFilters={true} showResults={false} />
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why choose Tikvah Health?
          </h2>
          <img src="/static/why-tikvah.png" alt="Why Tikvah" className="w-full" />
          {/* <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Holistic Providers',
                description:
                  'We focus on holistic wellness across body, mind, and spirit — not just symptoms.',
              },
              {
                icon: '🧘',
                title: 'Whole-Person Care',
                description:
                  'Our providers support physical health, emotional balance, and spiritual growth.',
              },
              {
                icon: '📅',
                title: 'Quick Appointments',
                description:
                  'Find available appointments and book instantly with participating providers.',
              },
            ].map(({ icon, title, description }) => (
              <div key={title} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
