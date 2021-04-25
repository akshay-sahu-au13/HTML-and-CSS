const express = require('express');
const router = express.Router();
const Movie = require('../Models/Movie');
const Director = require('../Models/director');
const director = require('../Models/director');

router.post('/add-director', async(req, res)=> {
    try {
        const data = req.body
        const director = new Director(data);
        await director.save()
        res.send({message:"Director added", Details:data});
    } catch (error) {
        console.log(error)
        res.send({message:"Error in saving"})
    }
})

module.exports= router;