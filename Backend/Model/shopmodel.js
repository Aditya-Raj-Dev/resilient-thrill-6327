const mongoose=require("mongoose")


const ShopScema=new mongoose.Schema({
    id:String,
    img:String,
    title:String
})



const Shopmodel=mongoose.model("shop",ShopScema)

module.exports={Shopmodel}