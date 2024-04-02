
import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { RiMessengerLine } from "react-icons/ri"
import styles from "./contact.module.css"
import SectionHeader from "@/components/sectionHeader/sectionHeader"
import Form from "@/components/Form"
import FixedButton from "@/components/eventBtn/eventButton"



export const metadata={
  title:"Contact"
}



const ContactPage = () => {
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

      <Form/>
      </div>
      <FixedButton/>

    </section>
  )
}

export default ContactPage