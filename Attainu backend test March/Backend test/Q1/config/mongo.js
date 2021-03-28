const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/backend';

const MongoInit = ()=> {
    mongoose.connect(URI,  (err, connection)=> {
        if (err) console.log("Connection Error: ",err.message);

        if (connection) {
            console.log("Connected to MongoDB");
        }
    })
}

module.exports = MongoInit;