// components/FixedButton.js

import Link from 'next/link';
import styles from './FixedButton.module.css';

const FixedButton = () => {
  return (
    <div className={styles.fixedButton}>
      <Link href="/event" className={styles.buttonLink}>
        Next Event
      </Link>
    </div>
  );
};

export default FixedButton;
