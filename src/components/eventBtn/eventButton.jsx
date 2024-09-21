// components/FixedButton.js

import Link from 'next/link';
import styles from './FixedButton.module.css';

const FixedButton = () => {
  return (
    <div className={styles.fixedButton}>
      <Link href="/event" className={styles.buttonLink}>
<<<<<<< HEAD
        Next Event 😑
=======
        Next Event
>>>>>>> fac371fa7fc8a42ae14e85a33a75d92f6ac71579
      </Link>
    </div>
  );
};

export default FixedButton;
