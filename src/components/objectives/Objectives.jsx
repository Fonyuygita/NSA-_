
import Image from "next/image"
import styles from "./objective.module.css"
import { FaDesktop } from "react-icons/fa6"
import SectionHeader from "../sectionHeader/sectionHeader"
import Card from "../card/Card"

const Objectives=()=>{

const objectiveData=[
    {
        id:1,
        title:"Motto",
        description:"To conserve the motto of the association: Unity is Strength, which is the quest for progress, loyalty and social justice",
     icon:<FaDesktop />,
    },

    {
        id:2,
        title:"Mobilization",
        description:"To mobilize, rally and galvanize all the Noni students into a united force with the aim of promoting mutual trust and understanding; Encouraging the advancement of education in Noni;",
       icon:<FaDesktop />
    },

    {
        id:3,
        title:"Growh",
        description:"Encouraging the growth of a sound and healthy community; Reviving, portraying and preserving our culture; Discouraging every form of mal practices, among youths as a means of survival and further encouraging them to rely on hard work for it pays.",
        icon:<FaDesktop />,
    },
    
    
]

    return(
        <section>
        <SectionHeader title="Our Objectives" description="The services we offer"/>

        <div className={`container ${styles.container}`}>
            {objectiveData.map(({id, icon, title, description})=>(
                <Card key={id} className={styles.service}>
                    <span>{icon}</span>
                    <h5>{title}</h5>
                    <p>{description}</p>

           </Card>
            ))}
        </div>
    </section>

    )
}

export default Objectives