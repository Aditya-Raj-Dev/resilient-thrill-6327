
const mongoose = require('mongoose');
require('dotenv').config();


const connection = mongoose.connect('mongodb+srv://MedEasy:medeasy@cluster0.gqz1ddb.mongodb.net/?retryWrites=true&w=majority');

module.exports ={connection};