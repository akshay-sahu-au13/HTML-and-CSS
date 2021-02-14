const express = require('express');
const path = require('path');
const router = express.Router();
const layout = path.join('layouts', 'index');
const User = require('../Schemas/user');
const Blog = require('../Schemas/blog');
const auth = require('../auth/auth');


router.get('/', auth, (req, res)=>{
    res.render('blogs', {layout, title:"User Blogs"});
});

router.post ('/', auth, async (req, res)=> {
    const blog = new Blog ({
        title: req.body.title,
        body: req.body.body,
        userId: req.user.id
    });

    await blog.save();
    blog.message = "Blog created successfully..."
    const data = {
        title:"blog created",
        layout,
        blog
    }

    res.render('blogs', data)
});



module.exports = router;