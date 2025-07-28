import React, { useState } from 'react';
import { Compass, Mountain, Camera, Search, Globe, MapPin, Users, Star } from 'lucide-react';

const categories = [
  { name: 'Adventure', icon: <Mountain size={20} className="mr-2 text-orange-400" /> },
  { name: 'Nature', icon: <Globe size={20} className="mr-2 text-green-500" /> },
  { name: 'Culture', icon: <Star size={20} className="mr-2 text-yellow-400" /> },
  { name: 'Family', icon: <Users size={20} className="mr-2 text-blue-400" /> },
  { name: 'Photography', icon: <Camera size={20} className="mr-2 text-purple-400" /> },
];

const destinations = [
  {
    name: 'Himalayas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    country: 'India',
    type: 'Adventure',
    description: 'Trek the world’s highest mountains and experience breathtaking views.'
  },
  {
    name: 'Santorini',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    country: 'Greece',
    type: 'Culture',
    description: 'Explore whitewashed villages and stunning sunsets by the Aegean Sea.'
  },
  {
    name: 'Amazon Rainforest',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
    country: 'Brazil',
    type: 'Nature',
    description: 'Discover the world’s largest rainforest and its incredible biodiversity.'
  },
  {
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    country: 'Switzerland',
    type: 'Family',
    description: 'Enjoy family-friendly adventures and scenic train rides.'
  },
  {
    name: 'Kyoto',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
    country: 'Japan',
    type: 'Culture',
    description: 'Immerse yourself in ancient temples, cherry blossoms, and traditions.'
  },
  {
    name: 'Great Barrier Reef',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
    country: 'Australia',
    type: 'Adventure',
    description: 'Dive into the world’s largest coral reef system.'
  },
];

