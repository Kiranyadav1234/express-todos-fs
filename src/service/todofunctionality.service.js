const fs=require('fs');
const {promisefyFileRead,promisefyAppendFile,promisefyWriteFile}=require('../utils/operator');

const getTodoData=async(filePath)=>{
    
    let dataCollection =await promisefyFileRead(filePath);
    //dataCollection =dataCollection.filter(data=>data!=="");
    //console.log("collection",dataCollection);
  
  const allTodos=dataCollection.reduce((previousTodo,currentData,index)=>{
     let splitData= currentData.toString().split('|');
     //console.log("splitted data",splitData);
     let Todos={
        id:splitData[0],
        task:splitData[1]
     };
     previousTodo.push(Todos);
     return previousTodo;

  },[])
  return allTodos;
 //console.log(allTodos);
  
}
//getTodoData('./src/resources/todos.txt');
const createNewTodo=async (filePath,data)=>{
    let dataCollection =await promisefyFileRead(filePath);
    let length=dataCollection.length;
    const message=await promisefyAppendFile(filePath,`\r\n${length+1}|${data.task}`);



}
 const updateChanges= async(filePath,idAndData)=>{

    try {
      
        let currentTodos = await getTodoData(filePath);
      
       
        currentTodos = currentTodos.map((currentObject) => {
          if (idAndData.id ===currentObject.id) {
            
         
            currentObject.task= idAndData.task;
          
          }
         return currentObject;
        });
        console.log(currentTodos);
        currentTodos = currentTodos.reduce((prevContent, currentObject) => {
          prevContent += `${currentObject.id}|${currentObject.task}\r\n`;
          return prevContent;
        }, '');
        console.log(currentTodos);
      
        const message = await promisefyWriteFile(filePath,currentTodos);
       return message;
      } catch (err) {
        throw err;
      }
  

} 

const deletetodoById=async (filePath,data)=>{
    let currentTodos = await getTodoData(filePath);
    console.log(currentTodos);
    currentTodos=currentTodos.filter((element)=>element.id!==data.id);
    console.log(currentTodos);
    const Todos = currentTodos.reduce((prevContent, currentObject) => {
        prevContent += `${currentObject.id}|${currentObject.task}\r\n`;
        return prevContent;
      },'');
      const message = await promisefyWriteFile(filePath,Todos);
      return message;
      console.log(message);



}


 module.exports={
    getTodoData,createNewTodo,updateChanges,deletetodoById
}
  