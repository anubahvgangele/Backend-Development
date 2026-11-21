const Todo = require("../models/todo");

exports.getTodo = async(req,res) => {
    try{
        const todos = await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire data fetch successfully",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        })

    }
}


exports.getTodoById = async(req,res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        res.status(200).json({
            success:true,
            data:todo,
            message:"data of id: ${id} fetch successfully",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"data unsuccessfull",
        })
    }
}


