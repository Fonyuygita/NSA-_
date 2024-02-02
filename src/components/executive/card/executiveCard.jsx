import styles from "./executiveCard.module.css"


const ExecutiveCard = ({ name, position, picture, socialMedia, desc }) => {
    return (
      <div className={styles.card}>
        <img className={styles.picture} src={picture} alt={name} />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.position}>{position}</p>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.socialMedia}>
          {socialMedia.map((media, index) => (
            <a key={index} href={media.url} className={styles.socialMediaLink}>
              <img src={media.icon} alt={media.name} />
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExecutiveCard;