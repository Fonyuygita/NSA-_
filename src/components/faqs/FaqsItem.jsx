"use client"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import styles from "./faqs.module.css"
import { useState } from "react"

const FaqsItem=({ title, description})=>{
    const [open, setOpen]=useState(false);

    const handleClick=()=>{
        setOpen(!open)
    }
    return(
        <article className={`${styles.faq} ${open ?  styles.open : ""}`} onClick={handleClick}>
            <div className={styles.width}>
            <span>{open ? <AiOutlineMinus/> : <AiOutlinePlus/>} </span>
            <h6>{title}</h6>
            </div>
            {open && 
            <p>{description}</p>
            
            }
            
        </article>
    )
}

export default FaqsItem