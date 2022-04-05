import React from "react";
import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Input,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";

function Details() {
  const colspan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"}>
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your Details</Heading>
        <Text>If you already have an account, click here to login</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel htmlFor="name">First Name</FormLabel>
            <Input id="name" placeholder="Kamal" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input id="lastName" placeholder="Bahrar" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input id="address" placeholder="Douar NR02 Boulanouar, khouribga" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input id="city" placeholder="Khouribga" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel htmlFor="country">Country</FormLabel>
            <Select>
              <option>Morocco</option>
              <option>Ghana</option>
              <option>USA</option>
              <option>UAE</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to the billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="full" size="lg" variant={"primary"}>
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}

export default Details;
