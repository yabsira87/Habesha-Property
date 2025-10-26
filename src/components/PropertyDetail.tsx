import { X, Bed, Bath, Maximize, MapPin, Check } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyDetailProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyDetail({ property, onClose }: PropertyDetailProps) {
  const formatPrice = (price: number, type: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);

    return type === 'rent' ? `${formatted}/month` : formatted;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="relative h-96">
          <img
            src={property.image_url}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg ${
                property.type === 'rent' ? 'bg-green-600' : 'bg-blue-600'
              }`}
            >
              For {property.type === 'rent' ? 'Rent' : 'Sale'}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <p className="text-lg">{property.address}</p>
              </div>
              <p className="text-gray-600 ml-7">
                {property.city}, {property.state} {property.zip_code}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600">
                {formatPrice(property.price, property.type)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <Bed className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
              <p className="text-sm text-gray-600">Bedrooms</p>
            </div>
            <div className="text-center">
              <Bath className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
              <p className="text-sm text-gray-600">Bathrooms</p>
            </div>
            <div className="text-center">
              <Maximize className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{property.area.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Square Feet</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          {property.features && property.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Features & Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md">
              Contact Agent
            </button>
            <button className="flex-1 bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Save Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
