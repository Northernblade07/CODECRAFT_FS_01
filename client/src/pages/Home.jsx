import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export const Home = () => {
 
  return (
    <div className='relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white'>
      {/* Optional overlay for soft effect */}
      <div className='absolute inset-0 bg-black opacity-20 z-0'></div>

      <Navbar/>
      <div className='z-10 mt-24 w-full px-4'>
        <Header />
      </div>
    </div>
  );
};
