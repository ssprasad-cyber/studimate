import React from 'react';
import Polygon from './Polygon';
const Blog = () => {
  const blogs = [
    {
      title: 'How AI is Changing Education',
      description: 'Discover the impact of AI on modern education and how it can benefit students and educators.',
      link: '#'
    },
    {
      title: 'Effective Study Tips for Students',
      description: 'Learn the best study tips and techniques to improve your academic performance.',
      link: '#'
    },
    {
      title: 'Balancing School and Life',
      description: 'Find out how to manage your time effectively to balance schoolwork and personal life.',
      link: '#'
    }
  ];

  return (
    <div id="blog" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Latest Blog Posts</h2>

        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
          {blogs.map((blog, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a href={blog.link} className="text-indigo-600 font-semibold hover:underline">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            View All Blog Posts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
