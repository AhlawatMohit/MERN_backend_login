const express = require("express");
require('dotenv').config();
const app = express();  
const cors = require("cors");
const DBconnection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth"); 


//DataBase Conncetion
DBconnection();



//MiddleWares
app.use(express.json());
app.use(cors());


//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); 

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
