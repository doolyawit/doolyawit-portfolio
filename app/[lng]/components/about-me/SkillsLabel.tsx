import Underline from './svg/underline.svg';

function SkillsLabel({ label }: { label: string }) {
  return (
    <div>
      <div className="mb-2 text-center font-st text-3xl font-normal">{label}</div>
      <div className="flex content-center justify-center text-orange dark:text-green">
        <Underline />
      </div>
    </div>
  );
}

export default SkillsLabel;
