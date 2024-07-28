const express=require("express");
const movieRoutes = require("./Routes/movie.routes");
const connectToDB = require("./config");
const server=express()
const port=8080;

server.use(express.json())
server.use("/movies",movieRoutes)


server.listen(port,async()=>{
    try {
        connectToDB()
        console.log(`server is running on port ${port} `)
    } catch (error) {
        console.log("Either server or db file failure")
    }
})