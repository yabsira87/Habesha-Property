import { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import PropertyGrid from '../components/PropertyGrid';
import PropertyDetail from '../components/PropertyDetail';
import { Property } from '../types/property';

interface PropertiesPageProps {
  properties: Property[];
  filter: 'all' | 'rent' | 'sell';
}

export default function PropertiesPage({ properties, filter }: PropertiesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    let filtered = properties;

    if (filter !== 'all') {
      filtered = filtered.filter((prop) => prop.type === filter);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (prop) =>
          prop.title.toLowerCase().includes(search) ||
          prop.city.toLowerCase().includes(search) ||
          prop.state.toLowerCase().includes(search) ||
          prop.description.toLowerCase().includes(search)
      );
    }

    return filtered;
  }, [properties, filter, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span>{' '}
            {filteredProperties.length === 1 ? 'property' : 'properties'}
          </p>
        </div>

        <PropertyGrid
          properties={filteredProperties}
          onPropertyClick={setSelectedProperty}
        />
      </main>

      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
