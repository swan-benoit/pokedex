import React from 'react';
import './App.css';
import { Set } from 'immutable';
import Pokemons from './components/Pokemons/Pokemons';

function App() {
  return (
    <div className="App">
      <div className="pokemon-container">
        <Pokemons pokemons={Set()}></Pokemons>
      </div>
      <div className="pagination">

      </div>
    </div>
  );
}

export default App;
