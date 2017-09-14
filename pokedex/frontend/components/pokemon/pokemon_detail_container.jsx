import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  let pokemon = state.entities.pokemon[state.ui.pokeDisplay];
  return {
    pokemon
  };
};

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
