import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../actions';
import Movie from './Movie';
import MovieModal from './MovieModal';
import './MovieList.css';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    const handleRemoveMovie = id => {
        dispatch(removeMovie(id));
    };

    return (
        <div className="movie-list">
			{movies.map(movie => (
                <div className="movie-item" key={movie.id}>
                <Movie movie={movie} onClick={handleMovieClick} onRemove={handleRemoveMovie} />
				</div>
            ))}
            <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
        </div>
    );
};

export default MovieList;
