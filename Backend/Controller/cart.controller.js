const { CartModel } = require("../Model/cart.model")

const GetCart=async (req,res)=>{
   const data= await CartModel.find()
    res.send({"data":data})
}

const Postcart=async(req,res)=>{
 const {id,name,img,cost,price,off,qty}=req.body;
 const new_data= CartModel({
    id,name,img,cost,price,off,qty
 })
await new_data.save()
 res.send({"msg":"Product Added To The Cart"})
}

const Deletecart=(req,res)=>{

}

const Updatecart=(req,res)=>{

}

module.exports={GetCart,Postcart,Deletecart,Updatecart}