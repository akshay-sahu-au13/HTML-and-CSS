const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('hbs');
const bodyParser = require('body-parser');
const PORT = process.env.port || 5100;

app.set('view engine', 'hbs');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Setting static folder
app.use(express.static('public'));

// importing and using api/members route 
app.use('/api/members', require('./routes/api/member'));


app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`));
