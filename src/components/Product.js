import React from 'react'
import './Product.css';


const Product = ({title, price, rating, image}) => {
  return (
    <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='product__rating'>
            <p>{rating}</p>

        </div>
        </div>

    <img src='https://m.media-amazon.com/images/I/61rOus07jlL._AC_UF1000,1000_QL80_.jpg'/>
    <button>Add to Cart</button>







    </div>
  )
}

export default Product