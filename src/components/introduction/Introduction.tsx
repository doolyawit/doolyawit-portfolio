import React from 'react';
import NameAndPosition from './NameAndPosition';
import HireMe from './HireMe';

function Introduction() {
  return (
    <div
      id="intro"
      className="col-span-10 col-start-2 row-span-3 grid h-[694px] grid-cols-12 grid-rows-3"
    >
      <NameAndPosition />
      <HireMe />
    </div>
  );
}

export default Introduction;
