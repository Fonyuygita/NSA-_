"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Card from "./serviceCards/serviceCard"
import styles from "./services.module.css"


// CARDS DATA

const cards = [
    {
      image: '/e1.png',
      title: 'Unity',
      text: 'PROMOTING AND SUSTAINING THE UNITY OF NONI'
    },

    {
        image: '/e3.png',
        title: 'Encourage',
        text: 'ENCOURAGING THE ADVANCEMENT OF EDUCATION.',
        subText:"welcome t"
      },

      {
        image: '/e6.png',
        title: 'Sport',
        text: 'REGULAR SPORTING COMPETITION DURING ANNUAL CONVENTIONS.'
      },

      {
        image: '/e5.png',
        title: 'UNITY',
        text: 'PROMOTING AND SUSTAINING THE UNITY OF NONI'
      },
  
      {
          image: '/e1.png',
          title: 'ENCOURAGE',
          text: 'ENCOURAGING THE ADVANCEMENT OF EDUCATION.',
          subText:"welcome t"
        },
  
        {
          image: '/e7.png',
          title: 'SPORT',
          text: 'REGULAR SPORTING COMPETITION DURING ANNUAL CONVENTIONS.'
        }

      ]

      // END OF CARD DATA


      // give our slideshow buttons, custom styles|____________________________

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "blue", color:"#fff" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "blue", color:"white" }}
//       onClick={onClick}
//     />
//   );
// }

// end of custom styles__________________________________________

// ------------------------------------------------------------------------

// OUR COMPPONENT-----------------------------------------------------

const Services=()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
 
    return(
        <div className={styles.container}>
            <div className={styles.text}>
            <h1>Our Activities</h1>
            <p>Our various activities to bring Youthss together.</p>
            </div>
          
            <div className={styles.cardContainer}>
            <Slider {...settings}>
            {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} text={card.text} />
      ))}
      </Slider>
            </div>
        </div>
    )
}


// END OF COMPONENT------------------------------------------------------
export default Services