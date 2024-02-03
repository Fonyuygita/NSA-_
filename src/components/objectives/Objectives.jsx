
import Image from "next/image"
import styles from "./objective.module.css"

const Objectives=()=>{

const objectiveData=[
    {
        title:"Motto",
        description:"To conserve the motto of the association: Unity is Strength, which is the quest for progress, loyalty and social justice",
        logo:"/"
    },

    {
        title:"Mobilization",
        description:"To mobilize, rally and galvanize all the Noni students into a united force with the aim of promoting mutual trust and understanding; Encouraging the advancement of education in Noni;",
        logo:"/"
    },

    {
        title:"Growh",
        description:"Encouraging the growth of a sound and healthy community; Reviving, portraying and preserving our culture; Discouraging every form of mal practices, among youths as a means of survival and further encouraging them to rely on hard work for it pays.",
        logo:"/"
    },
    
    
]

    return(
<div className={styles.container}>
    <div className={styles.description}>
    <h1 className={styles.title}>Our Objectives</h1> 
    <p className={styles.des}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui numquam tenetur minima.</p>
    </div>
   
<div className={styles.objContainer}>
    <div className={styles.imgContainer}>
        <div className={styles.imgBox}>
<Image src="/img1.png" alt="objective" fill  className={styles.imgO}/>
</div>

    </div>
<div className={styles.oText}>
    <div className={styles.obtext}>
        <h1 className={styles.objTitle}>Motto</h1>
        <p className={styles.objDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum placeat sit natus!</p>
    </div>

   
        {objectiveData.map((data)=>(
 <div className={styles.obtext}>
<h1 className={styles.objTitle}>{data.title}</h1>
<p className={styles.objDesc}>{data.description}</p>
</div>

        ))}
       
    

    


</div>

</div>

</div>
    )
}

export default Objectives