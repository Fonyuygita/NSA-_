import { faqsData } from "./FaqsData";
import FaqsItem from "./FaqsItem";
import styles from "./faqs.module.css"
import SectionHeader from "../sectionHeader/sectionHeader";

const Faqs = () => {
    return (
        <section className={styles.section}>
            <SectionHeader title="Frequently Ask Questions" description="Welcome to the Noni Student Association, a vibrant community fostering growth, diversity, and academic excellence. Join us for events, networking opportunities, and support as we strive for inclusivity and student success." />


            <div className={`container ${styles.container}`}>

                {faqsData.map(({ id, title, description }) => (
                    <FaqsItem key={id} title={title} description={description} />
                ))}

            </div>

        </section>
    )
}

export default Faqs;
