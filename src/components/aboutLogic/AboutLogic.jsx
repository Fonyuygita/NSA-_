"use client"

import React, { useState } from 'react'
import styles from "../../app/about/about.module.css"
import Image from 'next/image'
const AboutLogic = () => {

  const [readMore, setReaMore] = useState(false)

  const handleReadMore = () => {
    setReaMore(!readMore);
  }

  return (
    <div className={styles.history}>
      <h2 className={styles.historyHeader}>Brief <span>History</span></h2>
      <div className={styles.content}>
        <p className={styles.aboutContent}>
          It is often said some people were born great, some achieved greatness while some had greatness entrust in them.this statement holds true to the Noni Students Association which was born great, and has been able to produce and enthrust greatness into the lives of the noni people. The founding fathers and the pioneer president of this prestigious association did not for any reason make a mistake for the birth of this great child. It is therefore evident that only a great man could give birth to such a great child such as NSA.......
        </p>
        {!readMore &&
          <button className={`btn  ${styles.readMore}`} onClick={handleReadMore}>Read more</button>
        }

        {readMore &&
          <p>As a form four student in Sasse College, in 1957/1959 academic year, KONGLIMNYUY Joseph KWI was made a library attendant., thanks to his brilliant results. As a serious and curious student, he spent his time reading books, while serving as the then library attendant. In the course of reading, he came across a document titled Roman Catholic Student movement in Rome and quickly thought of creating a Roman Catholic Student movement in Nkor.</p>
        }

      </div>


      <div className={styles.nsaLogo}>

        <Image src="/re2.svg" width={100} height={100} alt="logo" className={styles.float} object-fit="cover" />

      </div>





    </div>

  )
}

export default AboutLogic
