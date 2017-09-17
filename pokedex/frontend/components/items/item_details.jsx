import React from 'react';
import ReactDOM from 'react-dom';

const ItemDetails = ({item}) => {
  const selectedItem = item || {};
  return (
    <div>
      <h3>{selectedItem.name}</h3>
      <ul>
        <li>Happiness: {selectedItem.happiness}</li>
        <li>Price: {selectedItem.price}</li>
      </ul>
    </div>
  );
};

export default ItemDetails;
