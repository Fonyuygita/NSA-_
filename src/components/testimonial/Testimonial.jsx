"use client"

import { Pagination } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {TestimonialData} from "./testimonial"
import styles from "./Testimonial.module.css"
import Image from 'next/image';



const Testimonial=()=>{
    return(
        <section className={styles.section}>
            <h2>Testimonials</h2>
            <p>Checkout What our Leaders && Members have to say</p>

            <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
    >
      
{TestimonialData.map(({id, name, avatar, profession, quote})=>(
      <SwiperSlide key={id} className={styles.slide}>
        <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
                <Image src={avatar} alt='avatar' width={60} height={60}  object-fit="content"/>
            </div>
        </div>
        <h6 className={styles.name}>{name}</h6>
        <small className={styles.job}>{profession}</small>
        <p className={styles.quote}>{quote}</p>
      </SwiperSlide>


))}
     
      <div className="swiper-pagination"></div>
    
    </Swiper>

        </section>
    )
}


export default Testimonial