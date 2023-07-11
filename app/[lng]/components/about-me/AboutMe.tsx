import Description from './Description';
import Name from './Name';
import ProfilePhoto from './svg/avatar.svg';
import Skills from './Skills';
import { BaseProp } from '../../../types';

function AboutMe({ lng }: BaseProp) {
  return (
    <div className="flex h-full w-full flex-col gap-5 xl:gap-10">
      <div className="flex w-full  gap-3 xl:h-[456px] xl:gap-4">
        <div className="h-full w-1/2 border text-orange dark:text-green">
          <ProfilePhoto /*style={{ height: '456px' }}*/ className={'flex items-start justify-start xl:h-[456px]'} />
        </div>
        <div className="flex h-full w-1/2 flex-col justify-between">
          <Name lng={lng} />
          <Description lng={lng} />
        </div>
      </div>
      <div className="-mt-4 mb-4 h-1/2 w-full 2xl:mb-0 2xl:h-1/6">
        <Skills lng={lng} />
      </div>
    </div>
  );
}

export default AboutMe;
