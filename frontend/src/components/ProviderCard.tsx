import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Award } from 'lucide-react';
import { Provider } from '../data/providers';

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/provider/${provider.id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleViewProfile}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{provider.name}</h3>
            <div className="flex items-center mt-1 text-blue-600">
              <Award className="h-4 w-4 mr-1" />
              <span className="text-sm">{provider.specialty}</span>
            </div>
          </div>
          {provider.rating && (
            <div className="bg-blue-50 text-blue-700 font-medium px-2 py-1 rounded-md text-sm">
              {provider.rating} ★
            </div>
          )}
        </div>
        
        <div className="flex items-center mt-3 text-gray-500">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm">{provider.location}</span>
        </div>
        
        <p className="mt-3 text-gray-600 text-sm line-clamp-2">{provider.summary}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {provider.tags && provider.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleViewProfile();
            }}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;