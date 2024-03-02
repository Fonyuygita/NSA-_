import React from 'react'
import Card from '../card/Card'
import Image from 'next/image'
import styles from "../../app/activities/activity.module.css"
const Activity = ({activities}) => {
  return (
    <div className={styles.activities}>
    {
        activities.map(({image,  title, text})=>
        <Card key={title} className={styles.activity}>
        <div className={styles.image}>
        <Image src={image} alt="" width={300} height={250}/>
        </div>

        <div className={styles.content}>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className={styles.cCta}>
        

        </div>
        </div>
        
        </Card>
        )
    
    }
      
    </div>
  )
}
export default Activity
