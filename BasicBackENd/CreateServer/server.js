//Step1: Create a folder
//Step2: Move Into that folder
//Step3: npm init -y
//Step4: Open Folder using  VSCODE
//Step5: npm i express
//Step6: Create server.js

//server initiate
const express = require('express');
const app = express();

//used to parser req.body in express --> PUT or POST
const bodyParser = require('body-parser');

//Specifically parse JSON data and it to the request.body object
app.use(bodyParser.json());



// GET request
app.get('/', (req, res) => {
    res.send("hello jee, kaise ho");
});


//POST request
app.post("/cars/fronx",(request,response) =>{
    const {name,age} = request.body;

    console.log(name);
    console.log(age);
    console.log("Muskan Awasthi");
    response.send("form completed");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
.then(() => {
    console.log("Connection Successful");
})
.catch((error) => {
    console.error("Connection Failed:", error);
});
// Start server
app.listen(3000, () => {
    console.log("Server Started at port no. 3000");
});

