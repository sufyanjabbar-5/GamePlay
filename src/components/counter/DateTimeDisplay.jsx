import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger,color,textShadow }) => {
  return (
    
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p style={{color:color,textShadow:textShadow, paddingBottom:'2.4rem',fontSize:'3.5rem'}}>{value}</p>
      <span style={{color:'#FCFCFC',textTransform:'capitalize'}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
