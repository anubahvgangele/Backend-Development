const mongoose = require('mongoose');

//connection Establishment

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {

        useNewUrlParser:true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("DB connection successful"))
    .catch( (error) =>{ 
        console.log("Connection estaiblishment faild") 
        console.log(error.message)
        process.exit(1);
    });
}
module.exports = dbConnect;