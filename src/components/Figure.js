import React from 'react';

const Figure = () => {
  return (
    <div>
      <svg height='250' width='200' class='figure-container'>
        <line x1='60' y1='20' x2='140' y2='20' />
        <line x1='140' y1='20' x2='140' y2='50' />
        <line x1='60' y1='20' x2='60' y2='230' />
        <line x1='20' y1='230' x2='100' y2='230' />
      </svg>
    </div>
  );
};

export default Figure;
