const mongoose = require("mongoose");
require('dotenv').config();

module.exports = () => {


    try {
        mongoose.connect(process.env.DB);
        console.log("Connected to DataBase Successfully");
    } catch (error) {
        console.log(error);
    }
}