import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
      <div className="App">
        <Provider store={store}>
        <div style={{border: "2px solid #0077CC", margin: '0 auto', width: '80%', backgroundColor: '#f5f5f5', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
        <AddMovie />
        <MovieList />
      </div>
      </Provider>
      </div>
  );
}

export default App;