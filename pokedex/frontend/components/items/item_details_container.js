import { connect } from 'react-redux';
import ItemDetails from './item_details';

const mapStateToProps = (state, ownProps) => {
  // console.log(state.entities.items[ownProps.match.params.itemId]);
  // console.log(ownProps);
  return {
    item: state.entities.items[ownProps.match.params.itemId],
    ui: state.ui
  };
};

export default connect(mapStateToProps)(ItemDetails);
