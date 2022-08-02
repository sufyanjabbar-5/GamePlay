import React, { useState } from 'react';
import './GamePlay.css';
import { Button, Stack, Text } from '@chakra-ui/react';
const GamePage = () => {
  
  return (
    <Stack
      height={'100vh'}
      alignItems={'center'}
      bg={'#161940'}
      w={'100%'}
      justify={'center'}
      spacing={'4'}
    >
      {/* <div className="lds-dual-ring" style={{ border: '10px soild red' }}>
        <div style={{ color: 'white', position: 'absolute', top: '100%', left: "100%" }}>21</div>
        <div style={{ border: '1px solid white', position: 'absolute', top: '100%', left: "100%" }}></div>
      </div> */}

      <div class="centered" style={{ height: '60vh', width: '60vh' }}>
        <div
          id="divSpinner"
          class="spinner loading"
          style={{ height: '100%', width: '100%' }}
        >
          <div
            class="loading-text"
            style={{ height: '100%', width: '100%', padding: 20 }}
          >
            <Stack height={'100%'} w={'100%'}>
              <Stack
                border={'5px solid #20FC94'}
                borderRadius={'full'}
                padding={'6'}
                h={'100%'}
              >
                <Stack
                  boxSize={'100%'}
                  bgColor={'#1D1D30'}
                  border={'5px solid #13CEE6'}
                  boxShadow={'0 0 15px #13cee6'}
                  align={'center'}
                  justify={'center'}
                  borderRadius={'full'}
                >
                  <Text color={'white'}>
                   17
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default GamePage;
