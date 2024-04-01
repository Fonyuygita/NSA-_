// components/EventSection.js

import Image from "next/image";
import Link from "next/link";
import styles from "./eventSection.module.css";
import CountdownTimer from "./eventTimer";

const EventSection = () => {
  return (
    <section className={styles.eventSection}>
      <div className={styles.eventImage}>
        <Image src="/event.png" alt="Event Image" width={600} height={400} />
      </div>
      <div className={styles.eventContent}>
        <h2>Upcoming Event</h2>
        <p>Join us for an exciting event!</p>
        <div className={styles.timer}></div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIdSyCoXHWOC14GwqX8rNaLnlXLpFbanE7P4xdXMAjUvqFLQ/viewform" className={styles.eventLink}>
          Register
        </Link>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default EventSection;
