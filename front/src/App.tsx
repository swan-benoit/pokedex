import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons/Pokemons';

function App() {
  return (
    <div className="App">
      <div className="pokemon-container">
        <Pokemons page={0} size={20}></Pokemons>
      </div>
      <div className="pagination">

      </div>
    </div>
  );
}

export default App;
