import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://connect-assets.prosple.com/cdn/ff/MbdZ-CGGpdqmcGmn0gj99kB7KSHc_6dew9Ok5WZh-Lk/1637080273/public/2021-11/banner-amazon-1786x642-2021.jpg' alt=''/>
        

    <div className='home__row'>
        <Product 
        id='00001'
        title='Self development book' 
        price='21.00'
        image='https://m.media-amazon.com/images/I/61rOus07jlL._AC_UF1000,1000_QL80_.jpg'
        rating={5}/>

        <Product
        id='00002'
        title='Sony Wireless Noise Cancelling Stereo Headphones WH-1000XM4' 
        price='480.00'
        image='https://m.media-amazon.com/images/I/41a-oX15G+L._AC_UF894,1000_QL80_.jpg'
        rating={4}/>
        

    </div>

    <div className='home__row'>
        <Product
        id='00021'
        title='Hair Staightener Tymo Ring' 
        price='123.00'
        image='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YPtGlyzZL.jpg'
        rating={3}/>

        <Product
        id='00022'
        title='Nars Foundation Light Reflect Tint' 
        price='67.00'
        image='https://m.media-amazon.com/images/I/61daYhS5xXL._AC_UF894,1000_QL80_.jpg'
        rating={5}/>

        <Product
        id='00023'
        title='Logitech G502 HERO High Performance Gaming Mouse' 
        price='85.00'
        image='https://resource.logitech.com/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-1-nb.png'
        rating={5}/>
    </div>

    <div className='home__row'>
        <Product
        id='00023'
        title='Mr. Coffee Coffee Maker with Auto Pause and Glass Carafe, 12 Cups, Black' 
        price='45.00'
        image='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71LB1AbsorL._AC_UF894,1000_QL80_.jpg'
        rating={5}/>
    </div>


    </div>

    </div>
  )
}

export default Home;