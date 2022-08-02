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
import CountdownTimer from './components/counter/CountdownTimer';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <CountdownTimer/>
      <GamePage/>
      

    </ChakraProvider>
  );
}

export default App;
