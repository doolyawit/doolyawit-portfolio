import React from 'react';
import StarSvg from './svg/StarSvg';
import Position from './Position';

function NameAndPosition() {
  return (
    <div className="relative col-span-10 col-start-2 row-span-2 grid h-[456px] w-[1064px] grid-cols-10  grid-rows-1 bg-beige">
      <div className="col-span-10 row-span-3 grid grid-cols-10 grid-rows-3">
        <Position />
      </div>
      <div className="absolute left-[340px] top-[220px] z-50 ">
        <StarSvg color="#f36336" width="56.06" height="58.48" />
      </div>
      <div className="col-span-10 col-start-1  row-span-1 flex  h-[218px] w-[1064px]  items-center justify-center text-center font-jk text-head1 font-extrabold text-gray">
        DOOLYAWIT YODKAEW
      </div>
    </div>
  );
}

export default NameAndPosition;
