
import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"

const blogPage=()=>{
    return(
      
            <div className={styles.card}>
            <PostCard/>
            </div>
      
    )
}

export default blogPage