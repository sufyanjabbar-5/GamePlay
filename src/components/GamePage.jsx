import React from 'react';
import './GamePlay.css';
import { Stack, Text } from '@chakra-ui/react';
const GamePage = () => {
  return (
    <Stack height={'800px'} alignItems={'center'} bg={'#161940'} w={'100%'}>
      <Text color={'white'}>spinner</Text>
      <div class="lds-dual-ring">
       {/* <div style={{color:'white',position:'absolute',top:'100%',left:"100%"}}>21</div> */}
       {/* <div style={{border:'1px solid white',position:'absolute',top:'100%',left:"100%"}}></div> */}
      </div>
    </Stack>
  );
};

export default GamePage;
