import { useState } from 'react';

function pizzaItem({ pizza }) {
  return (
    <>
      <div className="pizza-container">
        
        <div className="img"></div>

        <div className="pizza-details-container">
          <div className="pizza-title"></div>
          <div className="pizza-description"></div>
          <div className="pizza-price"></div>
        </div>

        <div className="button-container">
          <button>Add</button></div>
      </div>
    </>
  );
}