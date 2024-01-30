import Image from "next/image"
import styles from "./about.module.css"

const aboutPage=()=>{
    return(
        <div className={styles.container}>
{/* LEFT HAND SIDE */}

            <div className={styles.textContainer}>
                <h2 className={styles.title}>About Agency</h2>
                <h1 className={styles.subtitle}>We create digital ideas that are bigger, bollder and better</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, nihil, illo odio repellendus distinctio labore neque sequi voluptatem, eius quas quaerat obcaecati modi!</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                    <h1>12k Member</h1>
            <p>All Noni</p>
                    </div>

                    <div className={styles.box}>
                    <h1>12k Member</h1>
            <p>All Noni</p>
                    </div>

                    <div className={styles.box}>
                    <h1>12k Member</h1>
            <p>All Noni</p>
                    </div>
                </div>
            </div>

            {/* RIGHT HAND SIDE */}
            <div className={styles.imgContainer}>
<Image src="/about.png" alt="about image" fill  className={styles.img}/>

            </div>
           
        </div>
    )
}

export default aboutPage