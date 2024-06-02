import React, { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'Studimate has completely transformed my study routine. The AI-powered assistance is incredibly helpful and the resources are top-notch.'
  },
  {
    name: 'Bob Smith',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'The personalized dashboard and progress tracking have made it so much easier to stay on top of my studies. I can’t recommend Studimate enough!'
  },
  {
    name: 'Catherine Lee',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'I love the interactive study tools and the vibrant community. Studimate has made learning so much more engaging and fun.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const cardWidth = scrollContainer.scrollWidth / testimonials.length;
      scrollContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Users Say</h2>

        <div className="hidden lg:grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src={testimonial.image}
                alt={`Testimonial from ${testimonial.name}`}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="lg:hidden relative">
          <div ref={scrollContainerRef} className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory space-x-4 pb-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full snap-center">
                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center" style={{ height: '400px' }}>
                  <img
                    className="w-24 h-24 rounded-full mb-4"
                    src={testimonial.image}
                    alt={`Testimonial from ${testimonial.name}`}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button onClick={handlePrev} className="p-2 -ml-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={handleNext} className="p-2 -mr-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
