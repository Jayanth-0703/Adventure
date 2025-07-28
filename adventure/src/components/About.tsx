import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, X } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Mountain Adventures"
    },
    {
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Ocean Expeditions"
    },
    {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Forest Trails"
    },
    {
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Desert Journeys"
    }
  ];

  const adventureDetails = [
    {
      title: 'Mountain Adventures',
      description: 'Experience the thrill of conquering majestic peaks, trekking through breathtaking trails, and camping under the stars. Our mountain adventures are perfect for thrill-seekers and nature lovers alike.',
      reviews: [
        { name: 'Amit (India)', text: 'The mountain trek was life-changing! The guides were professional and the views were stunning.' },
        { name: 'Emily (UK)', text: 'Absolutely loved the Himalayan experience. Well organized and safe.' }
      ]
    },
    {
      title: 'Ocean Expeditions',
      description: 'Dive into the deep blue with our ocean expeditions. From scuba diving to sailing, explore vibrant marine life and pristine beaches.',
      reviews: [
        { name: 'Rahul (India)', text: 'Snorkeling with dolphins was a dream come true. Highly recommended!' },
        { name: 'Lucas (Australia)', text: 'The coral reefs were spectacular. Great crew and equipment.' }
      ]
    },
    {
      title: 'Forest Trails',
      description: 'Wander through lush forests, discover hidden waterfalls, and connect with wildlife. Our forest trails are designed for explorers and photographers.',
      reviews: [
        { name: 'Priya (India)', text: 'The forest trail was serene and beautiful. Saw so many rare birds!' },
        { name: 'Anna (Germany)', text: 'Loved the guided nature walk. The guides were very knowledgeable.' }
      ]
    },
    {
      title: 'Desert Journeys',
      description: 'Embark on a journey across golden sands, ride camels, and witness mesmerizing sunsets. Our desert adventures offer a unique blend of culture and adventure.',
      reviews: [
        { name: 'Vikram (India)', text: 'The desert safari was unforgettable. The night under the stars was magical.' },
        { name: 'Sophie (France)', text: 'Riding camels and the local food were highlights. Great hospitality!' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToHome = () => {
    const element = document.getElementById('home');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openAdventureModal = (index) => {
    setSelectedAdventure(index);
    setModalOpen(true);
  };

  const closeAdventureModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Our Adventures
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are passionate about creating unforgettable experiences that connect you with nature's most beautiful destinations.
          </p>
        </div>

        {/* Modal Popup */}
        {modalOpen && selectedAdventure !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in max-h-[90vh] overflow-y-auto">
              <button onClick={closeAdventureModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <X size={24} />
              </button>
              <img src={slides[selectedAdventure].image} alt={adventureDetails[selectedAdventure].title} className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-orange-600">{adventureDetails[selectedAdventure].title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-200">{adventureDetails[selectedAdventure].description}</p>
              <div className="mb-2 font-semibold text-gray-900 dark:text-white">Reviews:</div>
              <ul className="space-y-2">
                {adventureDetails[selectedAdventure].reviews.map((review, idx) => (
                  <li key={idx} className="bg-gray-100 dark:bg-gray-800 rounded p-3">
                    <span className="font-bold text-orange-600">{review.name}:</span> {review.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Slider */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
                onClick={() => openAdventureModal(currentSlide)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold cursor-pointer underline hover:text-orange-400" onClick={() => openAdventureModal(currentSlide)}>
                  {slides[currentSlide].title}
                </h3>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-orange-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  title={slide.title}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Your Adventure Specialists
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With over a decade of experience in adventure tourism, we specialize in crafting unique journeys that push boundaries and create lasting memories. Our team of expert guides and adventure specialists ensure every trip is safe, exciting, and transformative.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From mountain peaks to ocean depths, from dense forests to vast deserts, we've explored it all and we're excited to share these incredible experiences with you.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Adventures</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Countries</div>
              </div>
            </div>
            <button
              onClick={scrollToHome}
              className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <Home size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
