import React from 'react';
import { ChakraProvider, Box, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box p={4} maxWidth="800px" mx="auto">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to My Chakra UI App
        </Heading>
        <Text fontSize="lg">
          This is a basic example of an app built with Chakra UI. Chakra UI is a simple, modular, and accessible component library that gives you the building blocks you need to build your React applications.
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
