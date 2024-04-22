// components/EventSection.js

import Image from "next/image";
import Link from "next/link";
import styles from "./eventSection.module.css";
// import CountdownTimer from "./eventTimer";

const EventSection = () => {
  return (
    <section className={styles.eventSection}>
      <div className={styles.eventImage}>
        <Image src="/ac6.png" alt="Event Image" width={600} height={400} />
      </div>
      <div className={styles.eventContent}>
        <h2>Event Today</h2>
        <p>{"Join us for the National Excos' Visit to NSA Douala Branch on Sunday April 21st, 2024!"}</p>
        <div className={styles.timer}></div>
        <Link href="/event" className={styles.eventLink}>
Event is Today
        </Link>
        
      </div>
    </section>
  );
};

export default EventSection;
