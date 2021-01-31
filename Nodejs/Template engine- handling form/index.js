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
// app.engine("hbs", ({defaultLayout: "signup.hbs"}))
const layout = path.join('layouts','index');

app.get('/', (req,res) => {
    res.send(`<h1> HOME PAGE </h1><br><br>
    <a href="/signup">Sign Up</a>`)
});

app.get('/intro',(req,res)=>{
    const homeFilePath = path.join(__dirname,'home.hbs');
    const data = {
        isLoggedIn:true,
        name:'Akshay',
        title: 'Welcome',
        items: [
            'akki5233@gmail.com',
            '9988776677',
            'Address: 234 2nd street Raipur'
        ]
    }
    res.render(homeFilePath,data);
});

app.get('/signup', (req, res)=> {
    const data = {
        layout: layout,
        users,
        title: 'SignUp',
        name: " ",
        email: " ",
        Number: " ",
        Address: " ",
        Hobbies: " "
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
    if (!req.body.Address) {
        error.Address = "Please enter the Address";
        res.render('signup', {...data, error});
        return
    }
    if (!req.body.Hobbies) {
        error.Hobbies = "Please enter your hobbies";
        res.render('signup', {...data, error});
        return
    }

    users.push(req.body);
    res.redirect('/users');
});

app.get('/users', (req,res) => {
    res.render('users.hbs', {
        title: "User Listing",
        users
    });
});

app.listen(PORT, ()=> console.log(`Listening to http://localhost:${PORT}`))