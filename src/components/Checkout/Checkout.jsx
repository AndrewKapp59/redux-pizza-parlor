import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Checkout() {
    const customerInfo = useSelector(store=>store.customerList)

    return (
        <>
            <div>
                Address holder
                {customerInfo.map((product, i) =>{
                    return <li key={i}> {product.name}{product.street_address}{product.city}{product.zip}{product.type}</li>
                    
                })}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>description</th>

                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div>
                Cost Holder
            </div>
            <button>Checkout</button>
        </>
    )

}

export default Checkout;
