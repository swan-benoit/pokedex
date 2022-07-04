import React, { useState } from 'react';
import './App.css';
import Pokemons from './components/Pokemons/Pokemons';

function App() {
    const [page, setPage] = useState(0);

    return (
    <div className="App">
        <div className="pagination">
            {page > 0 && <button onClick={() => setPage(page - 1)}>PREV</button>}
            <button onClick={() => setPage(page + 1)}>NEXT</button>
        </div>
        <div className="pokemon-container">
        <Pokemons page={page} size={20}></Pokemons>
      </div>
    </div>
  );
}

export default App;
