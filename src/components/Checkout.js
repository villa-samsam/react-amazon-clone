import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

export const Checkout = () => {

  const [{cart}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
       <div className='checkout__left'>
        <img className='checkout__ad' 
        src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg'
        alt=''/>

        <div>
            <h2 className='checkout__title'>Your Shopping Cart</h2>

            {cart.map(item => (
              <Checkout
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}

              />
            ))}



        </div>

       </div>

       <div className='checkout__right'>
        <Subtotal/>
            <h2>The subtotal will go here</h2>
       </div>








    </div>
  )
}

export default Checkout;

