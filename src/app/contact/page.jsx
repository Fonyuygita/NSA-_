import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"
import styles from "./contact.module.css"
import SectionHeader from "@/components/sectionHeader/sectionHeader"

const contactPage=()=>{
    return(
       <section className={styles.contact}>
        <SectionHeader title="Get in Touch" description="Contact me through any means, as shown below"/>
        <div className={styles.contactContainer}>
        <div className={`container ${styles.contactWrapper}`}>

            <Link href="mailto:fonyyuyjudegita@gmail.com" className={`${styles.contactOption} ${styles.btn1}`}  target="_blank " rel="noopener noreferrror">
                <MdOutlineEmail className={styles.contactIcon}/>
            </Link>

            <Link href="mailto:fonyyuyjudegita@gmail.com"  className={`${styles.contactOption} ${styles.btn2}`}  target="_blank " rel="noopener noreferrror">
                <RiMessengerLine className={styles.contactIcon}/>
            </Link>

            <Link href="https://wa.me/+237672792563" className={`${styles.contactOption} ${styles.btn3}`} target="_blank " rel="noopener noreferrror">
                <BsWhatsapp className={styles.contactIcon}/>
            </Link>
        </div>

        <div className={styles.line}></div>

        <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
        </div>
       </section>
    )
}

export default contactPage