const Explore = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const recommendedItems = {
    'Himalayas': [
      'Trekking shoes',
      'Warm clothing',
      'Backpack',
      'Water bottle',
      'First aid kit',
      'Travel insurance',
      'Sunscreen',
      'Camera',
    ],
    'Santorini': [
      'Light clothing',
      'Sunglasses',
      'Sun hat',
      'Swimwear',
      'Travel adapter',
      'Walking shoes',
      'Camera',
    ],
    'Amazon Rainforest': [
      'Insect repellent',
      'Rain jacket',
      'Quick-dry clothing',
      'Waterproof bag',
      'Binoculars',
      'First aid kit',
      'Hiking boots',
    ],
    'Swiss Alps': [
      'Warm layers',
      'Snow boots',
      'Travel insurance',
      'Ski equipment (if needed)',
      'Sunglasses',
      'Camera',
    ],
    'Kyoto': [
      'Comfortable shoes',
      'Travel guidebook',
      'Umbrella',
      'Camera',
      'Cash (for local shops)',
    ],
    'Great Barrier Reef': [
      'Swimwear',
      'Snorkeling gear',
      'Sunscreen',
      'Waterproof camera',
      'Flip flops',
      'Beach towel',
    ],
  };

  const filteredDestinations = destinations.filter(dest =>
    (selectedCategory === 'All' || dest.type === selectedCategory) &&
    (dest.name.toLowerCase().includes(search.toLowerCase()) || dest.country.toLowerCase().includes(search.toLowerCase()))
  );

  const openModal = (idx) => {
    setSelectedDestination(idx);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedDestination(null);
  };

  return (
    <section id="explore" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80')" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore New Destinations</h2>
          <p className="text-xl opacity-90 mb-6">Find your next adventure, discover hidden gems, and create unforgettable memories.</p>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search destinations or countries..."
                className="w-full px-5 py-3 rounded-full bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
              />
              <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              className={`px-5 py-2 rounded-full font-semibold border transition-colors duration-200 ${selectedCategory === 'All' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white/20 text-white border-white/30 hover:bg-orange-600 hover:text-white'}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.name}
                className={`flex items-center px-5 py-2 rounded-full font-semibold border transition-colors duration-200 ${selectedCategory === cat.name ? 'bg-orange-600 text-white border-orange-600' : 'bg-white/20 text-white border-white/30 hover:bg-orange-600 hover:text-white'}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        {/* Modal Popup for Destination Info */}
        {modalOpen && selectedDestination !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in text-gray-900 dark:text-white max-h-[90vh] overflow-y-auto">
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold">
                ×
              </button>
              <img src={filteredDestinations[selectedDestination].image} alt={filteredDestinations[selectedDestination].name} className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-3xl font-bold mb-2 text-orange-600">{filteredDestinations[selectedDestination].name}</h3>
              <div className="flex items-center mb-2 text-orange-500">
                <MapPin size={18} className="mr-2" /> {filteredDestinations[selectedDestination].country}
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-200">{filteredDestinations[selectedDestination].description}</p>
              <div className="mb-4">
                <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">{filteredDestinations[selectedDestination].type}</span>
                <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold hover:bg-blue-600 transition-colors duration-200">Save to Wishlist</button>
                <button className="ml-2 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold hover:bg-green-600 transition-colors duration-200" onClick={() => {navigator.clipboard.writeText(window.location.href + '#' + filteredDestinations[selectedDestination].name.replace(/\s+/g, '-').toLowerCase());}}>Share</button>
              </div>
              {/* Real-world features */}
              <div className="mb-4">
                <div className="font-semibold mb-1">Weather:</div>
                <div className="text-gray-800 dark:text-gray-100 mb-2">Sunny, 18°C (Sample)</div>
                <div className="font-semibold mb-1">Currency Converter:</div>
                <div className="flex items-center mb-2">
                  <input type="number" min="1" defaultValue="100" className="w-24 px-2 py-1 border rounded mr-2 text-gray-900" />
                  <span className="mr-2">INR</span>
                  <span className="mr-2">≈</span>
                  <span className="font-semibold">1.20 USD</span>
                  <span className="ml-2 text-xs text-gray-500">(Sample)</span>
                </div>
                <div className="font-semibold mb-1">Best Time to Visit:</div>
                <div className="text-gray-800 dark:text-gray-100 mb-2">March - May, September - November</div>
                <div className="font-semibold mb-1">Local Experiences:</div>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-100 mb-2">
                  <li>Guided tours</li>
                  <li>Local cuisine tasting</li>
                  <li>Adventure sports</li>
                </ul>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 mb-2">Quick Enquiry</button>
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Travel Insurance Info:</div>
                <div className="text-gray-800 dark:text-gray-100 mb-2 text-sm">We recommend purchasing travel insurance for all international trips. Coverage includes medical emergencies, trip cancellations, and lost luggage.</div>
                <a href="https://www.policybazaar.com/travel-insurance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">Learn more</a>
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">COVID-19 Travel Advisory:</div>
                <div className="text-red-600 dark:text-red-400 text-sm mb-2">Check the latest COVID-19 guidelines and requirements before planning your trip.</div>
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">WHO Travel Advice</a>
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Recommended/Required Items:</div>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-100">
                  {(recommendedItems[filteredDestinations[selectedDestination].name] || []).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2 font-semibold">Map:</div>
              <div className="w-full h-64 rounded overflow-hidden mb-2">
                <iframe
                  title="map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(filteredDestinations[selectedDestination].name + ' ' + filteredDestinations[selectedDestination].country)}&output=embed`}
                ></iframe>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDestinations.length === 0 && (
            <div className="col-span-full text-center text-lg text-white/80">No destinations found.</div>
          )}
          {filteredDestinations.map((dest, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => openModal(idx)}>
              <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-orange-200">{dest.name}</h3>
                <div className="flex items-center mb-2 text-orange-100">
                  <MapPin size={16} className="mr-2" /> {dest.country}
                </div>
                <p className="mb-4 text-white/90">{dest.description}</p>
                <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{dest.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Journey
          </button>
        </div>
      </div>
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2">
          <Compass size={20} /> Live Chat
        </button>
      </div>
    </section>
  );
};

export default Explore;
