const express = require('express');
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000


app.use(express.json());

const routeBloge = require("./route/routeBloge");

app.use('/api/v1',routeBloge);

app.listen(port,()=>{console.log(`Server started at port ${port}`)})


const dbConnect =  require('./config/database');
dbConnect();

app.get("/",(req,res) =>{
    res.send(`<h1>this is home page baby</h1>`);
})
