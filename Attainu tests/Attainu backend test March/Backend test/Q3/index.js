const express = require('express');
const InitMongo = require('./config/mongo-db');
const PORT = process.env.PORT || 8798;
const path = require('path');
const userRoutes = require('./routes/users')
const todoRoutes = require('./routes/todos')
const layout = path.join('layouts','index')
const cookie = require('cookie-parser')
InitMongo();

const app = express();

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

app.use('/api/users', userRoutes);
app.use('/api/users/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send("<center><h1>Welcome to Express app</h1></center>")
});


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});