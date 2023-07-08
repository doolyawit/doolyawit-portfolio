import { ProjectRepositoryAble, ProjectServiceAble } from '../datasources/interface/project';

export class ProjectService implements ProjectRepositoryAble {
  private repo: ProjectServiceAble;

  constructor(repo: ProjectServiceAble) {
    this.repo = repo;
  }

  getProjects = () => {
    return this.repo.reqGetProjects();
  };
}
