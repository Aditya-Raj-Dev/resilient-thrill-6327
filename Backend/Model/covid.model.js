const mongoose =require("mongoose")
const CovidSchema= mongoose.Schema({
    id:String,
    name:String,
    img:[String],
    price:Number,
    cost: Number,
    off: String,
    pack: String
})


const CovidModel=mongoose.model("covid",CovidSchema)

module.exports={CovidModel}