const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 4100;
const app = express();
const layout = path.join('layouts', 'index');
const users = [];
let usercount = 0
const User = require('./models/Users')

const multer = require('multer');
const diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, path.join(__dirname, 'uploads'))
    },
    filename: function name(req, file, callback) {
        const fileName = file.fieldname+"-"+Date.now()+path.extname(file.originalname);
        req.fileName = fileName;
        callback(null, fileName);
    }
});
const upload = multer({
    storage: diskStorage
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/assets'));
app.use(express.static('uploads'));

app.get('/', (req, res) => {
    res.send(`<center><h1>Welcome to Express! </h1></center>`)
});

app.get('/signup', (req, res) => {
    const data = {
        layout,
        users,
        title: "Sign Up page",
        name : "",
        email : "",
        address : ""
    }
    res.render('signup.hbs', data);
});

app.post('/signup', upload.array('profileimg', 5), (req, res) => {
    console.log(req.body);
    console.log(req.fileName);

    const data = {
        layout,
        users,
        title: "Sign Up page",
        ...req.body
    }
    users.push(User({...req.body, fileName:req.fileName}))
    res.redirect('/signup');
});

app.get('/users',(req,res)=>{
    res.render('users.hbs',{
        title:'User Listing',
        users
    });
});

app.listen(PORT, ()=> console.log(`Listening to http://localhost:${PORT}`));


