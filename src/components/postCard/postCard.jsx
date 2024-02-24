import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"
import { getPosts } from "@/lib/data"






const PostCard=async()=>{
const post=[
    {
        title:"Wrlcome post",
        desc:"Read about my blog",
        img:"/img3.png",
        date:"12-23-24",
    },
    {
        title:"Wrlcome post",
        desc:"Read about my blog",
        img:"/img1.png",
        date:"12-23-24",
    },
    {
        title:"Wrlcome post",
        desc:"Read about my blog",
        img:"https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date:"12-23-24",
    },

    {
        title:"Wrlcome post",
        desc:"Read about my blog",
        img:"/img2.png",
        date:"12-23-24",
    },

    {
        title:"Wrlcome post",
        desc:"Read about my blog",
        img:"https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date:"12-23-24",
    },
]


const data=await getPosts();
console.log(data);
    
    return(
        <div className={styles.container}>

            {data.map((p)=>(
             <div className={styles.post}>
             <div className={styles.top} key={p.title}>
                 <div className={styles.imgContainer}>
                 <Image src={p.img} alt="post image" fill className={styles.img} />
                 </div>
             <span className={styles.date}>{p.date}</span>
 
             </div>
             <div className={styles.bottom}>
                 <h1 className={styles.title}>{p.title}</h1>
                     <p className={styles.desc}>{p.desc}</p>
                     <Link className={styles.link} href="/blog/post">Read more</Link>
                
             </div>
 
             </div>

            ))}
           

        </div>
    )
}

export default PostCard