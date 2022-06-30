import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <div className="pokemon-container">
        {
          getPokemon()
              .map(pokemon => (
                  <Pokemon name={pokemon.name} image_url={pokemon.image_url}></Pokemon>
              ))
        }
      </div>
      <div className="pagination">

      </div>
    </div>
  );
}

function getPokemon(){
  return [{
    name:"pikachu",
    image_url: "www.google.fr"
  },
    {
      name:"pikachu",
      image_url: "www.google.fr"
    },
    {
      name:"pikachu",
      image_url: "www.google.fr"
    },
    {
      name:"pikachu",
      image_url: "www.google.fr"
    }
  ]
}

export default App;
