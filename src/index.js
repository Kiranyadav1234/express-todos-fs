const bodyParser = require('body-parser');
const express=require('express');
const app =express();
const {todoRouter}=require('./route/todoRouter.route');

app.use(bodyParser.json());//tells system that we want to use json
app.use('/to-do',todoRouter);



app.listen(3000,()=>{
    console.log("server is running ");
});