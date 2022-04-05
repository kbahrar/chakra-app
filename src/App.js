import React from "react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import Details from "./components/Details";
import theme from "./themes/theme";
import Cart from "./components/Cart";

import "./themes/style.css";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={0}>
        <Header />
        <Flex
          mt={"100px"}
          h={{ base: "auto", md: "100vh" }}
          py={[0, 10, 20]}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
