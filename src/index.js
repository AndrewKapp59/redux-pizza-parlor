import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




const pizzaList = (state = [], action) => {
  // TODO - set book list with data from server
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload
  }
  return state;
}

const customerList  = (state = [], action) => {
  if (action.type ===  'ADD_NEW_CUSTOMER' ){
    return action.payload
  }
    return state;
}

const storeInstance = createStore(
  combineReducers({
      pizzaList,
      customerList
  }), 
  applyMiddleware(
      logger // tell redux that we want to use our new logger 
    )   
);

ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));