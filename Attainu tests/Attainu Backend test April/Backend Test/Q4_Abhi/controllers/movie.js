import { v4 as uuid } from 'uuid';

let movies = [];

export const getMovies = (req, res) => {
    console.log(`movies in the database: ${movies}`);

    res.send(movies);
}

export const createMovie = (req, res) => {   
    const movie = req.body;

    movies.push({...movie, id: uuid()});
    
    console.log(`movies[${movie.name}] added to the database.`);
    res.status(201).json(movies);
};

export const getMovie = (req, res) => {
    // res.send(req.params.id)
    const movie = movies.filter(item => item.id === req.params.id);
    res.send(movie);
};

export const deleteMovie = (req, res) => { 
    console.log(`movie with id ${req.params.id} has been deleted`);
    
    movies = movies.filter((movie) => movie.id !== req.params.id);
    res.send(movies)
};

export const updateMovie =  (req,res) => {
    const movie = movies.find((movie) => movie.id === req.params.id);
    
    const newMovie = {...movie, ...req.body};

    res.send(newMovie);
};