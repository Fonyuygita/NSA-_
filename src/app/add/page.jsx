// import { sayHello } from "@/lib/actions"
import { addPost, addUser, deletePost, sayHello } from "@/lib/actions"
import styles from "./add.module.css"


const textPage=()=>{
 
    // const innerActions=async()=>{

    //     "use server"

    //     console.log("waoh! it works");
    // }

    return(

        <div className={styles.container}>
        <form action={addPost}>
            {/* the action you are performing can be an event, button click, onchange event or whatever */}
            <h2>SAY SOMETHING ADDUSER PAGE</h2>
            <input type="text" placeholder="title" name="title" />
            <input type="text" placeholder="desc" name="desc" />
            <input type="text" placeholder="slug" name="slug" />
            <input type="text" placeholder="userId" name="userId" />

            <button>send Message</button>
        </form>

        <form action={deletePost}>
            <input type="text" placeholder="postId" />
            <button>Delete</button>
        </form>
        </div>
   

    )
}

export default textPage