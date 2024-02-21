
import Link from "next/link"
import styles from "./branch.module.css"
import Image from "next/image"

const Branches=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to our branch</h1>
            <p>To be Constructed</p>
            <div className={styles.boxContainer}>
                <div className={styles.box}>
                  <div className={styles.branchName}> </div>
                    <h1 className={styles.header}>Bambili Branch</h1>
                    <p className={styles.bText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel qui eum asperiores, nobis eaque, aliquid iste incidunt voluptatibus ipsa in blanditiis assumenda.
                    </p>
                    <Link href="#" className={styles.btn}>Know More</Link>
                 
                </div>
                <div className={styles.box}>
                  <div className={styles.branchName}> </div>
                    <h1 className={styles.header}>Bambili Branch</h1>
                    <p className={styles.bText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel qui eum asperiores, nobis eaque, aliquid iste incidunt voluptatibus ipsa in blanditiis assumenda.
                    </p>
                    <Link href="#" className={styles.btn}>Know More</Link>
                 
                </div>


                <div className={styles.box}>
                  <div className={styles.branchName}> 
                    <h1 className={styles.header}>Bambili Branch</h1>
                    <Image src="/logo (2).png" alt="logo" width={50} height={50} objectFit="cover" className={styles.logo}/>
                    </div>
                    <p className={styles.bText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel qui eum asperiores, nobis eaque, aliquid iste incidunt voluptatibus ipsa in blanditiis assumenda.
                    </p>
                    <Link href="#" className={styles.btn}>Learn more</Link>
                 
                </div>



                <div className={styles.box}>
                  <div className={styles.branchName}> </div>
                    <h1 className={styles.header}>Bambili Branch</h1>
                    <p className={styles.bText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel qui eum asperiores, nobis eaque, aliquid iste incidunt voluptatibus ipsa in blanditiis assumenda.
                    </p>
                    <Link href="#" className={styles.btn}>Know More</Link>
                 
                </div>

            </div>
        </div>
    )
}

export default Branches