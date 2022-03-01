const express=require('express');
const router=express.Router();
const {displayAllTodo, createAndDisplaytodo,updateTodoById,deleteTodo}=require('../handler/todohandler.handler')

router.get('/displaytodo',displayAllTodo);
router.post('/addtodo',createAndDisplaytodo);
router.patch('/updatetodo',updateTodoById);
router.delete('/deletetodo',deleteTodo);

module.exports={
    todoRouter:router
};