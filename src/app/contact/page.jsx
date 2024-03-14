"use client"
import React, { useRef, useState } from 'react'
import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { RiMessengerLine } from "react-icons/ri"
import styles from "./contact.module.css"
import SectionHeader from "@/components/sectionHeader/sectionHeader"
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'



const ContactPage = () => {
  const [sucess, setSuccess] = useState(false)
  const [error, setError] = useState(false);
  const router = useRouter();


  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        setSuccess(true)
        router.push("/")
        console.log(result);
        console.log("message not sent");
        form.current.reset()
      }, (error) => {
        setError(true)
        console.log(error);
        console.log("message not sent");
      });
  };


  return (
    <section className={styles.contact}>
      <SectionHeader title="Get in Touch" description="Contact us through any of the below means" />
      <div className={styles.contactContainer}>
        <div className={`container ${styles.contactWrapper}`}>

          <Link href="mailto:nonistudents@gmail.com" className={`${styles.contactOption} ${styles.btn1}`} target="_blank " rel="noopener noreferrror">
            <MdOutlineEmail className={styles.contactIcon} />
          </Link>

          <Link href="mailto:fonyyuyjudegita@gmail.com" className={`${styles.contactOption} ${styles.btn2}`} target="_blank " rel="noopener noreferrror">
            <RiMessengerLine className={styles.contactIcon} />
          </Link>

          <Link href="https://wa.me/+237680064153" className={`${styles.contactOption} ${styles.btn3}`} target="_blank " rel="noopener noreferrror">
            <BsWhatsapp className={styles.contactIcon} />
          </Link>
        </div>

        <div className={styles.line}></div>

        <div className={styles.formContainer}>
          {/* <HydrationTestNoSSR/> */}
          {/* <div suppressHydrationWarning>{a}</div> */}
          <form onSubmit={sendEmail} ref={form} className={styles.form}  >

            <input type="text" placeholder="Email Address" name="user_email" />

            <textarea
              name="user_message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
            {sucess && <span className={styles.correctMsg}>Message sent successfully</span>}
            {error && <span className={styles.wrongMsg}>Message not sent, something went wrong</span>}

          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage