"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./card/TestimonialCard";


const TestimonialsPage = () => {
  const testimonials = [
    {
      name: ' Nkey Vandoline ',
      position: 'National President',
      company: 'N.S.A',
      message: "I fully became a member of this prestigious association in 2020 with the creation of DOUALA BRANCH after being an on and off member since about 2009.By the grace of God I was trusted with a leadership role as president of NSA Douala Branch...a post which I held diligently till August 2022 when I was voted into the National office with my dynamic team and since then, we've been putting in our energy to sustain this association handed down to us by our most respectable predecessors  in the likes of SDO Lanyuy Harry, Dr Ndiyun Robert, Mr Promise Fornjum, Mr Sengka Elvis and a host of others.We successfully organized the 2023 Annual national convention in Bambili against all odds and from the proceedings,  we've been able to assist over 300 kids in Noni with education and also the building of our website" ,
    
      
      
      picture: '/a1.png',
    },
    {
      name: 'NDIKAKA SAMUEL.',
      position: 'Technical Advicer',
      company: 'N.S.A',
      message: 'I started attending NSA in 2005 when I had my ordinary levels. Have been an active member of NSA from 2005 up till date and have held a good number of leadership positions both at the branch and national level. In2008, I was voted the male socio cultural for NSA Din branch. In 2011,I became the branch president. In 2012 I was elected socio cultural for NSA Bambili branch cumulative. 2013 I became vice president of NSA Bambili branch at the same time national organising sec . In 2014 I deleted into the office of the president of NSA Din branch, in 2018 I was the president of NSA Bambili branch though the branch went mute year because of the intensity of the crisis and National vice president for NSA till 2022 when I became the Adviser for NSA till date.',
      picture: '/a2.png',
    },
    // Add more testimonial objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
   

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
 

  return (
   

    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
      
        <TestimonialCard
          key={index}
          name={testimonial.name}
          position={testimonial.position}
          company={testimonial.company}
          message={testimonial.message}
          picture={testimonial.picture}
        />
      ))}
       </Slider>

   
  );
};

export default TestimonialsPage;