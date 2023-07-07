import Description from './Description';
import Name from './Name';
import ProfilePhoto from './svg/avatar.svg';
import Skills from './Skills';

function AboutMe() {
  return (
    <div className="flex h-full w-full flex-col gap-10 selection:bg-green dark:selection:bg-orange">
      {/* TODO : fix photo size */}
      <div className="flex h-[456px] w-full gap-4">
        <div className="h-full w-1/2 text-orange dark:text-green">
          <ProfilePhoto style={{ height: '456px' }} />
        </div>
        <div className="flex h-full w-1/2 flex-col justify-between">
          <Name />
          <Description />
        </div>
      </div>
      <div className="-mt-4 mb-4 h-1/2 w-full 2xl:mb-0 2xl:h-1/6">
        <Skills />
      </div>
    </div>
  );
}

export default AboutMe;
