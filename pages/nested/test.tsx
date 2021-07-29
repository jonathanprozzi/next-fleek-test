import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Test() {
  return (
    <Box>
      <Heading>Nested--test</Heading>
      <Text>Some basic examples here.</Text>
      <Button colorScheme='brandGreen'>
        This button uses the custom colorScheme
      </Button>
    </Box>
  );
}
