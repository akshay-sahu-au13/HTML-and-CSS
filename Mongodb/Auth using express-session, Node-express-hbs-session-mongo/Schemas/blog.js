const mongoose = require('mongoose');

const Blog = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('blog', Blog);