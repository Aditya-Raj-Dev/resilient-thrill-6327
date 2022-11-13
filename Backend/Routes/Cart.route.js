const {Router}=require("express")
const {authentication}=require("../Auth/Auth")
const { GetCart, Postcart, Deletecart } = require("../Controller/cart.controller")
const cors=require("cors")

const CartRouter=Router()
// CartRouter.use(cors())
CartRouter.get("/", GetCart)
CartRouter.post("/", Postcart)
// CartRouter.delete("/:_id",Deletecart)



module.exports={CartRouter}



