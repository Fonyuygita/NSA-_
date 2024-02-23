import mongoose from "mongoose"

// Check if we already have an existing connection

const connection={};


export const isConnectedToDB=async ()=>{

try{
    if(connection.isConnected) {
        console.log("Using existing connection");
        return;
      }
      const db = await mongoose.connect(process.env.MONGO);
      connection.isConnected = db.connections[0].readyState;

}

catch(err){

    console.log("error occured while connecting");
    
   

}

} 