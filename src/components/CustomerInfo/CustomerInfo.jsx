import React, { useState } from 'react';
import {useDispatch} from 'react-redux';


function CustomerInfo(){
    const dispatch = useDispatch();

    /// todo notes
    // figure out state value 

    const addCustomer= (event) => {
        event.preventDefault();
        console.log('Submitted customer Address');

        dispatch({type: 'ADD_NEW_CUSTOMER', payload: { customer_name: '', street_address: '', city: '', zip: '', type: '', total: '', time: '' }});


    }

    return (
        <form onSubmit={(event) => addCustomer(event)}>
          <input
            value={}
            onChange={}
            type='text'
            placeholder='Name'
          />

          <input
            value={}
            onChange={}
            type='text'
            placeholder='Address'
          />

        <input
            value={}
            onChange={}
            type='text'
            placeholder='City'
          />

        <input
            value={}
            onChange={}
            type='text'
            placeholder='Zip'
        />
        
        <select type='text'  onChange={} value={} >
             <option value="Delivery">Delivery</option>
             <option value="Pick-Up">Pick-Up</option>
        </select>

          <button type='submit'>Next</button>
        </form>
      );
    }


export default CustomerInfo;
