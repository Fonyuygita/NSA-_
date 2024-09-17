
import styles from "./sectionHeader.module.css"


const SectionHeader = ({ title, description }) => {

    // Function to split the title into words
    const splitTitle = title.split(' ');
    const lastWord = splitTitle.pop(); // Remove and get the last word
    return (
        <header className={`${styles.sectionHeader}`}>
            <h2 className={styles.title}>
                {splitTitle.join(' ')}{' '}
                <span className={styles.lastWord}>{lastWord}</span>
            </h2>
            <p className={styles.desc}>{description}</p>

        </header>
    )
}

export default SectionHeader