import React from 'react';
import MainLayout from '../components/MainLayout';
import SearchSection from '../components/SearchSection';

const SearchResultsPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <SearchSection isHero={true} showFilters={true} showResults={true} />
      </section>
    </MainLayout>
  );
};

export default SearchResultsPage;
