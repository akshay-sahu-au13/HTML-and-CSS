const express = require('express');
const PORT = process.env.PORT || 5555;
const userRoutes = require('./routes/user');
const app = express();
const path = require('path');
const layout = path.join('layouts', 'index');
const fs = require('fs');

const data = fs.readFileSync('users.json');
const users = JSON.parse(data)
console.log(users)
// Middlewares
app.use(express.json({limit:'30mb', extended:true}));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/', userRoutes);

//Static folder
app.use(express.static(path.join(__dirname,'public')));

//View engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));



app.listen(PORT, ()=>{
    console.log(`Listening to http://localhost:${PORT}`)
})