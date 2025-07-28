import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X } from 'lucide-react';

const Tours = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: 1,
    date: '',
    message: ''
  });

  const upcomingTours = [
    {
      title: "Port of Spain City Tour",
      date: "January 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Trinidad",
      priceInRupees: 12000,
      priceInDollars: 145,
      description: "Explore the vibrant city of Port of Spain with guided tours, local cuisine, and cultural experiences."
    },
    {
      title: "Gasparee Caves Exploration",
      date: "January 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Trinidad",
      priceInRupees: 9000,
      priceInDollars: 110,
      description: "Discover the stunning Gasparee Caves and enjoy a day of adventure and natural beauty."
    },
    {
      title: "Trinidad North Coast Experience",
      date: "February 5, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Trinidad",
      priceInRupees: 15000,
      priceInDollars: 180,
      description: "Experience the breathtaking North Coast with its beaches, rainforests, and scenic drives."
    },
    {
      title: "Rainforest Canopy Walk",
      date: "February 12, 2024",
      time: "7:00 AM - 3:00 PM",
      location: "Costa Rica",
      priceInRupees: 20000,
      priceInDollars: 240,
      description: "Walk among the treetops in the Costa Rican rainforest and spot exotic wildlife."
    }
  ];

  const tourImages = [
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  ];

  const openModal = (index) => {
    setSelectedTour(index);
    setModalOpen(true);
    setShowForm(false);
  };
  const closeModal = () => {
    setModalOpen(false);
    setShowForm(false);
  };
  const handleInterested = () => setShowForm(true);
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setShowForm(false);
    setModalOpen(false);
    setFormData({ name: '', email: '', phone: '', people: 1, date: '', message: '' });
  };

  return (
    <section id="tours" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Tours
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our expertly guided tours to experience the most beautiful destinations on Earth
          </p>
        </div>

        {/* Modal Popup */}
        {modalOpen && selectedTour !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-2 text-orange-600">{upcomingTours[selectedTour].title}</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-200">{upcomingTours[selectedTour].description}</p>
              <div className="mb-2 text-gray-700 dark:text-gray-200">
                <span className="font-semibold">Date:</span> {upcomingTours[selectedTour].date}<br/>
                <span className="font-semibold">Time:</span> {upcomingTours[selectedTour].time}<br/>
                <span className="font-semibold">Location:</span> {upcomingTours[selectedTour].location}
              </div>
              <div className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Price: ₹{upcomingTours[selectedTour].priceInRupees} / ${upcomingTours[selectedTour].priceInDollars}
              </div>
              {!showForm ? (
                <button onClick={handleInterested} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 mb-2">
                  Interested?
                </button>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 mt-2">
                  <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Name" className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white" />
                  <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="Email" className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required placeholder="Phone Number" className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white" />
                  <input type="number" name="people" value={formData.people} min="1" onChange={handleFormChange} required placeholder="Number of People" className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white" />
                  <input type="date" name="date" value={formData.date} onChange={handleFormChange} required className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white" />
                  <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Additional Message (optional)" className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white" />
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">Submit</button>
                </form>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tours List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Schedule & Destinations
            </h3>
            {upcomingTours.map((tour, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => openModal(index)}>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {tour.title}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar size={16} className="mr-3 text-orange-600" />
                    <span>{tour.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock size={16} className="mr-3 text-orange-600" />
                    <span>{tour.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin size={16} className="mr-3 text-orange-600" />
                    <span>{tour.location}</span>
                  </div>
                </div>
                <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200" onClick={e => { e.stopPropagation(); openModal(index); }}>
                  Book Now
                </button>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {tourImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={() => openModal(index % upcomingTours.length)}>
                <img
                  src={image}
                  alt={`Tour destination ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
