const mongoose=require("mongoose")

const CartSchema= mongoose.Schema({
        id:String,
        name:String,
        img:Array,
        price:Number,
        cost:Number,
        off:String,
        pack:String,
        qty:Number
    })


const CartModel=mongoose.model("cart",CartSchema)

module.exports={CartModel}