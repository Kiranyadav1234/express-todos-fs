const { getTodoData, createNewTodo,updateChanges,deletetodoById } = require('../service/todofunctionality.service');
const bodyParser = require('body-parser');

const displayAllTodo = async (req, res) => {
    try {
        const allTodoData = await getTodoData('./src/resources/todos.txt');
        res.json({
            "data": allTodoData

        }).status(200);

    } catch (err) {
        res.status(500);
        throw new Error("cant display data");
    }



}
const createAndDisplaytodo = async (req, res) => {
    try {
        const newTask = req.body;
        console.log("req body", newTask);
        const message = await createNewTodo('./src/resources/todos.txt', newTask)

        const allTodoData = await getTodoData('./src/resources/todos.txt');
        res.json({ "data": allTodoData }).status(200);
    } catch (err) {
        res.status(500);
        throw new Error("cant display data")
    }


}
const updateTodoById = async (req, res) => {
   
    try {
        const idAndData= req.body;
        //console.log(idAndData);
        const message = await updateChanges('./src/resources/todos.txt',idAndData);
        res.send(message);
      } catch (err) {
        res.json({
          error: err.message,
        });
      }


}
const deleteTodo=async (req,res)=>{
    try{
        const data=req.body;
        const message=await deletetodoById('./src/resources/todos.txt',data);
        res.send(message);

    }catch(err)
    {
        res.json({error:err.message});
    }

}
module.exports = { displayAllTodo, createAndDisplaytodo,updateTodoById,deleteTodo };