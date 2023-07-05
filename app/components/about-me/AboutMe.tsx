import Information from './Information';
import ProfilePhoto from './ProfilePhoto';
import Skills from './Skills';

function AboutMe() {
  return (
    <div
      id="about"
      className="grid h-screen w-screen grid-cols-12 grid-rows-4 "
    >
      {/* TODO : fix photo size */}
      <div className="col-span-4 col-start-2 row-span-2 row-start-2 text-orange dark:text-green">
        <ProfilePhoto />
      </div>
      <div className="col-span-6 col-start-6 row-span-2 row-start-2 grid grid-cols-6 grid-rows-2 p-[16px]">
        <Information />
      </div>
      <div className="col-span-10 col-start-2 row-span-1 row-start-4">
        <Skills />
      </div>
    </div>
  );
}

export default AboutMe;
