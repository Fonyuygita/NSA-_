"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Branches",
    path: "/branches",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },

   
];

const socialMedia= [
  { name: 'LinkedIn', icon: '/linkedin.svg', url: 'https://www.linkedin.com/' },
  { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/' },
  { name: 'Instagram', icon: '/facebook.svg', url: 'https://www.instagram.com/' },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  // const pathName = usePathname();

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
       
      </div>
      {open ? (

<Image
className={styles.menuButton}
src="/cross.svg"
alt=""
width={30}
height={30}
onClick={() => setOpen((prev) => !prev)}
/>

      ) : (
        <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      )}
      
      {open && (
        <div className={`${styles.mobileLinks} ${open ? styles.open : styles.close}`}>
          {links.map((link) => (
            
            <NavLink item={link} key={link.title} />
          ))}
          <div className={styles.iconList}>
          {socialMedia.map((icon)=>(
            <Image src={icon.icon} alt="text" width={20} height={20} key={icon.name}/>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
