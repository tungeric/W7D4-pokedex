import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
    <li className = "poke-index">
        <img className="pokemon-pic" src={pokemon.image_url}/>
        {pokemon.name}
    </li>
  </Link>
  );
};

export default PokemonIndexItem;
