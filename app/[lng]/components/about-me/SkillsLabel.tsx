import Underline from './svg/underline.svg';

function SkillsLabel({ label }: { label: string }) {
  return (
    <div>
      <div className="mb-2 text-center font-st text-xl font-normal md:text-2xl lg:text-3xl">{label}</div>
      <div className="flex content-center justify-center text-orange dark:text-green">
        <Underline className={'w-[70px] lg:w-[105px]'} />
      </div>
    </div>
  );
}

export default SkillsLabel;
