import React from 'react';
import Comon from './svg/comone.svg';

function LetWork({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-left font-jk text-6xl font-extrabold lg:text-center lg:text-7xl xl:text-8xl">
      {label}
      <div className="hidden text-orange dark:text-green xl:flex">
        <Comon />
      </div>
    </div>
  );
}

export default LetWork;
