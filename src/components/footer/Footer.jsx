import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.upperSection}>
        <div className={styles.section}>
          <h3>About</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Company History</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Contact</h3>
          <ul>
            <li>Email</li>
            <li>Phone</li>
            <li>Address</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Blog</h3>
          <ul>
            <li>Latest Posts</li>
            <li>Categories</li>
            <li>Archive</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Branches</h3>
          <ul>
            <li>Branch 1</li>
            <li>Branch 2</li>
            <li>Branch 3</li>
          </ul>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.lowerSection}>
        <p>&copy; 2024 N.S.A All rights reserved.</p>
        <p>Developoed by GitaFonyuy</p>
        <div className={styles.socialMedia}>
            <Link href="/">
                <Image src="/facebook.svg" alt='icon' width={20} height={20} />
            </Link>
            <Link href="/">
                <Image src="/twitter.svg" alt='icon' width={20} height={20} />
            </Link> <Link href="/">
                <Image src="/linkedin.svg" alt='icon' width={20} height={20} />
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;