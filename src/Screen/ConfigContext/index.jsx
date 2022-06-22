import { useContext, useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Button from "../../Components/Button";
import UserContext from "../../Context/UserContext";

const ConfigContext = () => {
  const { usuario, editEmail } = useContext(UserContext);
  const [email, setEmail] = useState(usuario.email);
  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Stack spacing={10}>
            <Button onClick={() => editEmail(email)}>Sign in</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ConfigContext;
