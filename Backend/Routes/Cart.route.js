const {Router}=require("express")
const {authentication}=require("../Auth/Auth")
const { GetCart, Postcart, Deletecart } = require("../Controller/cart.controller")

const CartRouter=Router()


CartRouter.get("/",authentication, GetCart)
CartRouter.post("/",authentication, Postcart)
CartRouter.delete("/:_id",authentication,Deletecart)



module.exports={CartRouter}



