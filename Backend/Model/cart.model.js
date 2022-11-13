const mongoose=require("mongoose")

const CartSchema= mongoose.Schema({
        id:String,
        title:String,
        img1:String,
        img2:String,
        img3:String,
        ancestor:{type: Array},
        mrp:Number,
        strike:Number,
        discount:Number,
        qty:Number
    })


const CartModel=mongoose.model("cart",CartSchema)

module.exports={CartModel}