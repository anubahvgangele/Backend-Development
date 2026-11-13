
const express = require('express');
const router  =  express.Router();

const {createTodo} = require('../controller/CreateTodo');

//define API route 
router.post("/createTodo",createTodo);

module.exports = router;