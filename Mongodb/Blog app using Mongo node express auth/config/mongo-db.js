const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/blog'

const InitMongo = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        console.log("Connected to MongoDB...");
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};

module.exports = InitMongo;
