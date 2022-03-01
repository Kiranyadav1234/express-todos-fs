const fs=require('fs');
const utils=require('../utils/operator');
const todoFunctionality=require('../service/todofunctionality.service');
const { hasUncaughtExceptionCaptureCallback, execPath } = require('process');


describe('getTodo function',()=>{
    it('should display all todo list',async ()=>{
       jest.spyOn(utils,'promisefyFileRead').mockResolvedValue([
        '1|Take a break',        
        '2|Make tea',
        '3|Buy 1kg rice',        
        '4|Follow tdd daily',    
        '5|Buy vegetables',      
        '6|have to read express',
        '7|repair watch '        
      ]);
      const data=await todoFunctionality.getTodoData('./src/resources/todos.txt');
      expect(data).toStrictEqual([
        { id: '1', Task: 'Take a break' },
        { id: '2', Task: 'Make tea' },
        { id: '3', Task: 'Buy 1kg rice' },
        { id: '4', Task: 'Follow tdd daily' },
        { id: '5', Task: 'Buy vegetables' },
        { id: '6', Task: 'have to read express' },
        { id: '7', Task: 'repair watch ' }
      ]);

    });
    

})