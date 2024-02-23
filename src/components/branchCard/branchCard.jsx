"use client"

// Import React and Next.js components
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';



// Import Next.js Image component
import Image from 'next/image';
import styles from "./branchCard.module.css"


// Create a custom component for each branch card
const BranchCard = ({ branch }) => {
  // Use state to track if the card is flipped or not
  const [flipped, setFlipped] = useState(false);

  // Define a function to handle the click event on the card
  const handleClick = () => {
    // Toggle the flipped state
    setFlipped(!flipped);
  };

  // Return the JSX for the card
  return (
    <div className={styles.card} onClick={handleClick}>
      {/* Use a conditional class name to apply the flip animation */}
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ''}`}>
        {/* The front side of the card */}
        <div className={styles.cardFront}>
          {/* Use the Image component instead of the img tag */}
          <Image
            src={branch.image}
            alt={branch.name}
            className={styles.cardImage}
            // Provide the width and height of the image
            width={300}
            height={200}
            // Optionally, provide the blurDataURL and placeholder props for blur-up effect
            blurDataURL={branch.image}
            placeholder="blur"
          />
          <h3 className={styles.cardName}>{branch.name}</h3>
          <p className={styles.cardDescription}>{branch.description}</p>
        </div>

        {/* The back side of the card */}
        <div className={styles.cardBack}>
          <h4 className={styles.cardTitle}>{branch.executive.title}</h4>
          <p className={styles.cardInfo}>{branch.executive.info}</p>
           <div className={styles.eImage}>
            <Image src={branch.executive.image} alt='executive' width={100} height={100} className={styles.img}/>
           </div>

          <div className={styles.cardSocial}>
            {/* Use Link component to create links to social media handles */}
            <Link href={branch.executive.social.twitter} className={styles.cardLink}>
            <Image src={branch.executive.social.fImage} alt='media' width={30} height={30} className={styles.img}/>
            </Link>
            <Link href={branch.executive.social.linkedin} className={styles.cardLink}>
            <Image src={branch.executive.social.lImage} alt='media' width={30} height={30} className={styles.img}/>
              
            </Link>
          </div>
          <div className={styles.eDesc}>
            <p className={styles.bDesc}>{branch.executive.bDesc}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BranchCard