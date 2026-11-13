const express = require('express');
const app = express();

//load config from env file

require("dotenv").config();

//middleware to parse json request body
const PORT = process.env.PORT || 5000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./Route/routeTodo");

//mount the  todo ASPI routes
app.use('/api/v1',todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})

const dbConnect =  require('./config/database');
dbConnect();

app.get("/",(req,res) =>{
    res.send(`<h1>this is home page baby</h1>`);
})