"use client"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'
import styles from "../app/contact/contact.module.css"


const Form=()=>{
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

      return(
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
  )
}

export default Form