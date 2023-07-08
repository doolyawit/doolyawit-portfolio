import { Observable } from 'rxjs';

export interface Project {
  number: string;
  name: string;
  description: string;
  link: string;
  photoUrl: string;
}

export interface ProjectServiceAble {
  reqGetProjects(): Observable<Project[]>;
}

export interface ProjectRepositoryAble {
  getProjects: () => Observable<Project[]>;
}
