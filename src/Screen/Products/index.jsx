import { useContext } from "react";

import CartContext from "../../Context/CartContext";

const Products = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => (
        <div>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
};
export default Products;
