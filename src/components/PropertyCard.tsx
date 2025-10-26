import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  const formatPrice = (price: number, type: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);

    return type === 'rent' ? `${formatted}/mo` : formatted;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image_url}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold text-white shadow-lg ${
              property.type === 'rent' ? 'bg-green-600' : 'bg-blue-600'
            }`}
          >
            For {property.type === 'rent' ? 'Rent' : 'Sale'}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-sm font-bold bg-white text-gray-900 shadow-lg">
            {formatPrice(property.price, property.type)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <p className="text-sm line-clamp-1">{property.city}, {property.state}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-gray-700">
            <Bed className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <Bath className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <Maximize className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
