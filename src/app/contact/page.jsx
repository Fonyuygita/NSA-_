import Image from "next/image"
import styles from "./contact.module.css"

const contactPage=()=>{
    return(
        <div className={styles.container}>
            {/* LEFT HAND SIDE */}
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="contact" fill className={styles.img}/>

            </div>

            {/* RIGHT HAND SIDE */}
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Name and surname" />
                <input type="email" required  placeholder="Your  email address"/>
                <input type="phone number" required  placeholder="Phone number (Optional)"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Messsage"></textarea>
                <button>Send</button>
                        
            </form>
        </div>
            
        </div>
    )
}

export default contactPage