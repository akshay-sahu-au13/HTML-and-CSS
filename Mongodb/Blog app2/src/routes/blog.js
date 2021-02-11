const express = require('express');
const auth = require('../middleware/auth');
const Blog = require('../schemas/Blog');
const router = express.Router();
const User = require('../schemas/User');
router.post(
    '/',
    auth,
    async (req, res) => {
        const blog = new Blog({
            title: req.body.title,
            body: req.body.body,
            userId: req.user.id
        });
        await blog.save();
        res.json({
            data: {},
            errors: [],
            message: 'Blog created'
        });
    }
);

router.get('/allblogs', auth, async (req, res) => {
    const user = await User.findById({ "_id": req.user.id });
    const blogs = await Blog.find({ "userId": req.user.id });
    const author = user.firstName +" "+user.lastName
    const Blogs = blogs.map(item => {
        return {title: item.title, Content: item.body}
    })
    res.status(200).json({AUTHOR: author, BLOGS: Blogs});
    
});
module.exports = router;
