// Action Types
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

// Action Creators
export const addMovie = (title, imageUrl, cost) => {
    return {
        type: ADD_MOVIE,
        payload: { title, imageUrl, releaseDate: new Date().toISOString().split('T')[0], cost, id: Date.now() }
    };
};

export const removeMovie = id => {
    return {
        type: REMOVE_MOVIE,
        payload: id
    };
};
