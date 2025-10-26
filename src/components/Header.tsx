import { Home, LogOut, User } from 'lucide-react';
import { AuthUser } from '../lib/auth';

interface HeaderProps {
  currentPage: 'home' | 'properties' | 'about';
  onPageChange: (page: 'home' | 'properties' | 'about') => void;
  onFilterChange: (filter: 'all' | 'rent' | 'sell') => void;
  currentFilter: 'all' | 'rent' | 'sell';
  user: AuthUser | null;
  onAuthClick: () => void;
  onSignOut: () => void;
}

export default function Header({
  currentPage,
  onPageChange,
  onFilterChange,
  currentFilter,
  user,
  onAuthClick,
  onSignOut
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-8">
            <button
              onClick={() => onPageChange('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                <Home className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Habesha Property</h1>
                <p className="text-xs text-gray-500">Find Your Dream Home</p>
              </div>
            </button>

            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => onPageChange('home')}
                className={`font-medium transition-colors ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => onPageChange('properties')}
                className={`font-medium transition-colors ${
                  currentPage === 'properties' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Properties
              </button>
              <button
                onClick={() => onPageChange('about')}
                className={`font-medium transition-colors ${
                  currentPage === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {currentPage === 'properties' && (
              <>
                <button
                  onClick={() => onFilterChange('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    currentFilter === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => onFilterChange('rent')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    currentFilter === 'rent'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Rent
                </button>
                <button
                  onClick={() => onFilterChange('sell')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    currentFilter === 'sell'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Sale
                </button>
              </>
            )}

            {user ? (
              <div className="flex items-center gap-2 ml-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700 max-w-32 truncate">
                    {user.email}
                  </span>
                </div>
                <button
                  onClick={onSignOut}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
