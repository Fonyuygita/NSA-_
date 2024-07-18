"use client"

// components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import styles from "./eventTimer.module.css"

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const eventDate = new Date('2024-08-15'); // Replace with your event date
    const today = new Date();
    const difference = eventDate - today;

    const countdownInterval = setInterval(() => {
      const updatedDifference = eventDate - new Date();

      if (updatedDifference <= 0) {
        clearInterval(countdownInterval);
        setCountdown(0);
      } else {
        setCountdown(updatedDifference);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <div>
      <div className={styles.count}>
        {formatTime(days)} days {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)} <span className={styles.left}>Left</span>
      </div>
    </div>
  );
};

export default CountdownTimer;