import Image from "next/image"

import styles from "./about.module.css"
import me from "../../../public/nsa-students.png"
import Link from "next/link"
import SectionHeader from "@/components/sectionHeader/sectionHeader"
import Faqs from "@/components/faqs/Faqs.jsx"

const aboutPage=()=>{
    return(
       <section className={styles.about}>
        <SectionHeader title="About Us" description="We are ready to serve all your needs without hessitation"/>
        <div className={`container ${styles.container}`}>
    <article className={styles.image}>
        <Image src={me} alt="aboout gita" />
    </article>
    <article className={styles.aboutContent}>
        <h4>About NSA</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, at libero rem cupiditate molestiae accusamus. Maiores officia sequi deleniti corporis tempore, provident ea. Fuga porro commodi, dolores possimus delectus officiis!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad maiores dolorum reiciendis maxime inventore necessitatibus nesciunt quidem alias consequuntur!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod velit suscipit aliquam, dolorem illo harum dignissimos ex quam nobis rerum nostrum. Fuga architecto quaerat consequatur culpa sunt maiores amet perspiciatis aspernatur odit recusandae, similique quod fugit nam doloribus corrupti.</p>
        <Link href="../assets/cv.pdf" className={`btn primary ${styles.sboutCv}`} download rel="noopener noreferrer">Support Us</Link>
    </article>

        </div>

        <div className={styles.history}>
        <h2 className={styles.historyHeader}>Brief History</h2>
        <p className={styles.historyContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam animi assumenda sed voluptate quae dolorem reiciendis velit unde soluta ipsam voluptatem facilis, hic deserunt mollitia repellendus quo ratione asperiores molestias natus! Aliquam voluptas asperiores, rem, placeat minus nisi dolores nam eius magni a ab voluptatem sit corrupti?</p>

        <div className={styles.secondParagraph}>
<p className={styles.secondParaDesc}>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laudantium quae. Voluptatum, mollitia veritatis beatae dolorum, error soluta quidem doloribus eius voluptate officia, obcaecati consequatur at enim tenetur. Quaerat iure deserunt laudantium, est odio ut quidem distinctio, modi eos harum architecto ex maxime illum natus hic nihil? Beatae voluptas ut iste quaerat dignissimos repellendus corporis minima necessitatibus aliquam, eveniet cupiditate esse unde eum, sint eos molestiae sed voluptate praesentium consectetur pariatur mollitia ea voluptatum. Eaque, possimus blanditiis totam omnis mollitia non aliquam rem sint illo iusto maiores quaerat molestiae dolore nobis. Odit aut illo dolore perferendis ea ipsam ipsum et, minus incidunt nam voluptas minima fuga laboriosam. Quia quisquam sit minima provident amet iste, possimus asperiores odit at esse perferendis dolorum harum, nulla nesciunt corrupti tempore dolores eius adipisci odio, libero eligendi velit. Consequatur optio reiciendis iusto minus voluptatibus facere.
</p>

<div className={styles.nsaLogo}>

<Image src="/logo (2).png" width={100} height={100} alt="logo" className={styles.float} object-fit="cover"/>

</div>
        
        </div>

      
        
        </div>

        <Faqs/>
       </section>
    )
}

export default aboutPage