
import Card from "../serviceCards/serviceCard"
import styles from "./services.module.css"

const cards = [
    {
      image: '/img1.png',
      title: 'Unity',
      text: 'PROMOTING AND SUSTAINING THE UNITY OF NONI'
    },

    {
        image: '/img2.png',
        title: 'Encourage',
        text: 'ENCOURAGING THE ADVANCEMENT OF EDUCATION.',
        subText:"welcome t"
      },

      {
        image: '/img3.png',
        title: 'Sport',
        text: 'REGULAR SPORTING COMPETITION DURING ANNUAL CONVENTIONS.'
      }

]


const Services=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.text}>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur s similique beatae adipisci aperiam pariatur nemo.</p>
            </div>
          
            <div className={styles.cardContainer}>
            {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} text={card.text} />
      ))}
            </div>
        </div>
    )
}

export default Services