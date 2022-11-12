const express = require("express");
const { connection } = require("./config/db");
const { UserModel } = require("./Model/User.model");
require("dotenv").config();
const cors=require("cors")
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const {CartRouter}=require("./Routes/Cart.route")

const app = express();
app.use(cors())
app.use(express.json());


app.use("/cart",CartRouter)

app.get("/", (req, res) => {
  res.send({ "msg": "Welcome to Pharmesy" });
});

//   ****SIGNUP ROUTE***** //

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const data = await UserModel.findOne({ email });
  if (data) {
    res.send({ "msg": "User Already Exhist",toast:"i" });
  } else {
    bcrypt.hash(password, 5, async function (err, hashed_password) {
      if (err) {
        res.send({ "msg": "Please Signup again",toast:"e" });
      } else {
        const new_user = UserModel({
          name,
          email,
          password: hashed_password,
        });
        await new_user.save();
        res.send({ "msg": "Signup Sucessfull" ,toast:"s"});
      }
    });
  }
});

//***** LOGIN ROUTE***** //

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.send({ "msg": "Please Login first" });
  } else {
    const hashed_password = user.password;
    const user_id = user._id;
    bcrypt.compare(password, hashed_password, function (err, result) {
      if (err) {
        res.send({ "msg": "Please Login Again" });
      }
      if (result) {
        var token = jwt.sign({ user_id }, process.env.SECRET_KEY);
        res.send({ "msg": "Login SucessFull", "token": token });
      } else {
        res.send({ "msg": "wrong Credential" });
      }
    });
  }
});


// **** LOGIN BY NUMBER ****** 

// app.post("/login", async (req, res) => {
//   const { number } = req.body;
//   console.log(number)
//   const user = await UserModel.findOne({ number });
//   if (!user) {
//       const new_user = UserModel({
//         number,
//       });
//       await new_user.save();
//       const otp = Math.floor(1000 + Math.random() * 9000);
//       res.send({ "msg": "Signup Sucessfull" ,"otp":otp,"user":new_user});
//   } else {
//     const otp = Math.floor(1000 + Math.random() * 9000);
//     res.send({ "msg": "Signup Sucessfull" ,"otp":otp,"user":user});
//   }
// });



const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connect to DB server running on PORT" + PORT);
  } catch (err) {
    console.log("Error to connectiong DB-server");
    console.log(err);
  }
});
