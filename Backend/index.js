const express = require('express');
const { connection } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    console.log({"msg": "Welcome to Pharmesy"});
})



const PORT = process.env.PORT || 8080;
app.listen(PORT, async()=>{
    try{
        await connection;
        console.log('Connect to DB server running on PORT'+ PORT);
    }catch(err){
        console.log("Error to connectiong DB-server");
        console.log(err);
    }
})