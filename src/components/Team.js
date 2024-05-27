import React from 'react';

const teamMembers = [
  {
    name: 'S Sai Prasad',
    role: 'Team Lead',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus velit sed augue rhoncus, vel mollis ante finibus.',
    social: {
      github: 'https://github.com/s-saiprasad',
      linkedin: 'https://www.linkedin.com/in/s-sai-prasad/'
    }
  },
  {
    name: 'Susmitha',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus velit sed augue rhoncus, vel mollis ante finibus.',
    social: {
      github: 'https://github.com/susmitha',
      linkedin: 'https://www.linkedin.com/in/susmitha/'
    }
  },
  {
    name: 'Vishnu',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus velit sed augue rhoncus, vel mollis ante finibus.',
    social: {
      github: 'https://github.com/vishnu',
      linkedin: 'https://www.linkedin.com/in/vishnu/'
    }
  },
  {
    name: 'Vamsi',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus velit sed augue rhoncus, vel mollis ante finibus.',
    social: {
      github: 'https://github.com/vamsi',
      linkedin: 'https://www.linkedin.com/in/vamsi/'
    }
  },
  {
    name: 'Purnima',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus velit sed augue rhoncus, vel mollis ante finibus.',
    social: {
      github: 'https://github.com/purnima',
      linkedin: 'https://www.linkedin.com/in/purnima/'
    }
  }
];

const Team = () => {
  return (
    <div id="team" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Our Team</h2>

        <div className="hidden lg:flex justify-center items-center">
          <div className="grid grid-cols-5 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg w-full">
                <img className="w-full h-60 object-cover" src={member.image} alt={member.name} />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          {/* Mobile version */}
          {/* Your mobile scrollable cards code here */}
        </div>
      </div>
    </div>
  );
};

export default Team;
