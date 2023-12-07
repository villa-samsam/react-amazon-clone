import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { Checkbox } from '@mui/material';

const Subtotal = () => {
  return (
    <div className='subTotal'>
        <CurrencyFormat
            renderText={(value) => (
            <>
            <p>
                Subtotal (0 items): <strong>0</strong>
            </p>

            <small className='subTotal__gift'>
                <input type='Checkbox'/>
                This order contains a gift
            </small>
            
            </>

        )}              
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        
        />
    <button>Proceed to Checkout</button>




    </div>
  )
}

export default Subtotal;