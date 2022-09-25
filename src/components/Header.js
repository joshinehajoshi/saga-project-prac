import React from 'react';
import cart from './shopping-cart.png'
import {useSelector} from 'react-redux';

function Header() {

  const result = useSelector((state) => 
    state.cartData
  )

  console.warn(result.length)

  return (
    <div className='header'>
        <div className="cart-div">
            <spam className="pb-2">{result.length}</spam>
            <img src={cart}></img>
        </div>
    </div>
  )
}

export default Header