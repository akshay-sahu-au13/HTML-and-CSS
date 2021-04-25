
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../Schemas/userSchema');
const path = require('path');
const layout = path.join('layouts','index')

const { check, validationResult } = require('express-validator/check');

router.post(
    '/',
    auth,
    check('title','Please enter the content').not().isEmpty(),
    async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: {},
                errors: errors.array(),
                message: 'Unable to create todo item'
            });
        }
        try {
            let user = await User.findById(req.user.id);
            user.todos.push({
                title: req.body.title
            });
            await user.save();
            user = await User.findById(req.user.id);
            // res.json({
            //     data:user,
            //     errors:[],
            //     message: 'Todo item created'
            // })
            res.render('todos', {layout, title:"todos", user})
        } catch (e) {
            console.log(e.message)
            res.send('Error in fetching')
        }
    }
);

router.patch(
    '/:id',
    auth,
    async (req,res) => {
        await User.findOneAndUpdate(
            { "_id": req.user.id, "todos._id":  req.params.id },
            {
                "$set": {
                    "todos.$": {title:req.body.title, status:req.body.status}
                }
            },
            async (err, item)=>{
                const user = await User.findById(req.user.id);
                res.json({
                    data:user,
                    errors:[],
                    message: 'Todo item updated'
                });
            }
        );
    } 
)

router.get('/', auth, async(req, res)=> {
    try {
        const user = await User.findById(req.user.id);
        console.log(user.todos)
        res.render('todos', {title:'Todos', layout, user});
    
    } catch (error) {
        console.log("error: ", error.message);
    }
});

module.exports = router;
