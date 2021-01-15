 const express = require('express');
 const app = express();

 const PORT = 3000;

 app.get('/', (req,res)=>{
    console.log(`Server running at PORT ${PORT} - Home Page`);
    res.send(`<center><h1>*******HOME*******<h1> <br> <h2>Server has been started at port ${PORT}<br><br><br> Modify the url to perform addition, substraction, multiplication and division operations.<br> <br>Follow this syntax: "http://localhost:3000/add/9/5" <br><br> Similarly use sub, mul and div for respective operations <br><br> CHEERS!!!</h2></center>`);

 });

 app.get('/add/:id1/:id2', (req,res)=> {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    res.send(`The Addition of ${id1} and ${id2} is ${parseInt(id1) + parseInt(id2)}`);
 });

 app.get('/sub/:id1/:id2', (req,res)=> {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    res.send(`The Subtraction of ${id1} and ${id2} is ${parseInt(id1) - parseInt(id2)}`);
 });
 
 app.get('/mul/:id1/:id2', (req,res)=> {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    res.send(`The Multiplication of ${id1} by ${id2} is ${parseInt(id1) * parseInt(id2)}`);
 });
 
 app.get('/div/:id1/:id2', (req,res)=> {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    res.send(`The Division of ${id1} and ${id2} is ${parseInt(id1) / parseInt(id2)}`);
 });

 app.listen(PORT);
