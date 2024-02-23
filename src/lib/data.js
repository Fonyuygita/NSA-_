// CREATE OUR REQUEST END POINTS HERE


import { Post, User } from "./models";
import { isConnectedToDB } from "./db";

// GET MULTIPLE POSTS
export const getPosts= async ()=>{
    try{
        // connect to the database
      isConnectedToDB();
        // return all the post we have
        const posts=await Post.find()
        return posts;

    }



    catch(error){
        console.log("error occured, while getting data from the database");
        new Error(err)
    }

}


// ROUTES TO GET SINGLE POST

export const getPost=(slug)=>{
    try{
        isConnectedToDB()
        // const post=Post.find({slug: slug})
        // saame since, we are using the samename
        const post=Post.find({slug});

    }
    catch(error){
        console.log("error occured while getting single posts");
        new Error(error);
    }
}

// USER : GET ALL USESR (USER ROUTES)

export const getUsers=async()=>{
    try{
       isConnectedToDB()
        // get multiple users
        const users=await User.find();
        return users;
    }
    catch(error){
        console.log("Error occured, while getting a single user");
        new Error(error);
    }
}
// FETCH A SINGLE USER:

export const getUser=async(id)=>{

    try{

   isConnectedToDB()
    const user=await User.findById(id);
    return user;
    }
    catch(error){
        console.log("erro occured while fetching single user")
        new Error(error)
    }
    
}