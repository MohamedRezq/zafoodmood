import React from "react";
import {
  Text,
  Flex,
  Avatar,
  List,
  ListIcon,
  ListItem,
  Box,
  Button,
} from "@chakra-ui/react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { MdCheckCircle } from "react-icons";
import burgerImg from "./../../../assets/burger.png";
import Image from "next/image";
import ItemCounter from "./itemCounter";

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "ghana1", label: "Ghan1a" },
  { value: "nigeri1a", label: "Ni1geria" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "ghana1", label: "Ghan1a" },
  { value: "nigeri1a", label: "Ni1geria" },
];

export default function App() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const customRender = (selected) => {
    return (
      <Flex
        flexDir="row"
        alignItems="center"
        justify="space-between"
        style={{ width: "100%" }}
      >
        <Image src={burgerImg} width={100} height={100} />
        <Box>{selected.label}</Box>
        <Box textAlign="right">34.55 $</Box>
      </Flex>
    );
  };

  const customCreateItemRender = (value) => {
    return (
      <Text>
        <Box as="span">Create</Box>{" "}
        <Box as="span" bg="red.300" fontWeight="bold">
          "{value}"
        </Box>
      </Text>
    );
  };

  return (
    <Box position="relative">
      <Box className="quickMenu">
        <CUIAutoComplete
          tagStyleProps={{
            rounded: "full",
          }}
          label=""
          placeholder="Search Menu"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          itemRenderer={customRender}
          createItemRenderer={customCreateItemRender}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
          inputStyleProps={{
            bg: "white",
            borderRadius: "10px",
            border: "none",
          }}
          hideToggleButton={false}
          listStyleProps={{
            overflowY: "auto",
            maxHeight: "170px",
            fontSize: "12pt",
            zIndex: "2",
          }}
          listItemStyleProps={{ width: "100%", cursor: "pointer" }}
        />
      </Box>
      <Box position="absolute" top="85" style={{ zIndex: "1" }} w="100%" px={2}>
        <List spacing={3} w="100%" overflowY="auto" height="300px">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </List>
      </Box>
    </Box>
  );
}

const OrderItem = ({}) => {

    return (
        <ListItem fontSize="12pt">
            <Flex justify="space-around">
              <Box pr={3}>
                <Image src={burgerImg} width={100} height={100} />
              </Box>
              <Flex w="100%" flexDirection="column" justify="space-around">
                <Box style={{ fontSize: "10pt" }} textAlign="left" w="100%">
                  Burger Sandwich Burger Sandwich
                </Box>
                <Flex justify="space-between" alignItems="center" className="itemCounter">
                  <ItemCounter />
                  <Box px={5} style={{ fontSize: "11pt", fontWeight: "bold" }}>
                    344.44 EGP
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </ListItem>
    )
}