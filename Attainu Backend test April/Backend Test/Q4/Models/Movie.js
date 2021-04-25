const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    director: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Director"

    }],
    rating: {
        type:Number,
        required:true
    },
    year: {
        type:Number,
        reuired:true
    }
});

module.exports = mongoose.model(
    "Movie", MovieSchema
);