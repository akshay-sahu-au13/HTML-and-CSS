const express = require('express');
const router = express.Router();
const Movie = require('../Models/Movie');
const Director = require('../Models/director');
const { findOne } = require('../Models/Movie');

// GET ALL MOVIES
router.get('/allmovies', async(req,res)=> {
    try {
        const movies = await Movie.find().populate("director", "-_id -__v -movies");
        // console.log(movies);
        if (movies) {
            res.status(200).json({
                message: "Success",
                data: {
                    movies,
                },
            });
        } else {
            res.status(204).json({
                message: "No data available, add a movie first!",
            });
        }
    } catch (err){
        console.log(err)
        res.send({message:"Error while fetching movies"})
    }
    
});

router.get('/directors', async (req, res) => {
    try {
        const directors = await Director.find().populate(
            "movies",
            "title rating year -_id"
        );
        if (directors) {
            res.status(200).json({
                message: "Success!",
                data: {
                    directors,
                },
            });
        } else {
            res.status(204).json({
                message: "No data available.",
            });
        }
    } catch (err) {
        console.log(err)
        res.send({ message: "Error in saving" })
    }
})



router.post('/add-movie', async (req,res)=> {
    try {
        // console.log(req.body);
        let findDirector = await Director.findOne({
            name: req.body.director,
        });

        if (!findDirector) {
            findDirector = new Director({
                name: req.body.director,
            });
            await findDirector.save();
        }

        // console.log(findDirector);
        // const directorName = findDirector.name;
        const movie = await Movie.create({
            ...req.body,
            director: findDirector,
        });

        findDirector.movies.push(movie);
        await findDirector.save();

        res.send({message: "Movie added sucessfully", Movie:movie});
    } catch (err) {
        console.log(err);
    }
});

router.patch ('/edit-movie/:id', async(req, res)=> {
    try {

        const updated = await Movie.findOneAndUpdate({_id:req.params.id},{
            $set:{
                title:req.body.title,
                rating:req.body.rating,
                year:req.body.year
            }
        })
        res.send({Message:"Movie updated successfully"  
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
        await Movie.remove({_id:req.params.id});
        res.send({
            Message:"Movie Deleted!",
        })
    } catch (error) {
        console.log(error);
        res.send({
            Message: "Error while deleting!"
        })}
});


module.exports = router;