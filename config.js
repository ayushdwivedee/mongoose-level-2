const mongoose=require("mongoose");
const dotenv=require("dotenv").config()
const url=process.env.mongo_url


const connectToDB=async()=>{
    try {
        await mongoose.connect(url)
        console.log("connected to DB")
    } catch (error) {
        console.log("DB connectin failed")
    }
    
}
module.exports=connectToDB