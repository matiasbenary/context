import { Box } from "@chakra-ui/react";

import { useUserContext } from "../Context/UserContext";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ children }) => {
  const { usuario, saludar } = useUserContext();

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      maxW="1252px"
      m="auto"
    >
      <h1>{saludar}</h1>
      <Header usuario={usuario} />
      <Main>{children}</Main>
    </Box>
  );
};

export default Layout;
