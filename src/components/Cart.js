import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";

function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} bg={bgColor}>
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your Cart</Heading>
        <Text>If price is too hard on your eyes, try changing the theme.</Text>
        <Button onClick={toggleColorMode} variant={"link"} colorScheme={"black"}>
          try changing the theme
        </Button>
      </VStack>
      <HStack alignItems={"center"} spacing={"6"} w={"full"}>
        <AspectRatio ratio={1} w={24}>
          <Image src="https://fitanu.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/t/m/tmp202168.jpg" />
        </AspectRatio>
        <Stack
          spacing={"0"}
          w={"full"}
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <VStack w={"full"} spacing={0} alignItems="flex-start">
            <Heading size={"md"}>Penny board</Heading>
            <Text color={"gray.500"}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack alignItems={"stretch"} spacing="4" w={"full"}>
        <HStack justifyContent={"space-between"} w="full">
          <Text color={secondColor}>Subtotal</Text>
          <Heading size={"sm"}>$119.00</Heading>
        </HStack>
        <HStack justifyContent={"space-between"} w="full">
          <Text color={secondColor}>Shipping</Text>
          <Heading size={"sm"}>$19.99</Heading>
        </HStack>
        <HStack justifyContent={"space-between"} w="full">
          <Text color={secondColor}>Taxes (estimated)</Text>
          <Heading size={"sm"}>$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack w={"full"} alignItems="center" justifyContent="space-between">
        <Text color={secondColor}>Total :</Text>
        <Heading size={"lg"}>$162.79</Heading>
      </HStack>
    </VStack>
  );
}

export default Cart;
