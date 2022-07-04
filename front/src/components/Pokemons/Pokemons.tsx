import React, { FC } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import { Set } from 'immutable';
import PokemonEntity from '../../model/Pokemon.model';


interface PokemonsProps {
    pokemons: Set<PokemonEntity>
}


const Pokemons: FC<PokemonsProps> = (props) => {
        return <>{
            props.pokemons
                .map((pokemon: { name: string; image_url: string; }) => (
                    <Pokemon name={pokemon.name} image_url={pokemon.image_url}></Pokemon>
                ))
        }</>;
    }
;

export default Pokemons;

