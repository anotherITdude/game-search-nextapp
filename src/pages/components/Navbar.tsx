import {HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <HStack boxShadow={'xl'} justifyContent="space-between" padding="20px 15px 20px 15px" borderBottom={'solid 0.5px'} marginBottom={10}>
        <HStack>
          <Icon  boxSize={10} fontSize={34} as={FaCode} />
          <Text>NextJS Game App</Text>
        </HStack>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default Navbar;
