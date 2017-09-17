import React from 'react';
import ReactDOM from 'react-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const pokemans = this.props.pokemon || [];
    return (
      <div className="poke-list">
        <ol>
          {
            pokemans.map((poke) => <PokemonIndexItem key={poke.id} pokemon = {poke} />)
          }
        </ol>
        <div className = "poke-detail">
          <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
        </div>
      </div>
    );
  }
}

export default PokemonIndex;
