const mongoose=require("mongoose")

const movieSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:String,
    rating:Number,
    releaseDate:Date
})

const movieModel=mongoose.model("Movie",movieSchema)
module.exports=movieModel
