import ExecutiveCard from "./card/executiveCard";
import styles from "./executive.module.css"

const Executives=()=>{

    const Executives = [
      {

        name: 'Mrs Nkey Vandoline',
        position: 'General President ',
        picture: '/a.png',
        desc:"Being a member of NSA has brought me so far and I wish I had started this journey even earlier. ",
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
        desc:"I am also the Secretary General of NSA Mbinon Branch, Vice Secretary General of NSA Yaoundé Branch.",
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
        desc:"I am also the Vice president of NSA Douala Branch and Auditor of NSA Mbinon Branch",
        socialMedia: [
          { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
          { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
          { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
        ],

      },

      {

        name: 'Mr Idirisu Kabiru: National ',
        position: 'Financial Secretary of NSA ',
        desc:"I am also the Financial Secretary of NSA Douala Branch",
        picture: '/e.png',
        socialMedia: [
          { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
          { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
          { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
        ],

      }
       
      ]

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Our Executives</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae distinctio nulla?</p>

            <div className={styles.cardConatiner}>
{Executives.map((executive)=>(

<ExecutiveCard
name={executive.name}
position={executive.position}
picture={executive.picture}
socialMedia={executive.socialMedia}
desc={executive.desc}
key={executive.name}
/>

))}
</div>
         
        </div>
    )
}

export default Executives