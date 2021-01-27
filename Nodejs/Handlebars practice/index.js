const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Handlebars Settings

app.set('view engine', "hbs");
app.engine("hbs", exphbs({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
}))

const port = 9000;
app.listen(port, ()=> {
    console.log(`Listening to http://localhost:${port}`);
});

//Landing Page

app.get('/', (req,res)=> {
    res.send("Hello!!");
});