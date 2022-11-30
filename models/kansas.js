const mongoose = require("mongoose") 
const kansasSchema = mongoose.Schema({ 
 population: Number, 
 airports:{
    type:Number,
    min:1,
    max:10
 }, 
 outlets: String
}) 
 
module.exports = mongoose.model("Kansas", kansasSchema)