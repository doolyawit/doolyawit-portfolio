import Description from './Description';
import Name from './Name';
import ProfilePhoto from './svg/avatar.svg';
import Skills from './Skills';
import { BaseProp } from '../../../types';

function AboutMe({ lng }: BaseProp) {
  return (
    <div className="flex h-full w-full flex-col gap-2 lg:gap-10">
      <div className="flex w-full flex-col gap-4 md:flex-row xl:h-[456px]">
        <div className="h-full w-full text-orange dark:text-green md:w-1/2">
          <ProfilePhoto className={'flex items-start justify-start xl:h-[456px]'} />
        </div>
        <div className="flex h-full w-full flex-col justify-between gap-5 md:w-1/2 lg:gap-0">
          <Name lng={lng} />
          <Description lng={lng} />
        </div>
      </div>
      <div className="-mt-4 mb-4 w-full xl:h-1/2 2xl:mb-0 2xl:h-1/6">
        <Skills lng={lng} />
      </div>
    </div>
  );
}

export default AboutMe;
