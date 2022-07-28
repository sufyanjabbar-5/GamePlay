import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import GamePage from './components/GamePage'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <GamePage/>
    </ChakraProvider>
  );
}

export default App;
