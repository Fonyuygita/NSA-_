import { isConnectedToDB } from "@/lib/db"
import { Post } from "@/lib/models";

export const GET=async(request)=>{
try{
    isConnectedToDB();
    const posts=await Post.find();
    // return posts.json()
    return NextResponse.json(posts)

}
catch(err){
    // error message here
}
}