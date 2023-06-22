import React, { useState, useEffect } from "react";

function CountdownTimer({ date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div className="timer">
      {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
      {timeLeft.seconds} Seconds to Celebration
    </div>
  );
}

function getTimeLeft(date) {
  const currentDate = new Date();
  const futureDate = new Date(date);
  const diff = futureDate.getTime() - currentDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default CountdownTimer;
