const express = require('express');
const PORT = process.env.PORT || 5557;
const session = require('express-session');
const jwt = require('jsonwebtoken');
const app = express();  
const path = require('path');
const layout = path.join('layouts', 'index');
const Mongo = require('./Mongo/mongoInit');
const User = require('./Models/user');
const user = require('./Models/user');

Mongo();

// Middlewares

app.use(express.json({limit:'30mb', extended:true}));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

//View engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

//mongoose



app.get('/', (req, res)=> {
    res.send("Health  check - OK");
});

app.get('/login',(req, res)=> {
    res.render('login', {title:"Login", layout});
})

app.post('/signup', async(req, res)=> {
    try {
        const data = req.body;
        const user = new User(req.body);
        await user.save();
        console.log("User Saved: ",user);
        res.send(user)
    } catch (error) {
        if (error) {
            console.log("error while saving!", error.message)
        }
    
    }
})

app.post ('/login', async (req, res)=> {
    try {
        if(req.body.email && req.body.password){
            const user = await User.find({email:req.body.email});
            console.log("user:",user);
            if (!user){
                console.log("User doesn't exist")
                return res.render('login', { title: "Error in login", layout, error: "User not registered" });
            }
            if (req.body.password !== user[0].password){
                console.log(req.body.password, "!==", user.password)
                console.log("Incorrect pwd")
                return res.render('login', { title: "Error in login", layout, error: "Incorrect password!" });
            }

            res.redirect(`/profile/${user[0]._id}`);

        } else {
            console.log("Enter both email and password")
            return res.render('login', { title: "Error in login", layout, error: "Enter both email and password" });
        }
        
    } 
    catch (error) {
        if (error){
            console.log("Error: ", error.message)
            return res.render('login', {title:"Error in login", layout, error:"Unable to Login!"});
        }
    }
});

app.get('/profile/:xyz', async(req, res)=> {
    try {
        console.log("PARAM", req.params.xyz)
        const user = await User.findById(req.params.id);
        console.log("USERS:", user)
        
        res.render('profile', { title: "Profile", layout, ...user })
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, ()=>{
    console.log(`Listening to http://localhost:${PORT}`)
})