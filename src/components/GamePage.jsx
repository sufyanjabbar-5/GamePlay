import React, { useEffect, useRef, useState } from 'react';
import './GamePlay.css';
import { CircularProgress, CircularProgressLabel, IconButton, Stack, Text } from '@chakra-ui/react';
import { BsFillTriangleFill } from 'react-icons/bs'


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const GamePage = () => {
  const [counter, setCounter] = useState(100);

  useInterval(() => {
    while (counter <= 100) {
      setCounter(counter - 5);
    }
  }, 1000);

  return (
    <Stack height={'100vh'} alignItems={'center'} bg={'#161940'} w={'100%'} justify={'center'} spacing={'4'}>
      <Stack>

        <CircularProgress trackColor='inherit' capIsRound thickness={'6px'} className='circlular progress' value={counter} size={'500px'} color={'#20fc94'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
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
        <Stack direction={'row'} justify={'space-between'} color={'white'}>
          <IconButton _hover={{}} _focus={{}} _active={{}} variant={'ghost'} icon={<BsFillTriangleFill size={'4em'} style={{ background: 'radial-gradient(circle, rgba(201,18,191,1) 0%, rgba(134,40,206,1) 51%)', backgroundClip: 'border-box' }} />} w={'fit-content'} h={'fit-content'} />
          <IconButton _hover={{}} _focus={{}} _active={{}} variant={'ghost'} icon={<BsFillTriangleFill size={'4em'} style={{ transform: 'rotate(180deg)' }} />} w={'fit-content'} h={'fit-content'} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GamePage;

