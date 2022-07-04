import React, { FC } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import { gql, useQuery } from '@apollo/client';


interface PokemonsProps {
    size: number,
    page: number
}

const query = (size: number, page: number) => gql`
    query {
        findPokemons(input: { size: ${size}, page: ${page} }) {
            name,
            image_url,
        }
    }
`;

const Pokemons: FC<PokemonsProps> = (props) => {
        const { loading, error, data } = useQuery(query(props.size, props.page));

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

