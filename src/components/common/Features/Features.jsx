import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="flex justify-center gap-4 p-4">
      {/* Gallery Button */}
      <Link to={blog} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto">
        Gallery
      </Link>
      {/* Blog Button */}
      <Link to={gallery} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 w-full md:w-auto">
        Blog
      </Link>
    </div>
  );
};

export default Features; <h2>hello features</h2>