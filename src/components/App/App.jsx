import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <PizzaList/>
  
    </div>
  );
}

export default App;
