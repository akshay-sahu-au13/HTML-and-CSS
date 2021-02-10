const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const PORT = 4444;

const initMongo = require('./config/mongo-db')
initMongo()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', userRoutes);

app.get('/', (req, res)=> {
    res.send("Welcome to express!")
})


app.listen(PORT, ()=> {
    console.log(`Listening to http://localhost:${PORT}`);
})