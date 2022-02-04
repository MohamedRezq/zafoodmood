import { Box, Button, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import QuickMenuSelect from "./QuickMenuSelect.tsx";
const OrderBox = () => {
  return (
    <Box h="100%">
      <Flex color="white" flexDirection="column" h="100%">
        <Box bg="teal.500" w="100%" py={3} align="center" fontSize={20}>
          New Order
        </Box>
        <Box
          bg="teal.400"
          w="100%"
          h="100%"
          py={3}
          align="center"
          fontSize={20}
          position="relative"
        >
          <Flex flexDirection="column" color="black" px={5}>
            <Flex justify="space-around" fontWeight="bold">
              <Box>Total :</Box>
              <Box>345.99{" $"}</Box>
            </Flex>
            <QuickMenuSelect />
            <Box position="absolute" bottom="25" px={2} w="90%">
                <Button w="100%" colorScheme='teal' variant='solid' mx="auto">
                Proceed to payment
                </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrderBox;
