/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import Products from '../../Products';
import CartItem from './cart-item';
import { ShopContext } from '../../context/shop-context';
import './cart.css'
import { Link } from 'react-router-dom';



const Cart = () => {
  const { cartItems,Amount } = useContext(ShopContext)
  const amount = Amount()
  return (
    <div className="cart">
      <div>
        <h1>Red Store Shop Item</h1>
      </div>
      <div className="cart">
        {Products.map((element)=>{
          if (cartItems[element.id] !== 0) {
            return <CartItem key={element.id}{...element} />

          }

        })}

      </div>
      <div className="checkout">
        <p>Total: ${amount} </p>
        <Link exact to='/'><button>Shop More</button></Link>
        
      </div>
    </div>
  )
}

export default Cart