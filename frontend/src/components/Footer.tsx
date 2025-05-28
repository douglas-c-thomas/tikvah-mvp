import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-lg font-semibold">MediSearch</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">For Patients</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find a Provider</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Insurance Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Patient Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">For Providers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join Network</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Provider Portal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Contact</h3>
              <p className="text-gray-300 mb-2">1-800-MEDISEARCH</p>
              <p className="text-gray-300">support@medisearch.example</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 MediSearch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;