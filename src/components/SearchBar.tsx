import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-3">
            Find Your Perfect Home
          </h2>
          <p className="text-blue-100 text-lg">
            Search through thousands of properties for rent and sale
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by city, state, or property title..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-0 shadow-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
