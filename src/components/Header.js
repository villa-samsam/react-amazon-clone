import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {

  const [{cart}, dispatch] = useStateValue();


  return (
    <div className='header'>
      <Link to='/'>
      <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
    {/* <img className='header__logo' src='.././assets/shop-logo.jpg'/> */}

      </Link>
    
    <div className='header__search'>
      <input className='header__searchInput' type='text'/>
      <SearchIcon
      className='header__searchIcon'/>

    </div>

    <div className='header__nav'>
      <div className='header__option'>
        <span className='header__optionLineOne'> Hello Guest</span>
        <span className='header__optionLineTwo'> Sign In</span>

      </div>


      <div className='header__option'>
      <span className='header__optionLineOne'> Returns</span>
      <span className='header__optionLineTwo'> &amp;Orders</span>

      </div>

      <div className='header__option'>
      <span className='header__optionLineOne'> Your</span>
      <span className='header__optionLineTwo'> Prime</span>

      </div>
    <Link to='/checkout'>
      <div className='header__optionBasket'>
        <ShoppingBasketIcon/>
        <span className='header__optionLineTwo 
        header__basketCount'>{cart?.length}</span>
      </div>
    </Link>


    </div>



    </div>

  )
}

export default Header