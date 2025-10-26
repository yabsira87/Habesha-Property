import { useState, useEffect } from 'react';
import Header from './components/Header';
import AuthModal from './components/AuthModal';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import { Property } from './types/property';
import { sampleProperties } from './data/sampleProperties';
import { authService, AuthUser } from './lib/auth';

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState<'home' | 'properties' | 'about'>('home');
  const [filter, setFilter] = useState<'all' | 'rent' | 'sell'>('all');
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup' | null>(null);

  useEffect(() => {
    const loadedProperties: Property[] = sampleProperties.map((prop, index) => ({
      ...prop,
      id: `prop-${index}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
    setProperties(loadedProperties);

    authService.getCurrentUser().then(setUser);

    const { data: authListener } = authService.onAuthStateChange(setUser);

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleAuthSuccess = () => {
    setAuthModalMode(null);
    authService.getCurrentUser().then(setUser);
  };

  const handleSignOut = async () => {
    await authService.signOut();
    setUser(null);
  };

  const handleExploreClick = () => {
    setCurrentPage('properties');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onFilterChange={setFilter}
        currentFilter={filter}
        user={user}
        onAuthClick={() => setAuthModalMode('signin')}
        onSignOut={handleSignOut}
      />

      {currentPage === 'home' && <HomePage onExploreClick={handleExploreClick} />}
      {currentPage === 'properties' && <PropertiesPage properties={properties} filter={filter} />}
      {currentPage === 'about' && <AboutPage />}

      {authModalMode && (
        <AuthModal
          mode={authModalMode}
          onClose={() => setAuthModalMode(null)}
          onSuccess={handleAuthSuccess}
          onSwitchMode={() => setAuthModalMode(authModalMode === 'signin' ? 'signup' : 'signin')}
        />
      )}
    </div>
  );
}

export default App;
