import React from "react"
import Link from "next/link"
import {MdDesignServices} from "react-icons/md"
import { FaCode } from "react-icons/fa6"
import { FaServer } from "react-icons/fa6"
import { FaLaptopCode } from "react-icons/fa6"
import styles from "./services.module.css"

const ServicesSection=()=>{
    return(
        <section className={styles.services}>
        <div className={`container ${styles.servicesWrapper}`}>
            <Link href="/services" className={`btn ${styles.service}`}>
                <span className={styles.icon}><MdDesignServices color="#fff"/></span>
                <h6 className={styles.title}>Unity</h6>
            </Link>
            <Link href="/services" className={`btn ${styles.service}`}>
                <span className={styles.icon}><FaCode color="#fff"/></span>
                <h6 className={styles.title}>Sport</h6>
            </Link>
            <Link href="/services" className={`btn ${styles.service}`}>
                <span className={styles.icon}><FaLaptopCode color="#fff"/></span>
                <h6 className={styles.title}>Culture</h6>
            </Link>
            <Link href="/services" className={`btn ${styles.service}`}>
            <span className={styles.icon}><FaLaptopCode color="#fff"/></span>
            <h6 className={styles.title}>Education</h6>
        </Link>
        </div>

       </section>
    )
}

export default ServicesSection