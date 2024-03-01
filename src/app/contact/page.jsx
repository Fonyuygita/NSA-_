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
        <div className={`container ${styles.contactWrapper}`}>
            <Link href="mailto:fonyyuyjudegita@gmail.com" className={styles.contactOption} target="_blank " rel="noopener noreferrror">
                <MdOutlineEmail className={styles.contactIcon}/>
            </Link>

            <Link href="mailto:fonyyuyjudegita@gmail.com" className={styles.contactOption} target="_blank " rel="noopener noreferrror">
                <RiMessengerLine className={styles.contactIcon}/>
            </Link>

            <Link href="https://wa.me/+237672792563" className={styles.contactOption} target="_blank " rel="noopener noreferrror">
                <BsWhatsapp className={styles.contactIcon}/>
            </Link>
        </div>
       </section>
    )
}

export default contactPage