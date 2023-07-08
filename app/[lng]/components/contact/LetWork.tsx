import React from 'react';
import Comon from './svg/comone.svg';

function LetWork({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center font-jk text-8xl font-extrabold">
      {label}
      <div className="text-orange dark:text-green">
        <Comon />
      </div>
    </div>
  );
}

export default LetWork;
