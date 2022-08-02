import { Heading, Stack, Text, Input } from '@chakra-ui/react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { React, useState } from 'react';
const LiveChat = () => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  return (
    <Stack
    w={'100%'}
      p={'4'}
      alignItems={'center'}
      bg={'#1A1F26'}
      borderRadius={'3xl'}
      mt={'0 !important'}
      border={'4px solid #D306D4'}
    >
      <Stack w={'full'} alignItems='baseline'>
      <Heading
        color={'#FFFFFF'}
        fontSize={'md'}
        borderBottom={'2px solid #FCA120'}
      >
        Live Chat
      </Heading>
      </Stack>
      <Stack>
        <Heading size={'sm'} color={'#23C232'}>
          Jack
        </Heading>
        <Text color={'#BCBCC2'}>Hi there how are you doing?</Text>

        <Heading size={'sm'} color={'#20DEFC'}>
          William
        </Heading>
        <Text color={'#BCBCC2'}>Im good jack, how are you?</Text>

        <Heading size={'sm'} color={'#E79421'}>
          Eric
        </Heading>
        <Text>Hope everyone is doin fine</Text>

        <Heading size={'sm'} color={'#601E96'}>
          Andrew
        </Heading>
        <Text color={'#BCBCC2'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Stack>

      <Stack
        border={'2px solid yellow'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={'2'}
        w={'100%'}
      >
        <Stack w={'100%'} direction={'row'} alignItems={'center'}>
          <Heading size={'sm'} color={'#E2A004'}>
            Me:
          </Heading>
          <Input
            _focusVisible={{}}
            border={'none'}
            value={value}
            onChange={handleChange}
            placeholder="Here is a sample placeholder"
            color={'#BCBCC2'}
            size="sm"
          />
        </Stack>
        <Stack bgColor={'yellow'} fontSize={'30px'}>
          <RiSendPlaneFill />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LiveChat;
