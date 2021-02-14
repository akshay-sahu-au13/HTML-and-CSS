const mongoose = require('mongoose');
const MongoURI = 'mongodb://localhost:27017/MY_DB_1'

const InitMongo = async ()=> {
    try {
    await mongoose.connect(MongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Connected to MY_DB_1...")
} catch(e) {
    console.log(e);
    throw e
}
}
module.exports = InitMongo;