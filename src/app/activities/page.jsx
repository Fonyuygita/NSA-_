"use client"
import React, {useState} from 'react'
import {Data} from "./activityData"
import CategoryButton from './CategoryButton'
import Activity from '@/components/activity/Activity'
import SectionHeader from '@/components/sectionHeader/sectionHeader'

const activityPage=()=>{

    const [projects, setProjects]=useState(Data)
    // console.log(projects);

    const searchCategory=Data.map((item)=>(
        item.title
       
    ))
    console.log(searchCategory)
const uniqueCategory=["all", ...new Set(searchCategory)];
console.log(uniqueCategory);

// Function to filter our categories
const filterProjectHandler=(category)=>{
    if(category==="all") {
        setProjects(Data)
return;
    }


    const filterProject=Data.filter(project=> project.category===category);
    setProjects(filterProject)
   
}

    return(
        <section>   
         <SectionHeader title="My Projects" description="Go ahead and filter my reent projects"/>
    <div className="container">
    <CategoryButton categories={uniqueCategory} filterProjectProp={filterProjectHandler}/>
    <Activity projects={projects}/>
    </div>
    </section>

    )
}

export default activityPage