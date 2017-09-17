import React from 'react';
import ReactDOM from 'react-dom';
import { values } from 'lodash';
import { Link, Route } from 'react-router-dom';
import ItemDetailsContainer from '../items/item_details_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId != this.props.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render () {
    let pokemon = this.props.pokemon || {};
    let items = values(this.props.items) || {};
    let moves = values(pokemon.moves).join(", ");
    return (
      <div>
        <img className="pokemon-largepic" src={pokemon.image_url}/>
        <h3>{pokemon.name}</h3>
        <ul>
          <li>Type: {pokemon.poke_type}</li>
          <li>Atack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {moves}</li>
        </ul>
        <h3>Items</h3>
        <ul className='item-list'>
          {
            items.map((item) =>
              <Link key={item.id} to={`/pokemon/${pokemon.id}/item/${item.id}`}>
                <li>
                  <img className="item-pic" src={item.image_url}/>
                </li>
              </Link>
            )
          }
        </ul>
        <Route path='/pokemon/:pokemonId/item/:itemId' component={ItemDetailsContainer} />

      </div>
    );
  }
}

export default PokemonDetail;
