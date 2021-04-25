const mongoose = require('mongoose');

const MongoUri = "mongodb+srv://akshay:admin@cluster0.3sl2w.mongodb.net/BackendApr?retryWrites=true&w=majority"

const MongoInit = () => mongoose.connect(MongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, conn)=> {
    if (conn){
        console.log("DB connected !");
    }

    if (err){
        console.log("Error in connecting Atlast DB: ", err.message)
    }
})

module.exports = MongoInit;