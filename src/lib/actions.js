import { revalidatePath } from "next/cache";
import { isConnectedToDB } from "./db";
import { Post } from "./models";

export const sayHello=async()=>{
    "use server"
    // what do I have to do, to maje this function to be server action function, that is it can pderform server functionality stuffs
    // it ahould be an async function
    console.log("my name is finyuy gita");
}

// add a user to our database

export const addUser=async(formData)=>{

    "use server"
    // get data from our forms

    const {name, email, password}=Object.fromEntries(formData)
    // const name=formData.get("name")
    console.log(name, email, password)

}


// add A post
export const addPost=async(formData)=>{
    "use server"

    const {title, desc, slug, userId}=Object.fromEntries(formData);
    

    // put data into the database(mong)
    try{

isConnectedToDB();
const newPost=new Post({
title,
desc,
slug,
userId,   
})

// save it to our database
await newPost.save();
console.log("saved to database")
revalidatePath("/blog")


    }
    catch(error){
        console.log(error);
        new Error(error);
    
    }
}


// delete data

export const deletePost=async(formData)=>{

"use server"
const {id}=Object.fromEntries(formData);
try{
    isConnectedToDB();
    await Post.findByIdAndDelete(id);
    console.log("id deleted from database");
    // revalidate oour path to refresh our action
    revalidatePath("/blog")

}
catch(error){
    console.log(error);
    new Error("error occured while deleting post")
}


}