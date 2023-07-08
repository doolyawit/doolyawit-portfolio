import ProjectHeader from '../ProjectHeader';
import ProjectCard from '../ProjectCard';
import { ProjectService } from '../../../services/project';
import { firstValueFrom } from 'rxjs';
// import ProjectMockRepository from '../../../services/datasources/mock/project';
import ProjectRemoteRepository from '../../../services/datasources/remote/project';
import { BaseProp } from '../../../../types';

export default async function Projects({ lng }: BaseProp) {
  const repo = new ProjectService(new ProjectRemoteRepository());
  const projects = await firstValueFrom(repo.getProjects());

  return (
    <div className="flex h-full w-full flex-col items-center gap-2 overflow-y-hidden">
      <ProjectHeader lng={lng} />
      <ProjectCard projects={projects} lng={lng} />
    </div>
  );
}
