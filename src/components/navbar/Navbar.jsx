

import Link from "next/link";
import styles from "./Navbar.module.css";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async() => {
 const session=await auth();
  return (
    <div className={styles.container}>
       <Link href="/" className={styles.logo}>GIBLOG</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  );
};


export default Navbar