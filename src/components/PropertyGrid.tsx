import { Property } from '../types/property';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  onPropertyClick: (property: Property) => void;
}

export default function PropertyGrid({ properties, onPropertyClick }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={() => onPropertyClick(property)}
        />
      ))}
    </div>
  );
}
