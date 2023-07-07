import { Observable } from 'rxjs';
import { Project, ProjectServiceAble } from '../interface/project';
import BaseAxios from '../../baseAxios';

class ProjectRemoteRepository extends BaseAxios implements ProjectServiceAble {
  constructor() {
    super({ baseURL: 'https://strapi.20cnx.xyz/api' });
  }

  reqGetProjects(): Observable<Project[]> {
    return new Observable<Project[]>((subscriber) => {
      this.getInstance()
        .get('/diwx-projects?populate=*', {
          headers: { Accept: 'application/json', Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` },
        })
        .then((res) => {
          const projects: Project[] = [];
          for (let i = 0; i < res?.data?.data?.length; i++) {
            const element = res.data.data[i].attributes;
            projects.push({
              description: element.description ?? '',
              link: element.link ?? '',
              name: element.name ?? '',
              number: element?.number ?? '',
              photoUrl: element?.image?.data?.attributes?.formats.large.url ?? '',
            });
          }
          subscriber.next(projects);
        })
        .catch((err) => {
          subscriber.error(err);
        });
    });
  }
}

export default ProjectRemoteRepository;
