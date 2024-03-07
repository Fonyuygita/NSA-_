"use client"

import Image from "next/image"

import styles from "./about.module.css"
import me from "../../../public/nsa-students.png"
import Link from "next/link"
import SectionHeader from "@/components/sectionHeader/sectionHeader"
import Faqs from "@/components/faqs/Faqs.jsx"
import { useState } from "react"

const AboutPage=()=>{

    const [readMore, setReaMore]=useState(false)

const handleReadMore=()=>{
    setReaMore(!readMore);
}
    return(
       <section className={styles.about}>
        <SectionHeader title="About Us" description="We are ready to serve all your needs without hessitation"/>
        <div className={`container ${styles.container}`}>
    <article className={styles.image}>
        <Image src={me} alt="nsa" />
    </article>
    <article className={styles.aboutContent}>
        <h4>About NSA</h4>
        <p>
        Noni Students’ Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon. Created in December 1960 in Djottin Noni, the Association had as pioneer president Hon. Konglimnyuy Joseph Nkwi and as current General President Mr. Ndiyun Robert Kosho. The association operates through federal system, with the General Assembly as the main decision-making organ, the General Executive Bureau vested with the powers to oversee the smooth functioning of the association. At the lower level there exist semi-autonomous branches spread across the principal villages of Noni, the major cities of Cameroon and in the diaspora, with each branch having its general assembly and executive bureau under the leadership of a branch president
        </p>

        <Link href="../assets/cv.pdf" className={`btn ${styles.aboutSupport}`} download rel="noopener noreferrer">Support Us</Link>
    </article>

        </div>

        <div className={styles.history}>
        <h2 className={styles.historyHeader}>Brief History</h2>
        <p className={styles.aboutContent}>
        It is often said some people were born great, some achieved greatness while some had greatness entrust in them.this statement holds true to the Noni Students Association which was born great, and has been able to produce and enthrust greatness into the lives of the noni people. The founding fathers and the pioneer president of this prestigious association did not for any reason make a mistake for the birth of this great child. It is therefore evident that only a great man could give birth to such a great child such as NSA.......
        </p>
        {!readMore &&
            <button className={`btn  ${styles.readMore}`}  onClick={handleReadMore}>Read more</button>
        }

        {readMore && 
        <p>As a form four student in Sasse College, in 1957/1959 academic year, KONGLIMNYUY Joseph KWI was made a library attendant., thanks to his brilliant results. As a serious and curious student, he spent his time reading books, while serving as the then library attendant. In the course of reading, he came across a document titled Roman Catholic Student movement in Rome and quickly thought of creating a Roman Catholic Student movement in Nkor.</p>
        }
        


<div className={styles.nsaLogo}>

<Image src="/logo (2).png" width={100} height={100} alt="logo" className={styles.float} object-fit="cover"/>

</div>
        
       

      
        
        </div>

        <Faqs/>
       </section>
    )
}

export default AboutPage