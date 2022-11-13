const { CartModel } = require("../Model/cart.model")
const cors=require("cors")
const GetCart=async (req,res)=>{
   const data= await CartModel.find()
    res.send({"data":data})
}

const Postcart=async(req,res)=>{
 const {id, title, img1,img2,img3,ancestor, mrp,strike,discount, qty}=req.body;
 const new_data= CartModel({
   id, title, img1,img2,img3,ancestor, mrp,strike,discount, qty
 })
await new_data.save()
 res.send({"msg":"Product Added To The Cart"})
}

const Deletecart=(req,res)=>{

}

const Updatecart=(req,res)=>{

}

module.exports={GetCart,Postcart,Deletecart,Updatecart}