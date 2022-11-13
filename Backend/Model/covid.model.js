const CartSchema= mongoose.Schema({
    id:String,
    name:String,
    img:Array,
    price:Number,
    cost: Number,
    off: String,
    pack: String
})


const CartModel=mongoose.model("covid",CartSchema)

module.exports={CartModel}