
import Image from "next/image"
import styles from "./objective.module.css"

const Objectives=()=>{

const objectiveData=[
    {
        id:1,
        title:"Motto",
        description:"To conserve the motto of the association: Unity is Strength, which is the quest for progress, loyalty and social justice",
        logo:"/"
    },

    {
        id:2,
        title:"Mobilization",
        description:"To mobilize, rally and galvanize all the Noni students into a united force with the aim of promoting mutual trust and understanding; Encouraging the advancement of education in Noni;",
        logo:"/"
    },

    {
        id:3,
        title:"Growh",
        description:"Encouraging the growth of a sound and healthy community; Reviving, portraying and preserving our culture; Discouraging every form of mal practices, among youths as a means of survival and further encouraging them to rely on hard work for it pays.",
        logo:"/"
    },
    
    
]

    return(
<div className={styles.container}>
    <div className={styles.description}>
    <h1 className={styles.title}> Our Objectives</h1> 
    <p className={styles.des}>Some of the aims and  The main objectives of our organisation.</p>
    </div>
   
<div className={styles.objContainer}>
    <div className={styles.imgContainer}>
        <div className={styles.imgBox}>
<Image src="/img1.png" alt="objective" fill  className={styles.imgO}/>
</div>

    </div>
<div className={styles.oText}>
        {objectiveData.map((data)=>(
 <div className={styles.obtext} key={data.title}>
    {/* <Image src="/themes.svg" alt="logo" width={20} height={20} className={styles.icon}/> */}
    <div className={styles.icon}>
        <h className={styles.number}>{data.id}</h>
    </div>
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