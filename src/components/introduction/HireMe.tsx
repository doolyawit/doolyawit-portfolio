import React from 'react';
import HireMeButton from './HireMeButton';

function HireMe() {
  return (
    <div className="col-span-10 col-start-2 row-span-2 grid ">
      <p className="px-32 py-2 text-center font-st text-body font-normal text-gray dark:text-beige">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nulla
        mauris. Donec ornare nibh eget risus interdum, sit amet pellentesque
        tellus dignissim. Sed bibendum tellus odio, a sodales massa ullamcorper
        ut.
      </p>
      <HireMeButton />
    </div>
  );
}

export default HireMe;
