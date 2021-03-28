const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    scale: {
        type:Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    emotion: {
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('form', formSchema);