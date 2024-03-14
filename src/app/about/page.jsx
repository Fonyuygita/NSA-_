

import Image from "next/image"

import styles from "./about.module.css"
import me from "../../../public/ac4.png"
import SectionHeader from "@/components/sectionHeader/sectionHeader"
import Faqs from "@/components/faqs/Faqs.jsx"
import AboutLogic from "@/components/aboutLogic/AboutLogic"

export const metadata={
    title:"About"
}


const AboutPage=()=>{


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
        Noni Students’ Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon. Created in December 1960 in Djottin Noni, the Association had as pioneer president Hon. Konglimnyuy Joseph Nkwi and as current General President Mrs Nkey Vandoline. The association operates through federal system, with the General Assembly as the main decision-making organ, the General Executive Bureau vested with the powers to oversee the smooth functioning of the association. At the lower level there exist semi-autonomous branches spread across the principal villages of Noni, the major cities of Cameroon and in the diaspora, with each branch having its general assembly and executive bureau under the leadership of a branch president
        </p>

    </article>

        </div>

     <AboutLogic/>
        <Faqs/>
        {/*
         <Link className={styles.supportButton}>
<Link href="" className={styles.reactIcon}>
<FaMoneyBillTransfer color="black" size={30}/>
</Link>
<span>Support</span>

</Link>  
    
    */}
 
       </section>
    )
}

export default AboutPage