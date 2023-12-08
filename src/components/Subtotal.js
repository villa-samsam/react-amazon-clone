import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getCartTotal}  from '../reducer';


const Subtotal = () => {
  const [{cart}, dispatch] = useStateValue();


  return (
    <div className='subTotal'>
        <CurrencyFormat
            renderText={(value) => (
            <>
            <p>
                Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>

            <small className='subTotal__gift'>
                <input type='Checkbox'/>
                This order contains a gift
            </small>

            </>
        )}              
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        
        />
    <button>Proceed to Checkout</button>




    </div>
  )
}

export default Subtotal;