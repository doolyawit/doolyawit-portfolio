import Description from './Description';
import Name from './Name';
import ProfilePhoto from './svg/avatar.svg';
import Skills from './Skills';

function AboutMe() {
  return (
    <div className="col-span-10 col-start-2 row-span-3 row-start-2 flex h-full w-full flex-col gap-10 selection:bg-green dark:selection:bg-orange">
      {/* TODO : fix photo size */}
      <div className="flex h-2/3 w-full gap-4">
        <div className="h-full w-1/2 text-orange dark:text-green">
          <ProfilePhoto />
        </div>
        <div className="h-full w-1/2">
          <Name />
          <Description />
        </div>
      </div>
      <div className="h-1/3 w-full">
        <Skills />
      </div>
    </div>
  );
}

export default AboutMe;
