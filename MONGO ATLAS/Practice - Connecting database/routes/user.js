const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');


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
})

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
    
        res.status(200).json({
            msg: "Login Success!"
        })
    } catch (error) {
        if (error) throw error;
        console.log(error);
    }
});

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