import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';


export const Checkout = () => {
  return (
    <div className='checkOut'>
       <div className='checkOut__left'>
        <img className='checkOut__ad' 
        src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg'
        alt=''/>

        <div>
            <h2 className='checkOut__title'>Your Shopping Cart</h2>
            {/* Basket Item */}
            {/* Basket Item */}
            {/* Basket Item */}
            {/* Basket Item */}


        </div>

       </div>

       <div className='checkOut__right'>
        <Subtotal/>
            <h2>The subtotal will go here</h2>
       </div>








    </div>
  )
}

export default Checkout;