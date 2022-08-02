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
  Stack,
} from '@chakra-ui/react';
import GamePage from './components/GamePage';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import LiveChat from './components/livechat/LiveChat';
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <GamePage/> */}
      <Stack px={'4'} >
        <LeaderBoard />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
