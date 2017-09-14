import React from 'react';
import ReactDOM from 'react-dom';
import PokemonIndexItem from './pokemon_index_item';

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
      <div>
        <ul>
          { pokemans.map((poke) =>
            <PokemonIndexItem key={poke.id} pokemon = {poke} />
        )}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
