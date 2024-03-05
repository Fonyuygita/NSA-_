import React from "react"
import Link from "next/link"

import {  FaBaseball, FaHandPeace } from "react-icons/fa6"
import {  FaUnity,FaSchool } from "react-icons/fa6"

import styles from "./services.module.css"

const ServicesSection=()=>{
    return(
        <section className={styles.services}>
        <h3 className={styles.header}>Activities</h3>
        <div className={`container ${styles.servicesWrapper}`}>
            <Link href="/services" className={`btn ${styles.service}`}>
                <span className={styles.icon}><FaUnity color="#fff"/></span>
                <h6 className={styles.title}>Unity</h6>
            </Link>
            <Link href="/services" className={`btn ${styles.service}`}>
                <span className={styles.icon}><FaBaseball color="red"/></span>
                <h6 className={styles.title}>Sport</h6>
            </Link>
            <Link href="/services" className={`btn ${styles.service}`}>
                <span className={styles.icon}><FaHandPeace color="#fff"/></span>
                <h6 className={styles.title}>Culture</h6>
            </Link>
            <Link href="/services" className={`btn ${styles.service}`}>
            <span className={styles.icon}><FaSchool color="red"/></span>
            <h6 className={styles.title}>Education</h6>
        </Link>
        </div>

       </section>
    )
}

export default ServicesSection