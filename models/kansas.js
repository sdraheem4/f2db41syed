const mongoose = require("mongoose") 
const kansasSchema = mongoose.Schema({ 
 population: Number, 
 airports: Number, 
 outlets: String
}) 
 
module.exports = mongoose.model("Kansas", kansasSchema)