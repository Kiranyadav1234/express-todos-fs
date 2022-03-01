const fs = require('fs');

const promisefyFileRead = (filePath) => new Promise((resolve, reject) => {
    fs.readFile(filePath, 'UTF-8', (err, data) => {
      if (err) {
        reject(err);
      }  else {
        resolve(data.toString().split('\r\n'));
      }
    });
  });
  const promisefyAppendFile = (filepath, dataToBeAppend) => new Promise((resolve, reject) => {
    fs.appendFile(filepath, dataToBeAppend, 'UTF-8', (err) => {
      if (err) {
        reject(new Error('cannot append data '));
      } else {
        resolve('appended data succesfully');
      }
    });
  });
  const promisefyWriteFile = (filepath, dataToBeAdded) => new Promise((resolve, reject) => {
    fs.writeFile(filepath, dataToBeAdded, (err) => {
      if (err) {
        reject(new Error('cannot open file'));
      } else {
        resolve('successfully data added');
      }
    });
  });
  module.exports={
      promisefyFileRead,promisefyAppendFile,promisefyWriteFile
  }