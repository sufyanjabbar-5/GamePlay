import React from 'react';
import './GamePlay.css';
import { CircularProgress, CircularProgressLabel, Stack, Text } from '@chakra-ui/react';
const GamePage = () => {

  return (
    <Stack height={'100vh'} alignItems={'center'} bg={'#161940'} w={'100%'} justify={'center'} spacing={'4'}>

      <CircularProgress trackColor='inherit' capIsRound thickness={'6px'} className='circlular progress' value={80} size={'500px'} color={'#20fc94'} alignItems={'center'} justifyContent={'center'} display={'flex'}>

        <CircularProgressLabel className='circlular progress lable' borderRadius={'full'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
          <Stack border={'5px solid #20FC9D'} borderRadius={'full'} h={'385px'} w={'385px'} align={'center'} justify={'center'}>
            <Stack border={'5px solid #13cee6'} borderRadius={'full'} h={'350px'} w={'350px'} boxShadow={'0 0 25px #13cee6'} align={'center'} justify={'center'}>
              <Stack className='text' h={'full'} w={'full'} p={'12'} align={'center'} justify={'center'}>
                <Text flex={'2'} h={"fit-content"} w={'fit-content'} fontSize={'1.4em'} background={'radial-gradient(circle, rgba(201,18,191,1) 0%, rgba(134,40,206,1) 51%)'} backgroundClip={'text'} style={{ WebkitTextStroke: '1px #20fc9d' }}>17</Text>
                <Text flex={'2'} color={'#FCA120'} px={'4'} fontSize={'md'}>Will the next number be Higher or Lower</Text>
              </Stack>
            </Stack>
          </Stack>
        </CircularProgressLabel>
      </CircularProgress>
    </Stack>
  );
};

export default GamePage;
