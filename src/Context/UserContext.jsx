import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const initState = {
  nombre: "Matias",
  email: "tes@test.com.ar",
  isVip: false,
};

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(initState);
  const editEmail = (email) => {
    setUsuario({ ...usuario, email });
  };

  const logout = () => setUsuario(undefined);

  const value = { usuario, setUsuario, editEmail, logout, saludar: "saluda" };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
