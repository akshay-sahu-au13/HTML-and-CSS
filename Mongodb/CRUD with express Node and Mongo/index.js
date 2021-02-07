const express = require('express');
const PORT = 1111;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const layout = path.join(__dirname, '/views', 'index');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/mydb';
const user = require('./models/user');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'assets')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect(url, {useNewUrlParser: true});
const con  = mongoose.connection;
con.on('open', ()=> {
    console.log('Connected....');
});

app.get('/', (req, res) => {
    res.send("Welcome to Express home");
});

app.get('/mydb', async(req, res) => {
    try {
        const users = await user.find();
        return res.json(users)
    } catch(err) {
        res.send('Error: '+ err)
    }
});

app.get('/mydb/:id', async(req, res) => {
    try {
        const user1 = await user.findById(req.params.id);
        return res.json(user1)
    } catch(err) {
        res.send('Error: '+ err)
    }
});


app.post('/mydb', async(req,res)=> {
    const User = new user({
        name: req.body.name,
        tech: req.body.tech,
        status: req.body.status
    })

    try {
        const newUser = await User.save();
        console.log(newUser)
        res.json({msg: `New user created successfully`, newUser})

    } catch(err) {
        res.send(err)
    }
});

app.patch('/mydb/:id', async(req, res) => {

    try {
        const user1 = await user.findById(req.params.id);
        user1.status = req.body.status;
        const u2 = await user1.save();
        console.log(u2);
        res.json({msg: `Successfully updated the info...`,u2});

    } catch (err) {
        res.send(err);
    }
});

app.delete('/mydb/:id', async(req, res) => {

    try {
        await user.findByIdAndRemove(req.params.id);
        res.json({msg: `User with id: ${req.params.id} deleted successfully`});

    } catch (err) {
        res.json({msg:`User with id: ${req.params.id} NOT FOUND!`, err});
    }
});

app.listen(PORT, ()=> {
    console.log(`Listening to http://localhost:${PORT}`);
});