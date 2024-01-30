"use client"

import Image from "next/image"

import styles from "./hero.module.css"
import { useEffect, useState } from "react"

const Hero=()=>{
  //data for slide show
  const [currentSlide, setCurrentSlide]=useState(1);

  const data=[
    {
        id:1,
        title:"Always fresh & always crispy & always hot",
        image:"/img1.png"
    },
    {
        id:2,
        title:"We Deliver your order wherever you are ",
        image:"/img2.png"
    },
    {
        id:3,
        title:"The bet piza to share with your family",
        image:"/img3.png"
    }

  ]

    // create useEffect to manipulate or  vhange our items
    useEffect(()=>{
      const interval=setInterval(()=>{
          setCurrentSlide((prev)=>prev===data.length-1 ? 0 : prev+1)
      },4000)
      // clean interval to avoid memory leaking
      return ()=> clearInterval(interval)
  },[])

    
   
    return(

    <div className={styles.container}>
    <div className={styles.textContainer}>
      <div className={styles.textHead}>
      <h1 className={styles.title}>Noni Student Association(NSA).</h1>
      <h2 className={styles.title2}>{"`Kentaashe nu Mvungay` (Unity Is Strength)"}</h2>
      </div>
      <p className={styles.desc}>
        
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>About Us</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>

    {/*RIGHT HAND SIDE FOR OUR IMAGE */}
    <div className={styles.imgContainer}>
      {/* <Image src="/hero.gif" alt="" fill className={styles.heroImg}/> */}
      <Image src={data[currentSlide].image} alt="" fill className={styles.image}/>
      <div className={`${styles.overlay} ${styles.overlay_2}`}>
        <h3>{data[currentSlide].title}</h3>
      </div>
      
    </div>
  </div>


    )
}

export default Hero