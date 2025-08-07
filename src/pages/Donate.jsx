import React from 'react';
import { FaCoffee, FaPaypal, FaHeart } from 'react-icons/fa';
import BackToHome from '../components/BackToHome';

const Donate = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center justify-center p-6 hover:shadow-2xl shadow border border-transparent hover:border-white/80 transition duration-500 ease-in-out">
      <h1 className="text-4xl font-bold mb-4">☕ Support My Work</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        If you enjoy my projects or learned something from my portfolio, consider buying me a coffee or making a donation.
        Your support means a lot and helps me keep creating awesome content. 💜
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Buy Me a Coffee */}
        <a
          href="https://www.buymeacoffee.com/abheyk04m"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-300 flex items-center gap-2 transition-all"
        >
          <FaCoffee className="text-xl" />
          Buy Me a Coffee
        </a>

      </div>

      <p className="text-sm text-gray-400 mt-10">
        Or just drop a ❤️ on my work. Every little bit counts!
      </p>

      <BackToHome />
    </div>
  );
};

export default Donate;
