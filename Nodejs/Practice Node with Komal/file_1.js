const path = require('path');

// fs module

// fs module is an inbuilt module in node.js

const fs = require('fs');

// console.log(fs);

// fs.mkdirSync(path.join(__dirname, 'test') );

// fs.mkdir(path.join(__dirname, 'test1'), (err)=> {
//     if (err){
//     console.error(err)
//     }
//     console.log("Directory created")
// })

// fs.writeFileSync("testfile.txt", "Hello, there");
// fs.writeFileSync(path.join(__dirname,"/test/dummy",'newfile3.txt'), "Data in newfile 2");
// fs.appendFileSync(path.join(__dirname,"/test/dummy",'newfile3.txt'), " This is the new appended data");

const data = fs.readFileSync('./testfile.txt', 'utf-8');
console.log(data);

// console.log(fs)