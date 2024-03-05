import { faqsData } from "./FaqsData";
import FaqsItem from "./FaqsItem";
import styles from "./faqs.module.css"

const Faqs=()=>{
    return(
        <section className={styles.section}>
<h2>Frequently Ask Questions</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laboriosam repellat in?</p>
<div className={`container ${styles.container}`}>

{faqsData.map(({id, title, description})=>(
    <FaqsItem key={id} title={title} description={description}/>
))}

</div>

        </section>
    )
}

export default Faqs;
