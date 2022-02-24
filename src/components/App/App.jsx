import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfo from '../CustomerInfo/CustomerInfo'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();

  const fetchPizzaList = () => {
    axios.get('/api/pizza')
    .then(response => {
      dispatch({
        type: 'SET_PIZZA_LIST',
        payload: response.data
      });

    }).catch(error => {
      console.log('Error fetchBookList', error);
      alert('NO PIZZA FOR YOU')
    })
  }

  useEffect(() => {
    fetchPizzaList();
  }, [])

  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customer_info">Costumer Info</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>


        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        {/* <img src='images/pizza_photo.png' /> */}
        <p>Pizza is great.</p>

        <Route path="/" exact>
          <PizzaList/>
        </Route>

        <Route path="/customer_info">
          <CustomerInfo/>
        </Route>

        <Route path="/checkout">

        </Route>

        <Route path="admin">

        </Route>



    
      </div>
    </Router>

  );
}

export default App;
