'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Music = () => {
  const [time, setTime] = useState(86400); // 1 day in seconds

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(time);

  return (
    <section className="min-h-screen bg-white flex justify-center items-center py-20">
      {/* Black Section */}
      <div className="bg-black text-white w-[90%] max-w-[1200px] rounded-lg flex justify-between items-center p-10 shadow-lg">
        {/* Left Content */}
        <div className="flex flex-col items-start w-[60%]">
          <span className="text-green-500 text-xl font-semibold mb-2">Categories</span>
          <h1 className="text-4xl font-bold mb-6">Enhance Your Music Experience</h1>

          <div className="flex justify-between gap-4 mb-8">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full text-black text-3xl">
                {days}
              </div>
              <span className="text-gray-400 mt-2">Days</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full text-black text-3xl">
                {hours}
              </div>
              <span className="text-gray-400 mt-2">Hours</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full text-black text-3xl">
                {minutes}
              </div>
              <span className="text-gray-400 mt-2">Minutes</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full text-black text-3xl">
                {seconds}
              </div>
              <span className="text-gray-400 mt-2">Seconds</span>
            </div>
          </div>

          <button className="bg-green-500 text-white py-3 px-8 rounded text-xl transition-colors duration-300 hover:bg-green-700">
            Buy Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-[90%] flex justify-center sm:justify-end top-[-100px] relative mb-0 sm:mb-0">
          <Image
            src="/images/music.png"
            alt="Music"
            width={600}  // Smaller size for mobile
            height={600} // Smaller height for mobile
            className="rounded-lg object-cover sm:object-contain absolute top-[100px] sm:top-0 left-1/2 transform -translate-x-1/2 sm:max-w-[80%] max-w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Music