import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="0px 15px 20px 15px">
        <Image priority={true} alt="logo" width={50} src={logo} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default Navbar;
