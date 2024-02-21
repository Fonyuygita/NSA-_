

import Link from "next/link";
import styles from "./Navbar.module.css";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
 
  return (
    <div className={styles.container}>
       <Link href="/" className={styles.logo}>
        <Image src="/logo (2).png" alt="logo" width={42} height={42} className={styles.Imglogo}/>
       </Link>
      <div>
        <Links/>
      </div>
    </div>
  );
};


export default Navbar