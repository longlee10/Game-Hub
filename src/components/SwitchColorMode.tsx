import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
    </HStack>
  );
};

export default SwitchColorMode;
