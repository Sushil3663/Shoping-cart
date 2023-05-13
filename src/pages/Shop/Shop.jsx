import React from 'react'
import Products from '../../Products'
import Product from './Product'
import './Shop.css'

const Shop = () => {
  return (
    <>
      <div className='shop'>
        <div className="shopTitle">
          <h1>Red Store Shop</h1>

        </div>
        <div className="products">
          {Products.map((element) => {
            return <Product key={element.id} {...element} />
          })}

        </div>
      </div>

    </>
  )
}

export default Shop