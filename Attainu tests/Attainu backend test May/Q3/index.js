const express = require('express');
const data = require('./data');
const app = express();
const PORT = process.env.PORT || 6666;
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 min
    max: 10, // limit each IP to 10 requests per windowMs
    message:
        "Too many requests created from this IP, please try again after one minute"
});

app.use(limiter);

app.get('/', (req, res)=> {
    res.status(200).send({message:"Maxhits 10, per IP address ", data: data})
})

app.listen(PORT, ()=> {
    console.log(`Listening to PORT - https://localhost:${PORT}`);

})




