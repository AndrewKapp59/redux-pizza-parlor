import React from 'react';
import {useSelector} from 'react-redux'


function PizzaList({ product }) {

  const pizzaList = useSelector(store => store.pizzaList);

  console.log('pizzaList', pizzaList);

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