const mongoose = require('mongoose');

const director = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    movies : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }]
});

module.exports = mongoose.model('Director', director);