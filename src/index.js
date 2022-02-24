import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));


const pizzaList = (state = [], action) => {
  // TODO - set book list with data from server
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload
  }
  return state;
}