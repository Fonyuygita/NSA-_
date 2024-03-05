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
      socialMedia: [
        { name: 'LinkedIn', icon: <FaLinkedin color="#fff"/>, url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: <FaXTwitter color="#fff"/>, url: 'https://twitter.com/' },
        { name: 'Instagram', icon: <FaFacebook color="#fff"/>, url: 'https://www.facebook.com/nsa.noni' },
      ],
    },

    {

      name: 'Mr Nyowike Briand Banda',
      position: 'General Vice President',
      picture: '/b.png',
      socialMedia: [
        { name: 'LinkedIn', icon: <FaLinkedin color="#fff"/>, url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: <FaXTwitter color="#fff"/>, url: 'https://twitter.com/' },
        { name: 'Instagram', icon: <FaFacebook color="#fff"/>, url: 'https://www.facebook.com/nsa.noni' },
      ],
    },


    {

      name: 'Mr Ndikaka Samuel',
      position: 'Technicaal Advicer',
      picture: '/a2.png',
      socialMedia: [
        { name: 'LinkedIn', icon: <FaLinkedin color="#fff"/>, url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: <FaXTwitter color="#fff"/>, url: 'https://twitter.com/' },
        { name: 'Instagram', icon: <FaFacebook color="#fff"/>, url: 'https://www.facebook.com/nsa.noni' },
      ],
    },

    {

      name: 'Shey Dieudonne Ngwang',
      position: 'National Organising secretary.',
      picture: '/f.png',
      socialMedia: [
        { name: 'LinkedIn', icon: <FaLinkedin color="#fff"/>, url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: <FaXTwitter color="#fff"/>, url: 'https://twitter.com/' },
        { name: 'Instagram', icon: <FaFacebook color="#fff"/>, url: 'https://www.facebook.com/nsa.noni' },
      ],
    },

    {

      name: 'Mr Idirisu Kabiru: National ',
      position: 'Financial Secretary of NSA ',
      desc: "I am also the Financial Secretary of NSA Douala Branch",
      picture: '/e.png',
      socialMedia: [
        { name: 'LinkedIn', icon: <FaLinkedin color="#fff"/>, url: 'https://www.linkedin.com/' },
        { name: 'Twitter', icon: <FaXTwitter color="#fff"/>, url: 'https://twitter.com/' },
        { name: 'Instagram', icon: <FaFacebook color="#fff"/>, url: 'https://www.facebook.com/nsa.noni' },
      ],

    }

  ]

  return (
    <section className={styles.container}>
      <SectionHeader title="Our Executive" description="The services we offer The services we offerThe services we offerThe services we offerThe services we offer" />



      <div className={styles.cardContainer}>
        <div className={`${styles.container} ${styles.teamContainer}`}>


{Executives.map(({name, position,  picture,socialMedia })=>(
  <article className={styles.teamMember} key={name}>
  <div class={styles.teamMemberImg}>
  <Image src={picture} alt="" width={100} height={100} className={styles.img} object-fit="cover" />

</div>
<div class={styles.teamInfo}>
  <h3>{name}</h3>
  <p>{position}</p>
</div>


<div class={styles.teamMemberSocials}>
{socialMedia.map(({url, name, icon})=>(
  <Link href={url} className={styles.social} key={name}>
  {icon}
</Link>

))}

</div>

  </article>


))}

   

        </div>
      </div>


    </section>
  )
}

export default Executives