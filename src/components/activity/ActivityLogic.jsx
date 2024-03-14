"use client"

import React, { useState } from 'react'
import SectionHeader from '../sectionHeader/sectionHeader'
import CategoryButton from '@/app/activities/CategoryButton'
import Activity from './Activity'
import styles from "../../app/activities/activity.module.css"
import { Data } from '@/app/activities/activityData'

const ActivityLogic = () => {
    const [activities, setActivities]=useState(Data)
    // console.log(activities);

    const searchCategory=Data.map((item)=>(
        item.category
       
    ))
    console.log(searchCategory)
const uniqueCategory=['all',  ...new Set(searchCategory)];
console.log(uniqueCategory);

// Function to filter our categories
const filterProjectHandler=(category)=>{
    if(category==="all") {
        setActivities(Data)
return;
    }


    const filterProject=Data.filter(project=> project.category===category);
    console.log(filterProject);
    setActivities(filterProject)
   
}
  return (
    <section className={styles.section}>   
    <SectionHeader title="Our activities" description="Explore Our activities, Both recent and historic events"/>
<div className="container">
<CategoryButton categories={uniqueCategory} filterProjectProp={filterProjectHandler}/>
<Activity activities={activities}/>
</div>
</section>
  )
}

export default ActivityLogic
