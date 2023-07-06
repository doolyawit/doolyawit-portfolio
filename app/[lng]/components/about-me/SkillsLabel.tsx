import Underline from './svg/underline.svg';

function SkillsLabel() {
  return (
    <>
      <div className="mb-2 text-center font-st text-3xl font-normal">Skills</div>
      <div className="flex content-center justify-center text-orange dark:text-green">
        <Underline />
      </div>
    </>
  );
}

export default SkillsLabel;
