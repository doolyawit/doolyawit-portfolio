import NameAndPosition from './NameAndPosition';
import HireMe from './HireMe';
import { BaseProp } from '../../../types';

function Introduction({ lng }: BaseProp) {
  return (
    //TODO: sm md lg of introduction
    <div className="w-full snap-center">
      <NameAndPosition lng={lng} />
      <div className="text-center">
        <HireMe lng={lng} />
      </div>
    </div>
  );
}

export default Introduction;
