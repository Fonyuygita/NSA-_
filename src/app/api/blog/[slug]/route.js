import { NextResponse } from "next/server";

export const GET=async(request, {params})=>{
    const {slug}=params;

try{
    // get single post here
    const post=await Post.findOne({slug})
    return NextResponse.json(post)

}
catch(err){

    // catch our error

}

}