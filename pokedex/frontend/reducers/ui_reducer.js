import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const _defaultState = {
  errors: {},
  loading: {}
};

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
     let newState = merge({}, state);
     newState.pokeDisplay = action.pokemon.id;
     return newState;
    default:
      return state;
  }
};

export default uiReducer;
