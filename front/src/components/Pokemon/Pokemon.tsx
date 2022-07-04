import React, { FC } from 'react';
import './Pokemon.css';

interface PokemonProps {
    name: string,
    image_url: string
}

const Pokemon: FC<PokemonProps> = (props) => (
  <div className="Pokemon">
      <h3> {props.name} </h3>
      <img src={props.image_url} alt="#"/>
  </div>
);

export default Pokemon;
