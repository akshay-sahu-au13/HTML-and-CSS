const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 1222;
const layout = path.join('layouts', 'index');
const Mongo = require('./config/mongo');
const Form = require('./model/formdata');

Mongo();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res) => {
    res.render('form', {layout, title:"Survey Form"});
});

app.post('/', async(req, res)=> {
    try {
        const form = new Form ({
            name: req.body.name,
            email: req.body.email,
            scale: req.body.scale,
            emotion:req.body.emotion,
            time:req.body.time,
            location: req.body.location,
            experience: req.body.experience
        });
    
        await form.save();

        res.render('form', {title:"Submitted", layout, msg: "FORM SUBMITTED SUCCESSFULLY"});
    } catch (error) {
        if (error) throw error
    }
});

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});


