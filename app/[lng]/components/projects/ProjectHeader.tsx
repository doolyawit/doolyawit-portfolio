import Flower from './svg/Flower';

function ProjectHeader() {
  return (
    <div className="flex w-full items-start justify-between border-b pb-10">
      <div className="flex gap-4 self-center pb-8 font-jk text-7xl font-extrabold">
        <div className="flex self-end">Projects</div>
        <div className="flex self-end text-orange dark:text-green">
          <Flower width="4rem" height="4rem" />
        </div>
      </div>
      <div className="self-end font-st text-xl font-light text-beige">What I do...</div>
    </div>
  );
}

export default ProjectHeader;
