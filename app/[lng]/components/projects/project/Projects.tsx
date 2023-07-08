import ProjectHeader from '../ProjectHeader';
import ProjectCard from '../ProjectCard';
import { ProjectService } from '../../../services/project';
import { firstValueFrom } from 'rxjs';
// import ProjectMockRepository from '../../../services/datasources/mock/project';
import ProjectRemoteRepository from '../../../services/datasources/remote/project';

export default async function Projects() {
  const repo = new ProjectService(new ProjectRemoteRepository());
  const projects = await firstValueFrom(repo.getProjects());

  return (
    <div className="flex h-full w-full flex-col items-center gap-2 overflow-y-hidden selection:bg-green dark:selection:bg-orange">
      <ProjectHeader />
      <ProjectCard projects={projects} />
    </div>
  );
}
