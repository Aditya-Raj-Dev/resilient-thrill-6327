const {Router}=require("express")
const {authentication}=require("../Auth/Auth")
const { GetCart, Postcart, Deletecart } = require("../Controller/cart.controller")
 
const CartRouter=Router()




CartRouter.get("/", GetCart)
CartRouter.post("/", Postcart)
CartRouter.delete("/:_id",Deletecart)



module.exports={CartRouter}



