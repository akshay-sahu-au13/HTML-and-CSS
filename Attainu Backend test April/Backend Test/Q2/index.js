const express = require('express');
const PORT = process.env.PORT || 5556;
const multer = require('multer');
const path = require('path');
const app = express();
const layout = path.join('layouts', 'index');

// Middlewares

app.use(express.json({limit:'30mb', extended:true}));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//View engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


//Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'uploads'));
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

app.get('/', (req, res)=> {
    res.send("Health Check - Passed");
})

app.get('/upload-file', (req, res)=>{
    res.render('form', {title:"File upload", layout})
})
app.post('/upload-file', (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage}).single('file');

    upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

       if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        console.log(req.file.path)
        console.log(req.file.filename)
        const filepath = req.file.filename
        res.render('form', { title: "Uplaod", layout, message:"You have uploaded this image:", filepath, moreUpload:"Click here to upload another file"});
    });
});

app.listen(PORT, ()=>{
    console.log(`Listening to http://localhost:${PORT}`)
})