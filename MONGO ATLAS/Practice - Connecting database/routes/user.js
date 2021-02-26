const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
router.post('/signup', async(req, res)=> {
    try {
        let user = await User.findOne({email:req.body.email});
        if (user) {
            return res.status(400).json({
                message: "User already exists! Please Login"
            })
        }
        user = new User ({
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
        })
        user.password = await bcrypt.hash(req.body.password, 9);
    
        await user.save();
    
        res.json({message: "Signed up successfully", user})
    } catch (error) {
        if (error) throw error;
        console.log(error);
    }
});

router.get('/login', (req, res) => {
    res.send('<center><h1>Welcome to the login page</h1></center><br><br> <h3> Please enter the email and password <h3>')
});

router.post('/login', async (req, res)=> {
    try {
        let user = await User.findOne({email: req.body.email});
        if (!user){
            return res.status(404).json({
                message: " Email ID not registered, please signup first!"
            })
        }
    
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            res.status(400).json({
            mgs: "Incorrect Password!"});
        }

        const token = await jwt.sign({id:user._id}, config.secret, {expiresIn: '12h'} );
        console.log(token);
        res.status(200).json({
            msg: "Login Success!", token
        });
    } catch (error) {
        if (error) throw error;
        console.log(error);
    }
});

router.get('/profile', async(req, res)=> {
    const token = req.header('token');
    if(!token) {
        return res.status(400).send("User not authorised, Please Login");
    }

    const userID = jwt.verify(token, config.secret);
    console.log(userID)
    if (!userID) {
        return res.status(404).send({msg: 'Invalid Token'});
    }
    const user = await User.findById({_id:userID.id});
    res.status(200).json({
        msg: `"Welcome to profile page ${user.name}!"`,
        Userdata: user
    })

});

router.get('/logout', (req, res)=> {
    delete req.header('token'); // need to find a way to delete the headers from client side during logout
    res.redirect('/api/login');
})

router.get('/users', async (req, res)=> {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
    }
})

router.delete('/users/:id', async(req,res)=> {
    try {

        await User.findOneAndDelete({_id: req.params.id});
        const users = await User.find();
        res.status(200).json({
            msg: "User deleted successfully",
            users
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;