import React from 'react';
import {
  Stack,
} from '@chakra-ui/react';
import LeaderBoard from '../leaderboard/LeaderBoard';
import GameConsole from './GameConsole';

const GamePage = () => {


  return (
    <Stack
      bg={'#161940'}
      w={'100%'}
      justify={'center'}
      spacing={'4'}
      pl={{ base: '0', md: '8', lg: '16' }}
      pr={{base:'0',md:"0.5"}}
      pb={'20'}
      direction={{base:"column",md:'row'}}
      justifyContent={'space-between'}
    >
      <Stack w={{ base: '100%', md: '55%' }} >
        <GameConsole />
      </Stack>
      <Stack w={{base:'100%',md:"40%"}}>
        <LeaderBoard />
      </Stack>
    </Stack>
  );
};

export default GamePage;
