import React from 'react';
import './App.css';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="body">
      <Navbar >

      </Navbar>
      <div className="container">
        <AddMovie />

        <div className="row">
          <MovieList watched />
          <MovieList />
        </div>

        <RegisterForm />

      </div>
    </div>
  );
}

export default App;
