const express = require('express');
const bodyParser = require('body-parser');

const InitMongo = require('./config/mongo-db');
InitMongo();

const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');
const blogRoutes = require('./routes/blog');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 5004;

app.get('/',(req,res)=>{
    res.send('Welcome to Node-Express ngrok');
});


/**
 * Router Middleware
 * Router - /api/user/*
 * Method - *
 */
app.use('/api/user', userRoutes);
app.use('/api/user/todo', todoRoutes);
app.use('/api/user/blogs', blogRoutes);

app.use((err,req,res,next)=>{
    console.log(err);
    return res.send('error happened 2');
});

// app.get('/allblogs', (req, res) => {
//     const users = User.findAll()
//     console.log(users)
// })


app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`);
});
