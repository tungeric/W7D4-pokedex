import { values } from 'lodash';

export const selectAllPokemon = state => {
  const pokemonObj = state.entities.pokemon;
  return values(pokemonObj);
};
