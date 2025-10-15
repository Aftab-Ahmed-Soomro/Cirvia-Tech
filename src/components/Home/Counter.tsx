import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter: React.FC = () => {
    // Set initial target date (72 days from now as shown in the image)
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 72);
    targetDate.setHours(targetDate.getHours() + 18);
    targetDate.setMinutes(targetDate.getMinutes() + 34);
    targetDate.setSeconds(targetDate.getSeconds() + 59);
    
    const difference = +targetDate - +new Date();
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const formatNumber = (num: number | undefined): string => {
    return num !== undefined ? String(num).padStart(2, '0') : '00';
  };
  return (
    <div className="px-6 pt-4 pb-10">
      <div className="max-w-[75rem] mx-auto bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-10 w-full rounded-2xl sm:rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4">
              Deal Closes Soon
            </h2>
            <p className="text-[#A5A5A5] text-xs sm:text-sm md:text-base leading-relaxed">
              Sed sit amet lorem odio. Vestibulum quis varius urna, sit amet consequat nisl. Fusce ac vestibulum liberelit.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 flex-wrap">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="bg-[#313131] backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 flex justify-center flex-col items-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white block text-center">
                  {formatNumber(timeLeft.days)}
                </h2>
                <span className="text-[#A5A5A5] text-xs sm:text-sm mt-1 sm:mt-2 font-base">Days</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-[#313131] backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 flex justify-center flex-col items-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white block text-center">
                  {formatNumber(timeLeft.hours)}
                </h2>
                <span className="text-[#A5A5A5] text-xs sm:text-sm mt-1 sm:mt-2 font-base">Hours</span>
              </div>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-[#313131] backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 flex justify-center flex-col items-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white block text-center">
                  {formatNumber(timeLeft.minutes)}
                </h2>
                <span className="text-[#A5A5A5] text-xs sm:text-sm mt-1 sm:mt-2 font-base">Minutes</span>
              </div>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-[#313131] backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 flex justify-center flex-col items-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white block text-center">
                  {formatNumber(timeLeft.seconds)}
                </h2>
                <span className="text-[#A5A5A5] text-xs sm:text-sm mt-1 sm:mt-2 font-base">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter
