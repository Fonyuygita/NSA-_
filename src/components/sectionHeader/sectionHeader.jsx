
import styles from "./sectionHeader.module.css"


const SectionHeader=({title, description})=>{
    return(
        <header className={`${styles.sectionHeader}`}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{description}</p>

        </header>
    )
}

export default SectionHeader