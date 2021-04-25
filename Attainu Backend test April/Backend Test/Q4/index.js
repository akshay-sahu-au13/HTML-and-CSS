const express = require('express');
const PORT = process.env.PORT || 5558;
const app = express();
const Movie = require('./Models/Movie');
const Director = require('./Models/director');
const movieRoutes = require('./routes/movies');
const Mongo = require('./Mongo/mongoInit');
const directorRoutes = require('./routes/director');
Mongo();


// Middlewares

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use('/', movieRoutes);
app.use('/', directorRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})