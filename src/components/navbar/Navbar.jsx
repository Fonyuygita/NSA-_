

import Link from "next/link";
import styles from "./Navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
 
  return (
    <div className={styles.container}>
       <Link href="/" className={styles.logo}>NOSA</Link>
      <div>
        <Links/>
      </div>
    </div>
  );
};


export default Navbar