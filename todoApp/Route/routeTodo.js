
const express = require('express');
const router  =  express.Router();

const {createTodo} = require('../controller/CreateTodo');
const {getTodo,getTodoById} = require('../controller/getTodo');
const {updateTodo} = require('../controller/updateTodo');
const {deleteById} = require('../controller/deleteTodo');




//define API route 
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteById);




module.exports = router;