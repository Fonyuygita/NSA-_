import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.upperSection}>
      <div className={styles.section}>
      <h3>About Us</h3>
      <Link href="/about" className={styles.branches}>
      About us
      </Link>
      <Link href="/" className={styles.branches}>
      Our Team
      </Link> <Link href="/about" className={styles.branches}>
      N.S.A History
      </Link>
    </div>
        <div className={styles.section}>
          <h3>Contact</h3>
          <ul>
            <li>nonistudents@gmail.com</li>
            <li>+237 671 342 844</li>
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
          <h3>Top Branches</h3>
          <Link href="/branches" className={styles.branches}>
          Bambili
          </Link>
          <Link href="/branches" className={styles.branches}>
          Yaounde
          </Link> <Link href="/branches" className={styles.branches}>
          Douala
          </Link>
        </div>
      </div>

      <section className={styles.location}>
      <h3 className={styles.locationTitle}>Village Location</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126886.1119571692!2d10.507973957664973!3d6.3693234898740885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1058aa3b91178ec9%3A0x3a23dbe24cf4fd1e!2sNoni!5e0!3m2!1sen!2scm!4v1710042943012!5m2!1sen!2scm"  style={{border:0, height:"300px", width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.map}></iframe>
      </section>

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