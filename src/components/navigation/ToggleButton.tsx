import React from 'react';

function ToggleButton() {
  return (
    <div className="flex flex-1 shrink grow basis-0 items-center justify-center gap-2.5 self-stretch">
      <div className="relative h-[69.25px] w-1/3">
        <div className="absolute left-[21px] top-[20px] h-[30px] w-[70px]">
          <div className="absolute left-0 top-0 h-[30px] w-[70px] rounded-[100px] border border-gray" />
          <div className="absolute left-[5.96px] top-[5.25px] h-[19.50px] w-[19.36px] rounded-full bg-orange" />
          <div className="absolute left-[3.72px] top-[14.25px] h-[2.25px] w-[2.23px] rounded-full bg-beige" />
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
