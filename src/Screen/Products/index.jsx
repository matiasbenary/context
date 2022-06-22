import { useContext } from "react";

import CartContext from "../../Context/CartContext";

const Products = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.map((product, index) => (
        <div key={index}>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
};
export default Products;
