import { ProjectRepositoryAble, ProjectServiceAble } from '../datasources/interface/project';

export class ProjectRepository implements ProjectRepositoryAble {
  private service: ProjectServiceAble;
  constructor(service: ProjectServiceAble) {
    this.service = service;
  }

  getProjects = () => {
    return this.service.reqGetProjects();
  };
}
