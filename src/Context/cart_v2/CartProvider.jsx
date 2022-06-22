import { useState } from "react";

import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
  // cart context
  const [cart, setCart] = useState([{ name: "mesa", price: 100 }]);

  const addCart = (product) => {
    console.log("add cart");
    // setCart([...cart, product]);
  };

  const deleteItemCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, deleteItemCart }}>
      {children}
    </CartContext.Provider>
  );
};
