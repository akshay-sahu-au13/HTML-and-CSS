const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/assnDB'

const initMongo = async () => {
    try {
        await mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true});
        console.log("DB connected...");
    } catch(err) {
        console.log(err);
        throw err;
    }
};

module.exports = initMongo;