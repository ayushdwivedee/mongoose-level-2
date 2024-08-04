const express=require("express");
const movieRoutes = require("./Routes/movie.routes");
const connectToDB = require("./config");
const auth = require("./middleware/auth.middleware");
const checkAdmin=require("./middleware/checkAdmin.middleware")
const server=express()
const port=8080;

server.use(express.json())
server.use("/movies",movieRoutes)

server.get("/",(req,res)=>{
    res.json({msg:"home page"})
})

server.get("/cart",auth,(req,res)=>{
    res.json({msg:"cart page"})
})
server.get("/checkout",auth,(req,res)=>{
   
    res.json({msg:"checkout page"})
})

server.get("/update",[auth,checkAdmin],(req,res)=>{
     
    res.json({msg:"update the data"})
})
server.listen(port,async()=>{
    try {
        connectToDB()
        console.log(`server is running on port ${port} `)
    } catch (error) {
        console.log("Either server or db file failure")
    }
})