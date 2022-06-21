import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import CartContext from "./Context/CartContext";
import UserContext from "./Context/UserContext";
import Layout from "./Layout";
import Config from "./Screen/Config";
import ConfigContext from "./Screen/ConfigContext";
import Home from "./Screen/Home";
import Products from "./Screen/Products";

const initState = {
  nombre: "Matias",
  email: "tes@test.com.ar",
  isVip: false,
};

function App() {
  const [usuario, setUsuario] = useState(initState);
  const editEmail = (email) => {
    setUsuario({ ...usuario, email });
  };
  const value = { usuario, setUsuario, editEmail };

  const [cart, setCart] = useState([{ name: "mesa", price: 100 }]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addCart }}>
      <UserContext.Provider value={value}>
        <Layout usuario={usuario}>
          <Routes>
            <Route path="/" element={<Home usuario={usuario} />} />
            <Route
              path="config"
              element={<Config usuario={usuario} setUsuario={setUsuario} />}
            />
            <Route path="configContext" element={<ConfigContext />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
