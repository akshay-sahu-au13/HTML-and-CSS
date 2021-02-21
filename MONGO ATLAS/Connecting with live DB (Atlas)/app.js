const express = require('express');
const app = express();
const port = 9870;
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl="mongodb+srv://akshay:admin@cluster0.3sl2w.mongodb.net/atlasdb?retryWrites=true&w=majority";
let db;
let col_name="users";

//connection with mongo
MongoClient.connect(mongourl,(err,connection)=>{
    if(err) console.log(err);
    db=connection.db('atlasdb');
    console.log("Atlas DB connected!")
});

//health check
app.get('/',(req,res) => {
    res.send("Server is running ok")
})


app.get('/usermongo', (req,res) => {
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        console.log(result)
        res.json(result)
    })
})

app.get('/usermongo1',async (req,res) => {
    let response = await db.collection(col_name).find().toArray()
    res.json(response)
})

app.get('/user/:id',(req,res) => {
    const id = req.params.id
    pool.query(`SELECT * from customers where id = ${id}`,(err,result) =>{
        if(err) throw err;
        res.json(result.rows)
    })
})


app.put('/updateUser',(req,res) => {
    
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server running on port ${port}`)
})