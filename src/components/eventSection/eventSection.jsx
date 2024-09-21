// components/EventSection.js

import Image from "next/image";
import Link from "next/link";
import styles from "./eventSection.module.css";
import CountdownTimer from "./eventTimer";

const EventSection = () => {
  return (
    <section className={styles.eventSection}>
      <div className={styles.eventImage}>
        <Image src="/ac6.png" alt="Event Image" width={600} height={400} />
      </div>
      <div className={styles.eventContent}>
        <h2>Next Event</h2>
        <h3>Noni General  Assembly Meeting (NGAM) Updates</h3>
        <p>All Noni son and daughters are hereby informed that there shall be a general assembly meeting (NGAM) in Bafoussam from November 15 to 18, 2024. Worthy of note is the fact that our <span className={styles.span}>Fons shall all be present</span></p>
        <div className={styles.timer}>
          <CountdownTimer />
        </div>
        <Link href="https://docs.google.com/forms/d/18f4cKg_tyWe0lk9CuDYLKl2bQKJrGF-TYbp8Q_D_11o/edit" className={styles.eventLink}>
          RSVP
        </Link>

      </div>
    </section>
  );
};

export default EventSection;
