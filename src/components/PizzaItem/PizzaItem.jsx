import { useState } from 'react';

function PizzaItem({ pizza }) {
  return (
    <>
      <div className="pizza-container">

        <div className="img"><img src={pizza.image_path}/></div>

        <div className="pizza-details-container">
          <div className="pizza-title"><h1>{pizza.name}</h1></div>
          <div className="pizza-description"><p>{pizza.description}</p></div>
          <div className="pizza-price"><h3>{pizza.price}</h3></div>
        </div>

        <div className="button-container">
          <button>Add</button>
        </div>
      </div>
    </>
  );
}

export default PizzaItem;