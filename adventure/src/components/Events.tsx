import React, { useState } from 'react';
import { Calendar, MapPin, Users, X } from 'lucide-react';

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: 1,
    date: '',
    message: ''
  });

  const events = [
    {
      id: 1,
      title: "Everest Camp Trek",
      description: "Experience the ultimate adventure with our Everest Base Camp trek. Journey through stunning landscapes and witness breathtaking mountain views.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "March 15-30, 2024",
      location: "Nepal",
      participants: "12 spots left",
      priceInRupees: 120000,
      priceInDollars: 1450
    },
    {
      id: 2,
      title: "Walking Holidays",
      description: "Discover hidden trails and scenic routes on our guided walking holidays. Perfect for nature lovers and photography enthusiasts.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "April 10-17, 2024",
      location: "Scottish Highlands",
      participants: "8 spots left",
      priceInRupees: 80000,
      priceInDollars: 950
    },
    {
      id: 3,
      title: "Andaman Beaches",
      description: "Relax and rejuvenate on pristine beaches while exploring underwater wonders through snorkeling and diving adventures.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "May 5-12, 2024",
      location: "Andaman Islands",
      participants: "15 spots left",
      priceInRupees: 60000,
      priceInDollars: 720
    }
  ];

  const openModal = (index) => {
    setSelectedEvent(index);
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
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for incredible adventures around the world. Each event is carefully curated to provide unforgettable experiences.
          </p>
        </div>

        {/* Modal Popup */}
        {modalOpen && selectedEvent !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <X size={24} />
              </button>
              <img src={events[selectedEvent].image} alt={events[selectedEvent].title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-orange-600">{events[selectedEvent].title}</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-200">{events[selectedEvent].description}</p>
              <div className="mb-2 text-gray-700 dark:text-gray-200">
                <span className="font-semibold">Date:</span> {events[selectedEvent].date}<br/>
                <span className="font-semibold">Location:</span> {events[selectedEvent].location}<br/>
                <span className="font-semibold">Participants:</span> {events[selectedEvent].participants}
              </div>
              <div className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Price: ₹{events[selectedEvent].priceInRupees} / ${events[selectedEvent].priceInDollars}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <article key={event.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer" onClick={() => openModal(index)}>
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                  onClick={() => openModal(index)}
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200" onClick={e => { e.stopPropagation(); openModal(index); }}>
                  All Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
