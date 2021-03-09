const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Open!")
})
.catch(err => {
    console.log("Oh no error")
    console.log(err)
})


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// const Movie = mongoose.model('Movie',movieSchema); //Model class called Movie
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

Movie.insertMany([
    
])





