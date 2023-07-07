import Flower from './svg/Flower';

function ProjectHeader() {
  return (
    <div className="flex h-1/3 w-full items-start justify-between border-b pb-2">
      <div className="flex h-1/2 gap-4 self-center font-jk text-7xl font-extrabold">
        <div className="flex self-end">Projects</div>

        <div className="flex self-end text-orange dark:text-green">
          <Flower width="4rem" height="4rem" />
        </div>
      </div>
      <div className="self-end font-st text-2xl font-light">what I do...</div>
    </div>
  );
}

export default ProjectHeader;
