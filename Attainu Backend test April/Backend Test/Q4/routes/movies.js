const express = require('express');
const router = express.Router();
const Movie = require('../Models/Movie');
const Director = require('../Models/director');

// GET ALL MOVIES
router.get('/allmovies', async(req,res)=> {
    try {
        const data = await Movie.find();
        if (data){

            res.send({ Message: "Below are all the movies listed", Movies: data })
        }
        else {
            res.send({ Message: "couldn't find movies", Movies: data })
        }

    } catch (error) {
        console.log(error)
        res.send({Message:"Error while fetching movies"})
    }
    
});


router.post('/add-movie', async (req,res)=> {
    try {
        const data = req.body;
        const newMovie = new Movie(data);
        await newMovie.save();
        res.send({Message:"Movie Saved Successfully", Added: newMovie});

    } catch (error) {
        console.log(error.message)
        res.send({ Message: "Error while saving..." })
    }
});

router.patch ('/edit-movie/:id', async(req, res)=> {
    try {
        const updated = await Movie.findOneAndUpdate({_id:req.params.id},{
            $set:{
                title:req.body.name,
                director:req.body.director,
                rating:req.body.rating,
                year:req.body.year
            }
        })
        res.send({Message:"Movie updated successfully"}, {
            newMovie:updated
        })
    } catch (error) {
        console.log(error);
        res.send({
            Message:"Error while updating!"
        })
    }
});

router.delete('/delete-movie/:id', async(req, res)=> {
    try {
        const deleted = await Movie.remove({_id:req.params.id});
        res.send({
            Message:"Movie Deleted!",
            DeletedMovie:deleted
        })
    } catch (error) {
        console.log(error);
        res.send({
            Message: "Error while deleting!"
        })}
});


module.exports = router;