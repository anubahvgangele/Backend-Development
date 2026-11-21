const todo = require("../models/todo");

exports.deleteById = async(req,res) =>{
    try{
        const id =  req.params.id;
        await todo.findByIdAndDelete(id);
        res.status(200).json({
        success:true,
        message:"Data deleted successfully"
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Data deleted not successfully"
        })
      
    }
}