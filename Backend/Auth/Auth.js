var jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/User.model");
require("dotenv").config()

const authentication=async (req,res,next)=>{
    const token=req.headers?.authorization;
    if(!token){
        res.send({"msg":"Please Login first"})
    }
    else{
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
             if(err){
                res.send({"msg":"Something Went Wrong"})
             }
             else{
                res.body.user_id=decoded.user_id;
                next()
             }
          });
    }
}

const authorization =(permitedrole)=>{
   return async (req,res,next)=>{
      const user_id=req.body.user_id;
      const user= await UserModel.findOne({user_id})
      const email=user.email;
      if(role){
        if(permitedrole.includes(role)){
            next()
        }
        else{
            res.send({"msg":"Not Authorized"})
        }
      }
    }
}
 

module.exports={authentication,authorization}