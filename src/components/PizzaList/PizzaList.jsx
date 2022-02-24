import React from 'react';
import {useSelector} from 'react-redux'


function PizzaList({ product }) {

  const pizzaList = useSelector(store => store.pizzaList);

  return (
    <div className="">
    {pizzaList.map((pizza) => (
      <PizzaItem
      pizza = {pizza}
      />
    ))}
  </div>
  );
}

export default PizzaList;