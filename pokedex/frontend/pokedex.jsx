import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';

import PokemonIndexContainer from './components/pokemon/pokemon_index_container';


//phase 4
import { HashRouter, Route } from 'react-router-dom';

//test
import * as APIUtil from './util/api_util';
import { createPokemon, receiveNewPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

const Root = ({store}) => (
  <Provider store = {store}>
    <HashRouter>
      <div>
        <h1>I wanna be the very best</h1>
        <Route path="/" component={PokemonIndexContainer} />

      </div>
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded',() => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store = {store} />, rootEl);


  // test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createPokemon = createPokemon;
  window.receiveNewPokemon = receiveNewPokemon;

  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
});
