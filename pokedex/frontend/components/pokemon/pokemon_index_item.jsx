import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img className="pokemon-pic" src={pokemon.image_url}/>
        {pokemon.name}
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
