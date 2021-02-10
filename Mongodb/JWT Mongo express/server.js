require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 1122;
const jwt = require('jsonwebtoken');

const posts = [
    {
        username: "Akshay",
        title: "Lorem ipsum dolor sit amet ninja hatodi etching fetching luring snicking"
    },
    {
        username: "Keisha",
        title: "This blog is reallly cool and I love typing for it"
    }
]

app.use(express.json());

app.get('/posts', (req, res)=> {
    res.json(posts);
});

app.post('/login', (req, res) => {
    // Authenticate user
    const username = req.body.username
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})

});


app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`))
