const express = require('express');
const PORT = process.env.PORT || 5555;

const app = express();

// Middlewares

app.use(express.json({limit:'30mb', extended:true}));
app.use(express.urlencoded({ limit: '30mb', extended: true }));



app.listen(PORT, ()=>{
    console.log("Listening to http://localhost:",PORT)
})