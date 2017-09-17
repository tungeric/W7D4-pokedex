import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";

export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveOnePokemon = payload => {
  return {
    type: RECEIVE_ONE_POKEMON,
    payload
  };
};

export const receiveNewPokemon = pokemon => {
  return {
    type: RECEIVE_NEW_POKEMON,
    pokemon
  };
};

export const requestAllPokemon = () => dispatch => {
  APIUtil.fetchAllPokemon().then(
    response => dispatch(receiveAllPokemon(response))
  );
};

export const requestOnePokemon = id => dispatch => {
  APIUtil.fetchOnePokemon(id).then(
    response => dispatch(receiveOnePokemon(response))
  );
};

export const createPokemon = data => dispatch => {
  APIUtil.createPokemon(data).then(
    response => dispatch(receiveNewPokemon(response))
  );
};
