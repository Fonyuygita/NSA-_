import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { isConnectedToDB } from "./db";
import { User } from "./models";
export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({ providers: [ 
    GitHub({
        clientId:process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET,

}),

],

callbacks:{
    async signIn({user, account, profile}){
        console.log(user, account, profile);
        if(account.provider==="github"){
            isConnectedToDB()
            try {
// check if users email doesn exisst in the db and create a new one

// check if sign in user exist in our database
const user=await User.findOne({email:profile.email});

// if user doesn exist do.....

if(!user){
    // creata a new one
    const newUser=new User({
        username:profile.login,
        email:profile.email,
        img:profile.avatar_url,
// isAdmin was a user, so need including 
    });
    await newUser.save();
}


                
            } catch (err) {
                console.log(err);
                return false
            }
        }

        //  IF USER ALREADY EXIST RETURN TRUE
        return true;
    }
}

})