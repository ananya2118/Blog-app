import mongoose from "mongoose";

const Connection = async(username,password) =>{

    const URL = `mongodb+srv://${username}:${password}@blog-app.dyzykvh.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log("database connected successfully and hiii !!!!");
    }
    catch(error)
    {
        console.log("error while connecting with the databse" ,error);
    }
}

export default Connection;

