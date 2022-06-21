import { useContext } from "react";

import { Button as ButtonChakra } from "@chakra-ui/react";

import UserContext from "../../Context/UserContext";

const Button = ({ ...props }) => {
  const { usuario } = useContext(UserContext);
  return (
    <ButtonChakra colorScheme={usuario.isVip ? "gray" : "green"} {...props}>
      {props.children}
    </ButtonChakra>
  );
};
export default Button;
