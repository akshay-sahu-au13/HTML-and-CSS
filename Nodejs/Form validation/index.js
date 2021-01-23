const express = require('express');
const app  = express();
const path = require('path');
const hbs = require('hbs');
var bodyParser = require('body-parser');
const PORT = 4400;
const users = [];
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');

const layout = path.join('layouts','index');

app.get('/', (req,res) => {
    res.send(`<h1> HOME PAGE </h1><br><br>
    <h2><a href="/signup">Sign Up</a></h2>`)
});


app.get('/signup', (req, res)=> {
    const data = {
        layout: layout,
        users,
        title: 'SignUp',

    }
    res.render('signup.hbs', data)
});

app.post('/signup', urlencodedParser,  (req, res)=> {
    const error= {};
    const data = {
        layout,
        title: "SignUp",
        ...req.body
    }

    if (!req.body.name) {
        error.name = "Please enter the Name";
        res.render('signup', {...data, error});
        return
    }
    if (!req.body.email) {
        error.email = "Please enter the Email";
        res.render('signup', {...data, error});
        return
    }
    if (!req.body.Number) {
        error.Number = "Please enter the phone Number";
        res.render('signup', {...data, error});
        return
    }

    users.push(req.body);
    console.log(users);
    res.redirect('/users');
});

app.get('/users', (req,res) => {
    res.render('users.hbs', {
        title: "User Listing",
        users
    });
});

app.listen(PORT, ()=> console.log(`Listening to http://localhost:${PORT}`))