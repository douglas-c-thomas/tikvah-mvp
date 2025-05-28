import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  isExpanded?: boolean;
  initialQuery?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  isExpanded = false, 
  initialQuery = '', 
  onSearch 
}) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative w-full max-w-2xl mx-auto transition-all duration-300 ${
        isExpanded ? 'scale-100' : 'scale-95'
      }`}
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a provider, specialty, or location..."
          className={`w-full py-4 pl-5 pr-12 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-md transition-all duration-300 ${
            isExpanded ? 'shadow-lg' : ''
          }`}
          aria-label="Search for healthcare providers"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;