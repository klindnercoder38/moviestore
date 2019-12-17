import React, { Component } from 'react';
import uuid from 'uuid'
import MovieForm from './movieform';
import Movie from './movie';
import '../main.css'

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: []}
        this.getMovie = this.getMovie.bind(this)
        this.newMovie = this.newMovie.bind(this)
        
}
    randomKey() {
        let num = uuid()

        return num
    }

    movieCount(arr) {
        let count = 0;

        for(let i = 0; i < arr.length; i++) {
            count = i + 1
        }

        return count;
    }


    getMovie(movie) {
        this.setState(el => ({
            movies: [...el.movies, movie ]
        }))
        
    }


    newMovie() {
        
        return (
            this.state.movies.map(movie => (<Movie title={movie.title} key={this.randomKey()} />))
        )
    } 

    render() {
        return (
            <div>
                <MovieForm movieowned={this.getMovie}/>
                <ul className="list-container">
                    {this.newMovie()}
                </ul>
                <label>Number of Movies:</label> <span className="count">{this.movieCount(this.state.movies)}</span>
            </div>
        )
    }
}

export default MovieList;