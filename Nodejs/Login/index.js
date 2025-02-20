const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const PORT = 1234;
const layout = path.join('layouts', 'index');
const app = express();
const User = require('./models/User');

let users = [{id:1, name: "Aks", email: 'akx@gmail.com', password: '12345'}
];
let userCount = 1;
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(cookieParser());
app.use(session({secret: 'sess_secret', resave:false, cookie: {maxAge: 60000}}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));

app.get('/', (req, res) => {
    res.render("main", {title: "Welcome to Home"});
});

app.get('/signup', (req, res)=> {
    res.render('signup', {
        layout,
        title: "Sign up",
        name: "",
        email: ""
    })
});

app.post('/signup', (req,res)=> {
    const err = {};
    const data = {
        layout,
        title: "Sign up",
        ...req.body
    }

    if (!req.body.name) {
        err.name = 'Please enter the name';
        console.log(err.name);
        res.render('signup', {...data, err});
        return;
    }

    if (!req.body.email) {
        err.email = 'Please enter the email';
        res.render('signup', {...data, err});
        return;
    }

    const existingUser = users.filter(item=>item.email == req.body.email);
    if (existingUser.length) {
        err.email = 'User already exists';
        return res.render('signup', {...data, err});
    };

    ++userCount;
    users.push(User({id:userCount , ...req.body}));
    res.redirect('/login', {layout, title:'Log in'});
});

app.get('/login', (req, res) => {
    console.log(req.cookies);
    if (req.cookies.user && typeof req.cookies.user !== 'string') {
        return res.redirect('/profile');
    }
    res.render('login', {
        title: "Log in",
        layout,
        email: ""
    });
});




app.listen(PORT, ()=> {
    console.log(`Listening to http://localhost:${PORT}`);
});


