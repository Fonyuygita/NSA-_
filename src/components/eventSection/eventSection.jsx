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
        <p>{"The National convention which is coming up, from the 15th of August to the 18th of August 2024 "}</p>
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
