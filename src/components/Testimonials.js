import React from 'react';

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
  return (
    <div id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Users Say</h2>

        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
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
      </div>
    </div>
  );
};

export default Testimonials;
