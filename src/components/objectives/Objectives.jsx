
import Image from "next/image"
import styles from "./objective.module.css"
import { FaDesktop, FaNetworkWired, FaUsers } from "react-icons/fa6"
import SectionHeader from "../sectionHeader/sectionHeader"
import Card from "../card/Card"
import { FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa"

const Objectives = () => {

    const objectiveData = [
        {
            id: 1,
            title: "Motto",
            description: " `Kentaashe nu Mvungay` (Unity Is Strength)",
            icon: <FaDesktop />,
        },

        {
            id: 2,
            title: "Mobilization",
            description: "To mobilize, rally and galvanize all the Noni students into a united force with the aim of promoting mutual trust and understanding; Encouraging the advancement of education and culture both in and out of Noni",
            icon: <FaDesktop />
        },

        {
            id: 3,
            title: "Growth",
            description: "Encouraging the growth of a sound and healthy community; Reviving, portraying and preserving our culture; Discouraging every form of mal practices, among youths as a means of survival and further encouraging them to rely on hard work for it pays.",
            icon: <FaDesktop />,
        },

        {
            id: 4,
            title: "Unity",
            description: "Fostering unity and collaboration among members; Creating a supportive environment for all students to thrive academically and socially; Embracing diversity and inclusivity in all our endeavors.",
            icon: <FaUsers />,
        },
        {
            id: 5,
            title: "Leadership",
            description: "Developing leadership skills among students; Providing opportunities for personal and professional growth; Empowering future leaders with the knowledge and tools to make a positive impact in their communities.",
            icon: <FaChalkboardTeacher />,
        },
        {
            id: 6,
            title: "Community Engagement",
            description: "Engaging with the local community through service projects and initiatives; Building strong relationships with stakeholders; Contributing positively to the betterment of the society we are part of.",
            icon: <FaHandsHelping />,
        },
        {
            id: 7,
            title: "Networking",
            description: "Facilitating networking opportunities for students; Connecting individuals with similar interests and goals; Building a strong network of support and collaboration within and beyond the association.",
            icon: <FaNetworkWired />,
        }

    ]

    return (
        <section>
            <SectionHeader title="Our Objectives" description="The services we offer" />

            <div className={`container ${styles.container}`}>
                {objectiveData.map(({ id, icon, title, description }) => (
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