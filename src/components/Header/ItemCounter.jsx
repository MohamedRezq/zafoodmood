import {HStack, Button, Input, useNumberInput} from "@chakra-ui/react"

function ItemCounter() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 30,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack maxW={100}>
      <Button {...dec} size="xs">-</Button>
      <Input {...input} size="xs" />
      <Button {...inc} size="xs">+</Button>
    </HStack>
  );
}

export default ItemCounter;