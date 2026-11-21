const todo = require("../models/todo");

exports.updateTodo = async(req,res) =>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const Todo = await todo.findByIdAndUpdate({_id:id},{title,description,updatedAt: Date.now()});
        res.status(200).json({
            success: true,
            data: Todo,
            message: "Data updated successfully"
        })
    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Data update faild"
        })

    }
}