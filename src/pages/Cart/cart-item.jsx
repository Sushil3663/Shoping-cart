import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateItemValue } = useContext(ShopContext)
    const { id, productImage, productName, price } = props
    const updateValue =(e) =>{
        updateItemValue(Number(e.target.value),id)


    }

    return (

        <div className='cartItem'>

            <img src={productImage} alt='img' />
            <hr style={{ color: 'silver' }} />

            <div className="desc">
                <h3>{productName}</h3>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input value ={cartItems[id]} onChange ={updateValue}/>
                    <button onClick={()=>addToCart(id)}>+</button>
                </div>
            </div>
        </div>

    )
}

export default CartItem