import React, { FC } from 'react';
import './Pokemon.css';

interface PokemonProps {
    name: string,
    image_url: string
}

const Pokemon: FC<PokemonProps> = (props) => (
  <div className="Pokemon">
      <h1> {props.name} </h1>
      <img src={props.image_url} alt="#"/>
  </div>
);

export default Pokemon;
