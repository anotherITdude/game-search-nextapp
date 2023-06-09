import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
          colorScheme="green"
        ></Switch>
        <Text whiteSpace='nowrap'>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
