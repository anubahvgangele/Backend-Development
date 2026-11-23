
const liked = require("../model/bloge");

exports.comment = async(req,res) =>{
    try{
        const { comment,user,post,Liked } = req.body;
        const respose = await liked.create({comment,user,post,Liked});

        res.status(201).json({
            success:true,
            data:respose,
            message:"Data stored successfully"
        })
    }
    catch(err){
        console.error(err)
        console.log("Like adding failed")
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,

        })

    }
}