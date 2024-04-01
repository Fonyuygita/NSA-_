import EventSection from '@/components/eventSection/eventSection'
import React from 'react'
import styles from "./event.module.css"


const page = () => {
  return (
    <div className={styles.Eventcontainer}>
      <EventSection/>
      
    </div>
  )
}

export default page
