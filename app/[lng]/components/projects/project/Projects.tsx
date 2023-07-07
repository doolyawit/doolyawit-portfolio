'use client';
import ProjectHeader from '../ProjectHeader';
import ProjectCard from '../ProjectCard';
import useViewModel from './useViewModel';
function Projects() {
  const { projects } = useViewModel();
  return (
    <div className="col-span-10 col-start-2 row-span-3 row-start-2 flex	h-full w-full grid-flow-row flex-col items-center gap-2">
      <ProjectHeader />
      <ProjectCard projects={projects} />
    </div>
  );
}

export default Projects;
