import React, { useState } from 'react';
import './GamePlay.css';
import {
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Text,
} from '@chakra-ui/react';
const GamePage = () => {
  const [number, setnumber] = useState();
 
  setInterval( function () {
    let number1 = Math.floor(Math.random() * 21 + 1);
    setnumber(number1);
  }, 6000);
  return (
    <Stack
      height={'100vh'}
      bg={'#161940'}
      w={'100%'}
      justify={'center'}
      spacing={'4'}
      px={{ base: '4', md: '8', lg: '16' }}
    >
         <Stack
          border={'1px solid #FF00FF'}
          boxShadow="#772138 2px 2px 4px 0px, #772138 1px 2px 21px 8px"
          borderRadius={'lg'}
          bgColor="#1A1F26"
          w={'60%'}
          px="4"
          py={'1'}
          textAlign="center"
          spacing={'7'}
          direction='row'
          alignItems={'end'}
        >
          <Text color={'#00F0FF'} fontSize='1.5em'>10</Text>
          <Text color={'#00F0FF'} fontSize='1.5em'>3</Text>
          <Text color={'#00F0FF'} fontSize='1.5em'>17</Text>
          <Text color={'#20FC9D'} fontSize='1.7em' fontWeight={'600'}>9</Text>
        </Stack>
      <CircularProgress
        trackColor="inherit"
        capIsRound
        thickness={'6px'}
        className="circlular progress"
        value={80}
        size={'500px'}
        color={'#20fc94'}
        alignItems={'center'}
        justifyContent={'center'}
        display={'flex'}
      >
        <CircularProgressLabel
          className="circlular progress lable"
          borderRadius={'full'}
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'}
        >
          <Stack
            border={'5px solid #20FC9D'}
            borderRadius={'full'}
            h={'385px'}
            w={'385px'}
            align={'center'}
            justify={'center'}
          >
            <Stack
              border={'5px solid #13cee6'}
              borderRadius={'full'}
              h={'350px'}
              w={'350px'}
              boxShadow={'0 0 25px #13cee6'}
              align={'center'}
              justify={'center'}
            >
              <Stack
                className="text"
                h={'full'}
                w={'full'}
                p={'12'}
                align={'center'}
                justify={'center'}
                spacing='-2'
              >
                <Text
                  flex={'1'}
                  fontSize={'1.4em'}
                  background={
                    'radial-gradient(circle, rgba(201,18,191,1) 0%, rgba(134,40,206,1) 51%)'
                  }
                  backgroundClip={'text'}
                  style={{ WebkitTextStroke: '1px #20fc9d' }}
                  fontWeight='600'
                >
                  17
                </Text>
                <Text flex={'2'} color={'#FCA120'} px={'4'} fontSize={'md'}>
                  Will the next number be Higher or Lower
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </CircularProgressLabel>
      </CircularProgress>
    </Stack>
  );
};

export default GamePage;
