import NameAndPosition from './NameAndPosition';
import HireMe from './HireMe';
import { BaseProp } from '../../../types';

function Introduction({ lng }: BaseProp) {
  return (
    <div
      id="intro"
      className="col-span-10 col-start-2 row-span-3 row-start-2 flex h-full w-full flex-col pb-6 dark:bg-gray"
    >
      <div className="relative h-full w-full bg-beige dark:bg-gray">
        {' '}
        <NameAndPosition lng={lng} />
      </div>
      <div className="text-center">
        <HireMe lng={lng} />
      </div>
    </div>
  );
}

export default Introduction;
