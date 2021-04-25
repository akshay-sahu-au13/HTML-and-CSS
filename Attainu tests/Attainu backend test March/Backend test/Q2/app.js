const express = require('express');
const jwt = require('jsonwebtoken');
const PORT = 1234;
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/backend'
mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true},(err, con)=> {
    if (err) throw err;
    if (con) {
        console.log("DB connected");
    }
})

const User = mongoose.model('dummyuser', mongoose.Schema({
  username: String,
  password: String
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/login', (req, res)=> {
    res.status(201).send("Please enter Username and passowrd");
})

app.post('/login', async(req, res)=> {
    try {
        const user = await User.findOne({username:req.body.username});
    if(!user){
        return res.status(404).send({msg:"User not registered"});
    }
    console.log(user);
    if (req.body.password !== user.password) {
        return res.status(401).send("Invalid password");
    }

    const access_token = await jwt.sign({user:user.username}, config.secret);
    const refresh_token = jwt.sign({user:user.username}, config.refresh);

    res.status(200).send({user, access_token, refresh_token});
    } catch (error) {
        if (error) console.log("Error while Login: ",error.message)
    }
});



app.post('/refresh', async(req, res)=> {
    if (req.headers.refresh_token){
        const decoded = await jwt.verify(req.headers.refresh_token, config.refresh);
        if (decoded) {
            res.status(200).send({msg:"Refresh Token Successfully verified",decoded});
        } else {
            res.status(400).send("Invalid token")
        }
    } else {
        res.status(404).send({msg: "Send Token in headers"});
    }
});

app.listen(PORT, ()=> {
    console.log(`Listening to http://localhost:${PORT}`)
})