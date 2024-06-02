import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {teamMembers} from '@/mainpage/idt';


const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : teamMembers.length - 1));
  };

  const handleNext = () => {
    setScrollIndex((prevIndex) => (prevIndex < teamMembers.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div id="team" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Our Team</h2>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="grid grid-cols-5 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg w-full">
                <img className="w-full h-60 object-cover" src={member.image} alt={member.name} />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="team-container lg:hidden">
          <button className="team-arrow arrow-left" onClick={handlePrev}>
            &#8249;
          </button>
          <div className="flex animate-scroll" style={{ transform: `translateX(-${scrollIndex * 100}%)` }}>
            {teamMembers.map((member, index) => (
              <div key={index} className="flex-shrink-0 w-full mx-2">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img className="w-full h-60 object-cover" src={member.image} alt={member.name} />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <div className="flex space-x-3">
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="team-arrow arrow-right" onClick={handleNext}>
            &#8250;
          </button>
        </div>

        {selectedMember && (
          <Dialog open={true} onClose={() => setSelectedMember(null)} className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
              <div className="bg-white rounded-lg max-w-md mx-auto my-8 p-6 shadow-lg relative z-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
                  <button onClick={() => setSelectedMember(null)} className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <img className="w-full h-60 object-cover rounded-lg my-4" src={selectedMember.image} alt={selectedMember.name} />
                <p className="text-gray-600">{selectedMember.bio}</p>
                <div className="flex space-x-3 mt-4">
                  <a href={selectedMember.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Team;
