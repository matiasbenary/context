import { Route, Routes } from "react-router-dom";

import { CartProvider } from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";
import Layout from "./Layout";
import Config from "./Screen/Config";
import ConfigContext from "./Screen/ConfigContext";
import Home from "./Screen/Home";
import Products from "./Screen/Products";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="config" element={<Config />} />
            <Route path="configContext" element={<ConfigContext />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </Layout>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
