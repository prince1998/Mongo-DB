//Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Open!")
})
.catch(err => {
    console.log("Oh no error")
    console.log(err)
})

//Schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//Creating the model
const Movie = mongoose.model('Movie',movieSchema); //Model class called Movie
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

//Inserting Many
// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     {title: 'Alien', year: 1979, score: 9.3, rating: 'R' },
//     {title: 'The Iron Giant', year: 1989, score: 5.3, rating: 'PG' },
//     {title: 'Stand by me', year: 2003, score: 6.3, rating: 'PG-13' },
// ])
// .then(data => {
//     console.log("It worked!");
//     console.log(data);
// })





