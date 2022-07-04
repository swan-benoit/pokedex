import React, { FC } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import { gql, useQuery } from '@apollo/client';


interface PokemonsProps {
    size: number,
    page: number
}

const query =gql`
    query {
        findPokemons(input: { size: 20, page: 2 }) {
            name,
            image_url,
        }
    }
`;

const Pokemons: FC<PokemonsProps> = (props) => {
        const { loading, error, data } = useQuery(query);

        if (error) return <p>Error :(</p>;

        return loading ? <p>Loading...</p> : <>{
            data
                .findPokemons
                .map((pokemon: { name: string; image_url: string; }) => (
                    <Pokemon name={pokemon.name} image_url={pokemon.image_url}></Pokemon>
                ))
        }</>;
    }
;

export default Pokemons;

