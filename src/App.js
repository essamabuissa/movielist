import React from 'react';
import './App.css';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

function App() {
  return (
    <div className="body">
      <div className="container">
        <AddMovie />

        <div className="row">
          <MovieList watched />
          <MovieList />
        </div>

      </div>
    </div>
  );
}

export default App;
