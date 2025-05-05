'use client';

import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentYear = new Date().getFullYear();
      const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);
      const difference = endOfYear.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper function to format numbers with leading zeros
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="text-center mt-8">
      <h2 className="text-xl font-semibold mb-6 tracking-wider text-gray-800 glitch-text">
        TIME REMAINING
      </h2>
      <div className="flex justify-center items-center">
        {[
          { value: timeLeft.days, label: 'DAYS' },
          { value: timeLeft.hours, label: 'HRS' },
          { value: timeLeft.minutes, label: 'MIN' },
          { value: timeLeft.seconds, label: 'SEC' }
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-mono font-bold text-gray-800">
                {formatNumber(item.value)}
              </span>
              <span className="text-xs font-bold tracking-widest text-gray-500 mt-1">
                {item.label}
              </span>
            </div>
            
            {/* Add separator between time units except after the last one */}
            {index < 3 && (
              <span className="mx-2 md:mx-4 text-3xl text-gray-300 font-light self-start mt-3">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
