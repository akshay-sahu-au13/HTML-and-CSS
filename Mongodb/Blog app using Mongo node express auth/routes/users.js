const express = require('express');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const User = require('../Schemas/userSchema');

router.post('/signup',
    [
        check('firstName', 'Please Enter the first name').not().isEmpty(),
        check('email', 'Please enter the email').isEmail(),
        check('password', 'Please enter the password').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: {},
                errors: errors.array(),
                message: "Unable to Sign-Up user"
            })
        }

        try {
            let user = await User.findOne({ email: req.body.email });

            if (user) {
                return res.status(400).json({
                    data: {},
                    error: [{
                        value: req.body.email,
                        msg: "user already exists!",
                        param: 'email',
                        location: 'body'
                    }],
                    message: 'Unable to create User, please login or enter a different email ID'
                });
            }

            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName || "",
                email: req.body.email,
            })
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);

            await user.save();

            res.status(200).json({
                data: req.body,
                errors: [],
                message: "User successfully created!"
            });

        } catch (e) {
            console.log(e);
            res.status(500).send("Error in saving...")
        }
    });

router.post('/login',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter the correct Passowrd').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: {},
                errors: errors.array(),
                msg: "Unable to login!"
            });
        }

        try {
            let user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({
                    data: {},
                    errors: [{
                        value: req.body.email,
                        msg: "Email is not registered",
                        param: 'email',
                        location: 'body'
                    }],
                    message: "Unable to Login!"
                });
            };

            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                res.status(400).json({
                    data: {},
                    errors: [{
                        value: req.body.password,
                        msg: "Incorrect Password",
                        param: "password",
                        location: "body"
                    }],
                    message: 'Unable to login, please enter the correct password!'
                });
            }

            jwt.sign(
                { user: { id: user.id } },
                'jwt_secret',
                (err, token) => {
                    if (err) {
                        throw err
                    }
                    res.status(200).json({
                        data: { token },
                        errors: [],
                        message: "Login Success!"
                    });
                }
            )
        } catch (e) {
            console.log(e.message);
            res.status(500).send("Error in login");

        }

    }
);

router.get('/profile',
auth,
async(req, res) => {
    try {
        const user = User.findById(req.user.id);
        res.json({
            data: user,
            errors: [],
            message: 'Fetched user Profile'
        });
    } catch (e) {
        console.log(e.message)
        res.status(500).send('Error in fetching...')
    }
});

module.exports = router;