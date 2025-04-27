import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className='text-2xl font-bold mb-4'>About Pixels-to-Projects</h2>
          <p className='text-gray-300'>Pixels-to-Projects is dedicated to providing insightful content on web development, coding, and career tips. Whether you're a beginner or an experienced developer, our blog aims to help you on your learning journey.</p>
        </div>

        
        <div className="md:w-1/3">
          <h2 className='text-2xl  font-bold mb-4'>Follow Us</h2>
          <div className="flex flex-col gap-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"  className='hover:text-gray-400'>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'>Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'>LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'>Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Pixels-to-Projects | All Rights Reserved</p>
      </div>
    </footer>
  );
}
