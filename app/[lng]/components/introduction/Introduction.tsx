import NameAndPosition from './NameAndPosition';
import HireMe from './HireMe';
import { BaseProp } from '../../../types';

function Introduction({ lng }: BaseProp) {
  return (
    <div className="h-full w-full snap-center">
      <NameAndPosition lng={lng} />
      <div className="h-1/2 text-center xl:h-full">
        <HireMe lng={lng} />
      </div>
    </div>
  );
}

export default Introduction;
