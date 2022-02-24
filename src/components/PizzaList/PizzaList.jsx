import React from 'react';
import {useSelector} from 'react-redux'


function PizzaList({ product }) {

  const pizzaList = useSelector(store => store.pizzaList);

  return (
    <div className="">
    {pizzaList.map((pizza) => (
      <PizzaItem
      key = {pizza.id}
      name = {pizza.name}
      description = {pizza.description}
      price = {pizza.price}
      image ={pizza.image_path}
      />
    ))}
  </div>
  );
}

export default PizzaList;