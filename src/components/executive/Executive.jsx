import Link from "next/link";
import SectionHeader from "../sectionHeader/sectionHeader";
import ExecutiveCard from "./card/executiveCard";
import styles from "./executive.module.css"
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const Executives = () => {

  const Executives = [
    {

      name: 'Mrs Nkey Vandoline',
      position: 'General President ',
      picture: '/a1.png',
      desc: "Being a member of NSA has brought me so far and I wish I had started this journey even earlier. ",
      socialMedia: [
        { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
        { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
      ],

    },

    {

      name: 'Mr Nyowike Briand Banda',
      position: 'General Vice President',
      picture: '/b.png',
      desc: "I am also the Secretary General of NSA Mbinon Branch, Vice Secretary General of NSA Yaoundé Branch.",
      socialMedia: [
        { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
        { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
      ],

    },


    {

      name: 'Mr Nyowike Briand Banda',
      position: 'General Vice President',
      picture: '/a2.png',
      desc: "I am also the Secretary General of NSA Mbinon Branch, Vice Secretary General of NSA Yaoundé Branch.",
      socialMedia: [
        { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
        { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
      ],

    },

    {

      name: 'Shey Dieudonne Ngwang',
      position: 'National Organising secretary.',
      picture: '/f.png',
      desc: "I am also the Vice president of NSA Douala Branch and Auditor of NSA Mbinon Branch",
      socialMedia: [
        { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
        { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
      ],

    },

    {

      name: 'Mr Idirisu Kabiru: National ',
      position: 'Financial Secretary of NSA ',
      desc: "I am also the Financial Secretary of NSA Douala Branch",
      picture: '/e.png',
      socialMedia: [
        { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
        { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
      ],

    }

  ]

  return (
    <section className={styles.container}>
      <SectionHeader title="Our Executive" description="The services we offer The services we offerThe services we offerThe services we offerThe services we offer" />



      <div className={styles.cardContainer}>
        <div className={`${styles.container} ${styles.teamContainer}`}>


{Executives.map(({name, position, description, picture,socialMedia })=>(
  <article className={styles.teamMember} key={name}>
  <div class={styles.teamMemberImg}>
  <Image src={picture} alt="" width={100} height={100} className={styles.img} object-fit="cover" />

</div>
<div class={styles.teamInfo}>
  <h3>{name}</h3>
  <p>{position}</p>
</div>


<div class={styles.teamMemberSocials}>
  <Link href="/" className={styles.social}>
    <FaFacebook color="#fff" />
  </Link>
  <Link href="/" className={styles.social}>
    <FaFacebook color="#fff" />
  </Link>
  <Link href="/" className={styles.social}>
    <FaFacebook color="#fff" />
  </Link>
</div>

  </article>


))}

   

        </div>
      </div>


    </section>
  )
}

export default Executives