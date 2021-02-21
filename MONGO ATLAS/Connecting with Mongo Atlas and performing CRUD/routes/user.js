const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../schemas/user');


router.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        // console.log(users);
        res.send(users);
    } catch (error) {
        if (error) throw error;
        console.log(console.error)
    }
});

router.post('/user', async (req, res) => {
    try {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        console.log(user)
        await user.save();
        console.log('user saved');
        res.json({
            message: "User added successfully!",
            user
        })
    } catch (error) {
        if (error) throw error;
        console.log(console.error)
    }
});

router.put('/user/:id', async (req, res)=> {
    await User.findOneAndUpdate({
        "_id":req.params.id},
        {
            "$set": {name: req.body.name, email: req.body.email, age: req.body.age}
            }
        );

    const user = await User.findById(req.params.id);
    res.status(200).json({
        message: "Update Success!",
        user
    });
});

router.delete('/user/:id', async(req, res)=>{
    await User.findOneAndDelete({_id: req.params.id});
    res.json({message:"User Deleted Successfully"})
});

module.exports = router;