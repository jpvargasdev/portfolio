import React from 'react';

function Card({children}: {children: React.ReactNode | React.ReactNode[]}) {
  return (
    <div className='bg-card_light rounded-3xl hover:shadow-md cursor-grab'>
      {children}
    </div>
  );
}

export default React.memo(Card);