import { faqsData } from "./FaqsData";
import FaqsItem from "./FaqsItem";
import styles from "./faqs.module.css"
import SectionHeader from "../sectionHeader/sectionHeader";

const Faqs = () => {
    return (
        <section className={styles.section}>
            <SectionHeader title="Frequently Ask Questions" description="The leaders of the Noni Student Association, comprising the executive committee, exemplify strong leadership, dedication, and a commitment to student welfare." />


            <div className={`container ${styles.container}`}>

                {faqsData.map(({ id, title, description }) => (
                    <FaqsItem key={id} title={title} description={description} />
                ))}

            </div>

        </section>
    )
}

export default Faqs;
