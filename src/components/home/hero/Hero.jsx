"use client"

import Image from "next/image"

import styles from "./hero.module.css"
import { useEffect, useState } from "react"
import Link from "next/link"

const Hero=()=>{
  //data for slide show
  const [currentSlide, setCurrentSlide]=useState(0);

  const data=[
    {
        id:1,
        title:"Noni Elites Empowering Noni Students in Bambili.",
        image:"/e1.png"
    },
    {
        id:2,
        title:"President Emeritus Dr Ndiyun Robert for his PHD defense in Johannesburg-South Africa",
        image:"/Dr.png"
    },
    {
        id:3,
        title:"Football match between NSA Douala Branch and NSA Nkor Branch at ANC 2022 in Douala",
        image:"/e3.png"
    },

    {
      id:4,
      title:"Exciting moments when members of NSA Douala Branch welcomed Mr and Miss NSA 2023 from Bambili.",
      image:"/e4.png"
  },

  {
    id:5,
    title:"A shot with host at CRTV Bamenda.",
    image:"/e8.png"
},

{
  id:6,
  title:"Noni Students at the helm of promoting culture.",
  image:"/e5.png"
},


{
  id:7,
  title:"Cross session of General Assembly of NSA at ANC 2022 DOUALA",
  image:"/e9.png"
},


{
  id:8,
  title:"The National Organising Secretary (Mr Shey Dieudonne Ngwang) with members of Bambili Branch on the occasion of his visit to inspect the stadia and how prepared the branch was for ANC 2023",
  image:"/e10.png"
},


{
  id:9,
  title:"Mr and Mrs NSA of 2023",
  image:"/e11.png"
},






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
      <h1 className={styles.title}>Noni Student Association.</h1>
      <h2 className={styles.title2}>{"`Kentaashe nu Mvungay` (Unity Is Strength)"}</h2>
      </div>
      <p className={styles.desc}>
       Noni Students’ Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon.
      </p>
      <div className={styles.buttons}>
      <Link href="/about" className={styles.button}>About Us</Link>
      <Link href="/contact" className={styles.button}>Contact Us</Link>
      </div>
     
    </div>

    {/*RIGHT HAND SIDE FOR OUR IMAGE */}
    <div className={styles.imgContainer}>
      {/* <Image src="/hero.gif" alt="" fill className={styles.heroImg}/> */}
      <Image src={data[currentSlide].image} alt="" fill className={styles.image}/>
      <div className={`${styles.overlay} ${styles.overlay_2}`}>
        <h3 className={styles.slideText}>{data[currentSlide].title}</h3>
      </div>
      
    </div>
  </div>


    )
}

export default Hero