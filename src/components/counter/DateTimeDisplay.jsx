import { Text } from '@chakra-ui/react';
import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger,color,textShadow }) => {
  return (
    
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <Text style={{color:color,textShadow:textShadow}} fontSize={{base:'3xl',lg:'5xl'}} pb={{base:'4',md:'6',lg:'8'}}>{value}</Text>
      <span style={{color:'#FCFCFC',textTransform:'capitalize'}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
