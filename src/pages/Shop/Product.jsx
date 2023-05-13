import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopContext } from "../../context/shop-context";


const Product = (props) => {
    const {addToCart,cartItems} = useContext(ShopContext);

    const {id, productImage, productName, price } = props
    const count =cartItems[id];


    return (
        <>
            <div className="product">

                <img src={productImage} alt='img' />
                <hr style={{color:'silver'}}/>

                <div className="desc">
                    <h3>{productName}</h3>
                    <p>{price}</p>
                </div> 
                <button className='addToCart' onClick={()=>addToCart(id)}>
                Add to Cart {<>({count})</>}
                </button>
            </div>
          





        </>
    )
}

export default Product