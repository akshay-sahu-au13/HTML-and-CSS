const express = require('express');
const bodyParser = require('body-parser');
const InitMongo = require('./config/mongo-db');
const PORT = 6000;
const userRoutes = require('./routes/users')
const todoRoutes = require('./routes/todos')

InitMongo();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/users', userRoutes);
app.use('/api/users/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Express app</h1>")
});


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});