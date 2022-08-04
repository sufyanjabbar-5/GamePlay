import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './Counter';
import './Counter.css';
import { Stack, Text } from '@chakra-ui/react';
const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <Text minW={'fit-content'} paddingBottom={'2'} color={'#FCFCFC'} fontSize={'sm'} textAlign={'center'}>COMPETITION ENDS IN</Text>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing="8"
        className="countdown-link"
      >
        <DateTimeDisplay
          textShadow={'0px 0px 13px #FFB300'}
          value={days}
          type={'Days'}
          isDanger={days <= 1}
        />
        <DateTimeDisplay
          textShadow={'0px 0px 13px #00FF3C'}
          value={hours}
          type={'Hours'}
          isDanger={false}
        />
        <DateTimeDisplay
          textShadow={'0px 0px 13px #FF00C4'}
          value={minutes}
          type={'Mins'}
          isDanger={false}
        />
        <DateTimeDisplay
          textShadow={'0px 0px 13px #0080FF'}
          value={seconds}
          type={'Secs'}
          isDanger={false}
        />
      </Stack>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
