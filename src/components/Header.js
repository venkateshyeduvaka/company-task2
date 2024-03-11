import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">AUTONOMIZE_AI</div>
        </div>
        <div className='flex '>
        <NavLink to="/"> <span className='mr-5'>Home</span></NavLink> 
            <span className='mr-5'>About</span>
            <span className=''>Cart</span>
           
        </div>
      </div>
    </header>
  );
};

export default Header;
