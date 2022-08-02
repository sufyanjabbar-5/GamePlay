import React, { useEffect, useRef, useState } from 'react';
import './GamePlay.css';
import {
  CircularProgress,
  CircularProgressLabel,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BsFillTriangleFill } from 'react-icons/bs';

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
  const [number, setnumber] = useState(10);
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    setInterval(() => setnumber(Math.floor(Math.random() * 20 + 1)), 10000);
  }, []);

  return (
    <Stack
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
        w={{ base: '100%', md: '60%' }}
        px="4"
        py={'1'}
        textAlign="center"
        spacing={'7'}
        direction="row"
        alignItems={'baseline'}
      >
        <Text color={'#00F0FF'} fontSize="1.5em">
          10
        </Text>
        <Text color={'#00F0FF'} fontSize="1.5em">
          3
        </Text>
        <Text color={'#00F0FF'} fontSize="1.5em">
          17
        </Text>
        <Text color={'#20FC9D'} fontSize="1.8em" fontWeight={'600'}>
          9
        </Text>
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
                spacing="-2"
              >
                <Text
                  flex={'1'}
                  fontSize={'1.4em'}
                  background={
                    'radial-gradient(circle, rgba(201,18,191,1) 0%, rgba(134,40,206,1) 51%)'
                  }
                  backgroundClip={'text'}
                  style={{ WebkitTextStroke: '1px #20fc9d' }}
                  fontWeight="600"
                >
                  {number}
                </Text>
                <Text flex={'2'} color={'#FCA120'} px={'4'} fontSize={'md'}>
                  Will the next number be Higher or Lower
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </CircularProgressLabel>
      </CircularProgress>
      <Stack direction={'row'} justify={'space-between'} color={'white'}>
        <IconButton
          _hover={{}}
          _focus={{}}
          _active={{}}
          variant={'ghost'}
          icon={
            <BsFillTriangleFill
              size={'4em'}
              style={{
                background:
                  'radial-gradient(circle, rgba(201,18,191,1) 0%, rgba(134,40,206,1) 51%)',
                backgroundClip: 'border-box',
              }}
            />
          }
          w={'fit-content'}
          h={'fit-content'}
        />
        <IconButton
          _hover={{}}
          _focus={{}}
          _active={{}}
          variant={'ghost'}
          icon={
            <BsFillTriangleFill
              size={'4em'}
              style={{ transform: 'rotate(180deg)' }}
            />
          }
          w={'fit-content'}
          h={'fit-content'}
        />
      </Stack>
    </Stack>
  );
};

export default GamePage;
