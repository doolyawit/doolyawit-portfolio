import NameAndPosition from './NameAndPosition';
import HireMe from './HireMe';
import { BaseProp } from '../../../types';

function Introduction({ lng }: BaseProp) {
  return (
    <div id="intro" className="grid h-screen w-screen grid-cols-12 grid-rows-4 dark:bg-gray">
      <div className="relative col-span-10 col-start-2 row-span-2 row-start-2 grid h-[456px] w-[1064px]  grid-cols-10 grid-rows-1 bg-beige dark:bg-gray">
        {' '}
        <NameAndPosition lng={lng} />
      </div>
      <div className="col-span-10 col-start-2 row-span-1 row-start-4 mx-auto flex items-center justify-center text-center">
        <HireMe lng={lng} />
      </div>
    </div>
  );
}

export default Introduction;
