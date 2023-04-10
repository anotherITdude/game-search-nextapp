import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  return (
    <div>
      <Menu>
        <MenuButton
          marginX={10}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem>{platform?.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
