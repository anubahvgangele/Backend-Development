const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now,
        },
        Liked:{ 
            type:Boolean,
            required:true,
            default:false
        },
        comment:{
            type:String,
            required:true,
            maxlength:300
        },
        post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
        }
        
    }
)
module.exports  = mongoose.model("Like",LikeSchema);