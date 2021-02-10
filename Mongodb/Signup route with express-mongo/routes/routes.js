const express = require('express');
const router = express.Router();
const User = require('../schemas/User');
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    console.log("Signup - Post")
    const err = {};

    if (!req.body.firstName) {
        err.name = 'Please enter the first name';
        return res.status(400).json({
            message: err.name
        });
    }
    if (!req.body.email) {
        err.email = 'Please enter the email';
        return res.status(400).json({
            message: err.email
        });
    }
    if (!req.body.password) {
        err.pwd = 'Please enter the password';
        return res.status(400).json({
            message: err.pwd
        });
    }

    try {
        let user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(400).json ( {
                data: {},
                value: req.body.email,
                error: 'User already exists!',
                message: 'unable to Sign up'
            });
        }
        user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName || '',
            email: req.body.email,
        });
        const salt = await bcrypt.genSalt(10);
        const hashedpwd = await bcrypt.hash(req.body.password, salt);
        user.password = hashedpwd;

        await user.save();

        res.status(200).json({
            data: user,
            errors: [],
            message: 'Signed up successfully'
        });

    } catch(err) {
        console.log(err.message);
        res.status(500).send("Error in saving");
    }


});


module.exports = router;