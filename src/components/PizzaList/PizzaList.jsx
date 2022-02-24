import React from 'react';
import { useSelector } from 'react-redux';

import PizzaItem from '../PizzaItem/PizzaItem';
import './PizzaList.css';

import { useHistory } from 'react-router-dom';



function PizzaList() {
  const pizzaList = useSelector((store) => store.pizzaList);

  const history = useHistory();

  const handleClick = () => {
    history.push('/customer_info')
  }

  console.log('pizzaList', pizzaList);

  return (
    <>
      <div className="pizza-containers">
        {pizzaList.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
      <div className='footer-container'>
        <button className="next" onClick={handleClick}>Next</button>
      </div>
    </>
  );
}

export default PizzaList;
