const mongoose=require("mongoose")

// const UserSchema= mongoose.Schema({
//     name:{type:String, required:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true}
// })

const CartSchema= mongoose.Schema({
        id:
        String,
        name:
        String,
        img:
        Array,
        price:
        Number,
        cost:
        Number,
        off:
        String,
        pack:
        String
        ,qty:Number
    })


const CartModel=mongoose.model("cart",CartSchema)

module.exports={CartModel}