import {
  CircularProgress,
  CircularProgressLabel,
  Heading,
  IconButton,
  Stack,
  Text,
  chakra,
  Button,
  HStack,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import hi from '../../assets/images/hi.png'
import low from '../../assets/images/low.png'
const GameConsole = () => {
  const [counter, setCounter] = useState(100);
  const [number, setnumber] = useState(10);

  useEffect(() => {
    const interval = setInterval(
      () => setnumber(Math.floor(Math.random() * 20 + 1)),
      11000
    );
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (counter < 0) {
      setCounter(100);
    }
    const timeOut = setInterval(() => setCounter(counter - 10), 1000);
    return () => {
      clearInterval(timeOut);
    };
  }, [counter]);
  return (
    <>
      <Stack
        border={'1px solid #FF00FF'}
        boxShadow="0px 0px 22px #FF2E2E"
        borderRadius={'lg'}
        bgColor="#1A1F26"
        w={{ base: '100%' }}
        px="4"
        py={'1'}
        textAlign="center"
        spacing={'7'}
        direction="row"
        alignItems={'baseline'}
      >
        <Text color={'#00F0FF'}>10</Text>
        <Text color={'#00F0FF'}>3</Text>
        <Text color={'#00F0FF'}>17</Text>
        <Text color={'#20FC9D'} fontSize="1.3em" fontWeight={'600'}>
          9
        </Text>
      </Stack>
      <Stack
        px={{ base: '2', md: '0', lg: '2', xl: '24' }}
        py={'6'}
        spacing={'6'}
      >
        <CircularProgress
          trackColor="inherit"
          capIsRound
          thickness={'6px'}
          className="circlular progress"
          value={counter}
          size={'20rem'}
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
              h={{ base: '14rem', sm: '15.5rem' }}
              w={{ base: '14rem', sm: '15.5rem' }}
              align={'center'}
              justify={'center'}
            >
              <Stack
                border={'5px solid #13cee6'}
                borderRadius={'full'}
                h={{ base: '12rem', sm: '14rem' }}
                w={{ base: '12rem', sm: '14rem' }}
                boxShadow={'0 0 25px #13cee6'}
                align={'center'}
                justify={'center'}
              >
                <Stack
                  className="text"
                  w={'75%'}
                  h={'85%'}
                  align={'center'}
                  justify={'center'}
                  spacing="-9"
                  display={'flex'}
                >
                  <Heading
                    as={'h1'}
                    flex={'2'}
                    fontSize={''}
                    background={
                      'radial-gradient(circle, rgba(201,18,191,1) 0%, rgba(134,40,206,1) 51%)'
                    }
                    backgroundClip={'text'}
                    style={{ WebkitTextStroke: '1px #20fc9d' }}
                    fontWeight="700"
                  >
                    {number}
                  </Heading>
                  <Text
                    justifyItems={'end'}
                    color={'#FCA120'}
                    px={'4'}
                    fontSize={{ base: 'x-small', sm: 'xs' }}
                    flex={'1'}
                  >
                    Will the next number be Higher or Lower
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </CircularProgressLabel>
        </CircularProgress>
        <Stack pt="6" direction={'row'} alignItems='baseline' justify={'space-between'}>
          <Stack align={'center'}>
            <Image w='55%' src={hi}/>
            <Heading color={'white'} textShadow={' 0px 0px 4px #68E5FF'}>
              HI
            </Heading>
          </Stack>
          <Text color={'#B6B7C3'}>
            Number range from{' '}
            <chakra.span fontWeight={'bold'} color={'white'}>
              1 to 21
            </chakra.span>
          </Text>
          <Stack spacing={'1'} align={'center'}>
          <Image w='55%' src={low}/>
            <Heading color={'white'} textShadow={'0px 0px 4px #FF0066'}>
              LOW
            </Heading>
          </Stack>
        </Stack>
        <Stack
          pt="12"
          direction={{ base: 'column', sm: 'row' }}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: '6', sm: 'inherit' }}
        >
          <Text color={'white'} align={'center'}>
            <chakra.span
              fontSize={'2xl'}
              color={'white'}
              textShadow={'#FFB300 1px 1px 8px'}
              style={{ WebkitTextStroke: '0.5px #FFB300' }}
            >
              05 {''}
            </chakra.span>
            more chances to improve your score
          </Text>
          <Button
            _hover={{}}
            border="2px solid #13cee6"
            borderColor={''}
            boxShadow="#13cee6 0px 0px 4px 0px, #13cee6 0px 0px 16px 0px"
            variant={'outline'}
            color="white"
            size={'lg'}
            borderRadius={'lg'}
            leftIcon={<GiShoppingCart color="#13cee6" />}
          >
            <Text fontSize={'sm'}>Buy more</Text>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default GameConsole;
