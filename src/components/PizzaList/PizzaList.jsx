import React from 'react';
import {useSelector} from 'react-redux';

import PizzaItem from '../PizzaItem/PizzaItem';
import './PizzaList.css';


function PizzaList() {

  const pizzaList = useSelector(store => store.pizzaList);

  console.log('pizzaList', pizzaList);

  return (
    <div className="pizza-containers">
    {pizzaList.map((pizza) => (
      <PizzaItem
      key={pizza.id}
      pizza = {pizza}
      />
    ))}
  </div>
  );
}

export default PizzaList;