const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7777;
const userRoutes = require('./routes/user');
const start_mongo = require('./config/mongo-connect');

start_mongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', userRoutes);

app.get('/', (req, res)=> {
    console.log("Test")
    res.json({message: 'Home Page'});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})