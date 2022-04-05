import { Button, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      zIndex={3}
      backgroundColor={"brand.500"}
      position={"fixed"}
      w="100vw"
      top={0}
      left={0}
      p={5}
      alignItems="center"
      variant={"primary"}
      boxShadow="dark-lg"
    >
      <Heading pl={5}>LOGO</Heading>
      <Spacer />
      <Button mx={"5vw"} variant="outline" colorScheme={"black"}>
        item1
      </Button>
      <Button mx={"5vw"} variant="outline" colorScheme={"black"}>
        item1
      </Button>
      <Button
        mx={"5vw"}
        size="lg"
        variant="outline"
        colorScheme={"black"}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
}

export default Header;
