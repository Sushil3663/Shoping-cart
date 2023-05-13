import { createContext, useState } from "react";
import Product from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};



export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

 
  const Amount = ()=>{
    let itemAmount = 0;
    for(let item in cartItems){
      if (cartItems[item] > 0) {
        let itemInfo = Product.find((product) => product.id === Number(item));
        itemAmount += cartItems[item] * itemInfo.price;
      }
    }
    return itemAmount;
    
    
  }

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

const updateItemValue = (newValue,id) =>{
  setCartItems((prev) => ({ ...prev, [id]: newValue}));
}

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemValue,
    Amount,
  
  };
  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
