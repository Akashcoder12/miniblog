import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-400  p-4 flex flex-col md:flex-row items-center justify-between">
      <div className='text-white text-2xl font-bold mb-4 md:mb-0'>
        Pixels-to-Projects
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <Link to="/"  className='hover:text-gray-200'>Home</Link>
        <Link to="/About" className='hover:text-gray-200' >About</Link>
        <Link to="/Categories"  className='hover:text-gray-200' >Categories</Link>
        <Link to="/User" className='hover:text-gray-200' >User</Link>
      </div>
     
    </nav>
  )
}
