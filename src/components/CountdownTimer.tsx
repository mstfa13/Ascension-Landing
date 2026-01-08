import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = '' }: CountdownTimerProps) => {
  // Default to 3 days from now if no target date provided
  const defaultTarget = new Date();
  defaultTarget.setDate(defaultTarget.getDate() + 3);
  
  const target = targetDate || defaultTarget;

  const calculateTimeLeft = () => {
    const difference = target.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`flex justify-center gap-3 md:gap-4 ${className}`}>
      <div className="countdown-box">
        <div className="text-2xl md:text-3xl font-bold gradient-text">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-xs text-dark-400 uppercase tracking-wider mt-1">Days</div>
      </div>
      <div className="countdown-box">
        <div className="text-2xl md:text-3xl font-bold gradient-text">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-xs text-dark-400 uppercase tracking-wider mt-1">Hours</div>
      </div>
      <div className="countdown-box">
        <div className="text-2xl md:text-3xl font-bold gradient-text">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-xs text-dark-400 uppercase tracking-wider mt-1">Mins</div>
      </div>
      <div className="countdown-box">
        <div className="text-2xl md:text-3xl font-bold gradient-text">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-xs text-dark-400 uppercase tracking-wider mt-1">Secs</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
