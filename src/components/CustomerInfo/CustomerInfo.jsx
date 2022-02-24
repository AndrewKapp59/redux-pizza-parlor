import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function CustomerInfo(){
    const dispatch = useDispatch();
    const history = useHistory();
    /// todo notes
    // figure out state value 
    let [customerToAdd, setCustomerToAdd] = useState({ customer_name: '', street_address: '', city: '', zip: '', type: ''})

    const addCustomer= (event) => {
        event.preventDefault();
        console.log('Submitted customer Address');


        dispatch({type: 'ADD_NEW_CUSTOMER', payload: { 
             customer_name: customerToAdd.customer_name,
             street_address: customerToAdd.street_address, 
             city: customerToAdd.city, 
             zip: customerToAdd.zip, 
             type: customerToAdd.type,
              }});
        history.push("/checkout");
    }

    const handleNameChange = (event) => {
      setCustomerToAdd({
        ...customerToAdd,
        customer_name: event.target.value,
      });
    }

      const handleAddressChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          street_address: event.target.value,
        });
      }



      const handleCityChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          city: event.target.value,
        });
      }

      const handleZipChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          zip: event.target.value,
        });
      }

      const handleTypeChange = (event) => {
        setCustomerToAdd({
          ...customerToAdd,
          type: event.target.value,
        });
      }



    return (
        <form onSubmit={(event) => addCustomer(event)}>
          <input
            value={customerToAdd.customer_name}
            onChange={handleNameChange}
            type='text'
            placeholder='Name'
          />

          <input
            value={customerToAdd.street_address}
            onChange={handleAddressChange}
            type='text'
            placeholder='Address'
          />

        <input
            value={customerToAdd.city}
            onChange={handleCityChange}
            type='text'
            placeholder='City'
          />

        <input
            value={customerToAdd.zip}
            onChange={handleZipChange}
            type='text'
            placeholder='Zip'
        />
        
        <select type='text'  onChange={handleTypeChange} value={customerToAdd.type} >
             <option value="Delivery">Delivery</option>
             <option value="Pick-Up">Pick-Up</option>
        </select>

          <button type='submit'>Next</button>
        </form>
      );
    }


export default CustomerInfo;
