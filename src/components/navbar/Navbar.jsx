"use client"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { FaBars } from "react-icons/fa6"
import { AiOutlineClose } from "react-icons/ai"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import "../../app/main.css"
import Image from "next/image"



//  ARRAY OF NAV ITEMS
const data = [

    { id: 1, link: '/', caption: "Home" },
    { id: 2, link: "/about", caption: "About" },
    { id: 3, link: "/activities", caption: "Activities" },
    { id: 4, link: "/branches", caption: "Branches" },
    { id: 3, link: "/contact", caption: "Contact" }



]

const Navbar = () => {
    //  OPEN AND CLOSE NAVBAR LOGIC
    const [navOpen, setNavOpen] = useState(false);
    const path = usePathname();

    // check if user is on screen larger than 600px
    useEffect(() => {
        if (window.innerWidth > 600) {
            setNavOpen(true)
        }
    }, [navOpen])
    const handleNavigation = () => {
        setNavOpen(!navOpen)
    }

    const closeNavHandler = () => {
        if (window.innerWidth <= 600) {
            setNavOpen(false)
        }
    }



    return (
        <nav className={styles.nav}>
            {/* left hand side of navbar */}
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.navLogo} onClick={closeNavHandler}>
                    <Image src="/logo (2).png" alt="logo" width={40} height={40} />
                </Link>

                {/* right hand side of navbar */}
                {navOpen && <ul className={styles.navItems}>
                    {data.map(({ id, link, caption }) => (
                        <li key={id}>
                            <Link href={link} onClick={closeNavHandler} className={`${path === link ? styles.active : styles.notActive}`}>{caption}</Link>
                        </li>
                    ))}
                </ul>
                }



                {/* our nav buttons */}
                <div className={styles.navBtns}>

                    <button className={styles.navBtn} onClick={handleNavigation}>
                        {navOpen ? <AiOutlineClose color="#fff" /> : <FaBars color="#fff" />}
                    </button>
                </div>
            </div>


        </nav>
    )

}

export default Navbar