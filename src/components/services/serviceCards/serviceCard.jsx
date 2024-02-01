"use client"

import Image from 'next/image';
import styles from "./serviceCard.module.css"
import { useState } from 'react';

const Card = ({ image, title, text }) => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.card}>
      <Image src={image} alt={title} className={styles.img} width={100} height={100} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>
          {showMore ? text : text.slice(0, 40) + '...'}
        </p>
        <button className={styles.cardButton} onClick={handleReadMoreClick}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
        {showMore && "helo john"}
      </div>
    </div>
  );
};

export default Card;