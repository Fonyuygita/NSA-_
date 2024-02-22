// pages/contact.js
import React from "react";
import Image from "next/image";
import styles from "./contact.module.css";

const contactPage=()=>{
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cum repellat? Totam.</p>
      <div className={styles.contactBox}>
        <div className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
          ></textarea>
          <button type="submit">Send</button>
        </div>
        <div className={styles.image}>
          <Image
            src="/contactUs.png"
            alt="A person holding a phone with a contact icon"
            width={200}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}


export default contactPage