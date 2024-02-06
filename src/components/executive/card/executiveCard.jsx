import Image from "next/image";
import styles from "./executiveCard.module.css"


const ExecutiveCard = ({ name, position, picture, socialMedia, desc }) => {
    return (
      <div className={styles.card}>
        <Image className={styles.picture} src={picture} alt={name} objectFit="cover" height={100} width={100} />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.position}>{position}</p>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.socialMedia}>
          {socialMedia.map((media, index) => (
            <a key={index} href={media.url} className={styles.socialMediaLink}>
              <Image src={media.icon} alt={media.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExecutiveCard;