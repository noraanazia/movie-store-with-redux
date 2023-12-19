import { createStore } from 'redux';
import movieReducer from './reducers';

// Function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('movies-redux');
    if (serializedState === null) {
      return undefined; // No state in local storage
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('movies-redux', serializedState);
  } catch (err) {
  }
};

const persistedState = loadState();
const store = createStore(movieReducer, persistedState);

// Subscribe to store changes and save to local storage
store.subscribe(() => {
  saveState({
    movies: store.getState().movies
  });
});

export default store;
