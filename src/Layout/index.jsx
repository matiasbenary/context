import { Box } from "@chakra-ui/react";

import Header from "./Header";
import Main from "./Main";

const Layout = ({ children, usuario }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      maxW="1252px"
      m="auto"
    >
      <Header usuario={usuario} />
      <Main>{children}</Main>
    </Box>
  );
};

export default Layout;
