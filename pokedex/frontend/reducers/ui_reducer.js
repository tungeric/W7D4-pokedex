import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const _defaultState = {
  pokeDisplay: null,
  errors: {},
  loading: {}
};

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
     let newState = merge({}, state);
     newState.pokeDisplay = action.payload.pokemon.id;
     return newState;
    default:
      return state;
  }
};

export default uiReducer;
