import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './PizzaItem.css';

function PizzaItem({ pizza }) {

  const [isNotAdded, setIsNotAdded] = useState(true);
  // const [pizzaObject, setPizzaObject] = useState({ id: 0, name: '', description: '', image_path: '', price: 0 });
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log('in handleAdd');

    setIsNotAdded(!isNotAdded);

    addPizzaObject();
  }

  const addPizzaObject = () => {

    if (isNotAdded === true) {
      dispatch({
        type: 'ADD_PIZZA',
        payload: pizza
      })
    } else if (isNotAdded === false) {
      dispatch({
        type: 'REMOVE_PIZZA',
        payload: pizza
      })
    }
  }

  console.log(isNotAdded);

  return (
    <>
      <div className="pizza-container">

        <img src={pizza.image_path} />

        <div className="pizza-details-container">
          <div className="pizza-title"><h1>{pizza.name}</h1></div>
          <div className="pizza-description"><p>{pizza.description}</p></div>
          <div className="pizza-price"><h3>{pizza.price}</h3></div>
        </div>

        <div className="button-container">
          {isNotAdded ? <button onClick={handleAdd}>Add</button> : <button onClick={handleAdd}>Remove</button>}
        </div>
      </div>
    </>
  );
}

export default PizzaItem;