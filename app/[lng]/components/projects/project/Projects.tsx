'use client';

import ProjectHeader from '../ProjectHeader';
import ProjectCard from '../ProjectCard';
import useViewModel from './useViewModel';

function Projects() {
  const { projects } = useViewModel();

  return (
    <div className="flex h-full w-full flex-col items-center gap-2 overflow-y-hidden selection:bg-green dark:selection:bg-orange">
      <ProjectHeader />
      <ProjectCard projects={projects} />
    </div>
  );
}

export default Projects;
