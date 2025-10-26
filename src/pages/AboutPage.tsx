import { Target, Heart, Award, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">About Habesha Property</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner in finding the perfect home
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
              Habesha Property was founded with a simple mission: to make finding your dream home as easy and stress-free as possible. We understand that buying or renting a property is one of the most important decisions you'll ever make.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                That's why we've built a platform that puts you first. With cutting-edge technology, verified listings, and expert support, we're transforming the way people search for homes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve thousands of customers across the country, helping them find not just houses, but homes where memories are made.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg"
                alt="Real Estate"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                Clear, honest communication in every interaction
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the best service
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                Always there when you need us most
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of thousands of satisfied customers who found their perfect home with HomeFinder
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-xl">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-blue-100">Properties</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-xl">
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-blue-100">Customers</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-xl">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-blue-100">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
