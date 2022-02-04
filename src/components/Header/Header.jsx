import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Navbar.tsx";
import OrderBox from "./OrderBox";
import PromotionsCarousel from "./PromotionsCarousel.tsx";

const Header = ({}) => {
  return (
    <Box w="100%">
      <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(16, 1fr)">
        <GridItem rowSpan={1} colSpan={3} >
          <Navbar />
        </GridItem>
        <GridItem rowSpan={{base:7, md:9}} colSpan={{base:3, md:2}} bg="palegoldenrod">
          <PromotionsCarousel />
        </GridItem>
        <GridItem rowSpan={{base:7, md: 9}} colSpan={{base:3, md:1}} bg="turquoise">
          <OrderBox />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
