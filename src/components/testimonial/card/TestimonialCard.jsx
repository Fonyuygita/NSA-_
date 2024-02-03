import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, position, company, message, picture }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
       
    
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
     

  return (
    <div className={styles.card}>
            <Image src="/heart-filled.svg" alt='logo' width={20} height={20} className={styles.quotelogo} />
    
        <div className={styles.top}>
            <div className={styles.topLeft}>
      <img className={styles.picture} src={picture} alt={name} />
            </div>
            <div className={styles.topRight}>

<h2 className={styles.name}>{name}</h2>
        <p className={styles.position}>{position}</p>
        <p className={styles.company}>{company}</p>
            </div>
      </div>
      <div className={styles.content}>
        
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;