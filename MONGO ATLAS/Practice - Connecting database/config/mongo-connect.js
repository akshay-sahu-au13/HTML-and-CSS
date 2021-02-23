const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://akshay:admin@cluster0.3sl2w.mongodb.net/atlasdb?retryWrites=true&w=majority"
const start_mongo = async()=> {
    await mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    console.log("Connected to Mongo Atlas db...")
}

module.exports = start_mongo;