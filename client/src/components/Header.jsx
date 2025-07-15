import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
     <div className='flex flex-col items-center mt-28 px-6 text-center text-white  rounded-xl shadow-xl py-12 mx-4'>
      <img
        src={'/Robot.png'}
        alt="Profile"
        className='w-44 h-52 object-cover rounded-2xl shadow-lg mb-6 border-4 border-white'
      />

      <h1 className='flex items-center gap-2 text-3xl sm:text-5xl font-bold mb-4'>
        Hey! User
        <img src={assets.hand_wave} alt="Wave" className='w-10 h-10' />
      </h1>

      <h2 className='text-4xl sm:text-6xl font-extrabold mb-4 text-yellow-300 drop-shadow'>
        Welcome to our App
      </h2>

      <p className='mb-10 max-w-xl text-lg sm:text-xl text-white/90 leading-relaxed'>
        Take a tour and explore the features — your journey starts here!
      </p>

      <button className='bg-yellow-400 text-indigo-900 font-semibold px-10 py-3 rounded-full shadow-md hover:bg-yellow-300 hover:scale-105 transition-transform duration-300'>
        Let’s Begin
      </button>
    </div>
  );
};

export default Header;
