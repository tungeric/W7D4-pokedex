import { merge } from 'lodash';
import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_ONE_POKEMON:
      let newState = merge({}, state);
      newState[action.payload.pokemon.id] = action.payload.pokemon;
      return newState;
    case RECEIVE_NEW_POKEMON:
      return merge({}, state, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
