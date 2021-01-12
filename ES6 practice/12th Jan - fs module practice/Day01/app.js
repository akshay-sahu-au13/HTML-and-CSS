
const fs = require('fs');

fs.readFile('readme.txt','utf-8', (error,data) => {   // Asynchronus or Non-BLocking
    console.log("READ: Asynchronus/NON-BLOCKING ---> ",data)
})

const fileData = fs.readFileSync("readme.txt", 'utf-8');   // Synchronus or BLocking
console.log(`READ: Synchronus/Blocking ---> `,fileData);

// const htmlFileData = fs.readFileSync("index.html", 'utf-8');
// console.log(htmlFileData);


fs.appendFile("readme.txt", '---Hello there, this text is modified via Asynchronus/Non-blocking method---', function(err) {  
    // Asynchronus writing/modifying
    if (err) throw err;

    fs.readFile('readme.txt','utf-8', (error, newdata) => {   // Asynchronus or Non-BLocking
        if (error) throw error;
        console.log("WRITE: Asynchronus/NON-BLOCKING ---> ", newdata)
    })
});

fs.appendFileSync("readme.txt", "*** Modified via Synchronus/Blocking mehtod***");
let syncData = fs.readFileSync("readme.txt", 'utf-8');
console.log("WRITE: Synchronus/BLOCKING ---> ", syncData);