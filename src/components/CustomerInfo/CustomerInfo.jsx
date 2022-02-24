import React, { useState } from 'react';
import {useDispatch} from 'react-redux';


function CustomerInfo(){






    

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
            placeholder='Street Address'
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
        
        <select name="" id="">
             <option value="Delivery">Delivery</option>
             <option value="Pick-Up">Pick-Up</option>
        </select>

          <button type='submit'>Next</button>
        </form>
      );
    }




export default CustomerInfo;
