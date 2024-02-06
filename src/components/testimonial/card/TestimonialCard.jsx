import Image from 'next/image';

import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, position, company, message, picture }) => {
    

  return (
    <div className={styles.card}>
            <Image src="/quote.svg" alt='logo' width={20} height={20} className={styles.quoteLogo} />
    
        <div className={styles.top}>
            <div className={styles.topLeft}>
      <img className={styles.picture} src={picture} alt={name} />
<h2 className={styles.name}>{name}</h2>

            </div>
            <div className={styles.topRight}>
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