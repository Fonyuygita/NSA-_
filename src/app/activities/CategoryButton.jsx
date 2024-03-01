
"use client"

import React, {useState} from 'react'

import styles  from "./activity.module.css"


const CategoryButton = ({categories, filterProjectProp}) => {
const [activeCategory, setActivecategory]=useState("all");

 const handleChangeCategory=(active)=>{
    setActivecategory(active);
    filterProjectProp(active)
    
}


  return (
   <div className={styles.categories}>

   {categories.map(category=><button key={category} className={`btn ${styles.cattn} ${activeCategory == category ? "primary" : ""}`} onClick={()=>handleChangeCategory(category)}>{category}</button>)}
   </div>
  )
}

export default CategoryButton
