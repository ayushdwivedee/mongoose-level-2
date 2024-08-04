const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  rating: Number,
  releaseDate: Date,
});

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  age:Number,
  role:{type:String}
},{versionKey:false});
const userModel=mongoose.model("User",userSchema);
const movieModel = mongoose.model("Movie", movieSchema);
 
module.exports = { movieModel, userModel };
