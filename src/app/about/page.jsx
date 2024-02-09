import Image from "next/image";
import styles from "./about.module.css"

const aboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Noni Students’ Association</h1>
      <div className={styles.aboutContainer}>
      <div className={styles.textLeft}>
      <p className={styles.text}>
        Noni Students’ Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon. Created in December 1960 in Djottin Noni, the Association had as pioneer president Hon. Konglimnyuy Joseph Nkwi and as current General President Mr. Ndiyun Robert Kosho. The association operates through a federal system, with the General Assembly as the main decision-making organ, and the General Executive Bureau vested with the powers to oversee the smooth functioning of the association.
      </p>

      <p className={styles.text}>
        At the lower level, there exist semi-autonomous branches spread across the principal villages of Noni, the major cities of Cameroon, and in the diaspora. Each branch has its general assembly and executive bureau under the leadership of a branch president.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Read More</button>
        {/* <button className={styles.button}>Contact</button> */}
      </div>
      </div>

      <div className={styles.textRight}>
<div className={styles.imgContainer}>
        <Image src="/img2.png" alt="image" width={360} height={250} objectFit="cover" />
        </div>
    
      </div>
      </div>

      <img className={styles.image} src="/logo (2).png" alt="Association Logo" />
      {/* Google map goes here */}
      <div className={styles.mapContainer}>
        <iframe
          className={styles.mapBox}
          height="200"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=futru%20%20Nkwen&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          scrolling="no"
        ></iframe>
   
    </div>
    </div>
  );
};

export default aboutPage;