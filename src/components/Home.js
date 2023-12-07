import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://connect-assets.prosple.com/cdn/ff/MbdZ-CGGpdqmcGmn0gj99kB7KSHc_6dew9Ok5WZh-Lk/1637080273/public/2021-11/banner-amazon-1786x642-2021.jpg' alt=''/>
        

    <div className='home__row'>
        <Product title='Self development book' 
        price='21.00'
        image='https://m.media-amazon.com/images/I/61rOus07jlL._AC_UF1000,1000_QL80_.jpg'
        rating='5'/>
        <Product/>
        

    </div>

    <div className='home__row'>
        <Product/>
        <Product/>
        <Product/>
    </div>

    <div className='home__row'>
        <Product/>
    </div>

    </div>

    </div>
  )
}

export default Home;