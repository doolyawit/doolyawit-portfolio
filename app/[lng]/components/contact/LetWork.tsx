import React from 'react';
import { Comon } from './svg/Comon';

function LetWork() {
  return (
    <div className="flex flex-col items-center justify-center text-center font-jk text-8xl font-extrabold">
      {`Let's Work Together`}
      <div className="text-orange dark:text-green">
        <Comon />
      </div>
    </div>
  );
}

export default LetWork;
