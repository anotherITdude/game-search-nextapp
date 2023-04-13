import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaCode } from "react-icons/fa";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchInput: string) => void;
  searchReset: () => void
 
}

const Navbar = ({ onSearch, searchReset }: Props) => {
  return (
    <div>
      <HStack
        boxShadow={"xl"}
        justifyContent="space-between"
        padding="20px 15px 20px 15px"
        borderBottom={"solid 0.5px"}
        marginBottom={10}
      >
        <Icon boxSize={10} fontSize={34} as={FaCode} />
        <Text whiteSpace="nowrap">NextJS Game App</Text>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default Navbar;
