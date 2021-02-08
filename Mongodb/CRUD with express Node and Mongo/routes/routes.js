const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const layout = path.join('layouts', 'index');


router.get('/signup', (req, res) => {
    console.log('Signup page');
    const data = {
        layout,
        title: "Sign up page",
        name: "",
        email: "",
        phone: ""
    }
    res.render('signup', data)
});

router.post('/signup', (req, res) => {
    const err = {}
    const data = {
        err,
        layout,
        title: "Sign up page",
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };

    if (!req.body.name) {
        err.name = 'Please enter the name';
        return res.render('signup', data)
    }
    else if (!req.body.email) {
        err.email = 'Please enter the email';
        return res.render('signup', data)
    }
    else if (!req.body.phone) {
        err.phone = 'Please enter the contact number';
        return res.render('signup', data)
    }


    res.redirect('/login');
});

router.get('/login', (req, res) => {
    const data = {
        title: "Login",
        layout
    }
    res.render('login', data)
});

module.exports = router;