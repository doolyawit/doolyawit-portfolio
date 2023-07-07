import { Observable, of } from 'rxjs';
import { Project, ProjectServiceAble } from '../interface/project';

class ProjectServiceMock implements ProjectServiceAble {
  reqGetProjects(): Observable<Project[]> {
    return of([
      {
        number: '01',
        name: 'Pokemon API',
        description:
          'A simple web app that uses the Pokemon API to display a list of Pokemon and their details. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus enim at congue condimentum. Praesent vel ex eget augue maximus mattis eu sit amet felis. Donec sollicitudin enim ',
        link: 'https://camt-mmit.github.io/2022_02-954447-001-term-project-diwx149/pokemons',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126526010876231741/Screenshot_2566-07-06_at_15.43.41.png',
      },
      {
        number: '02',
        name: 'Pokemon API',
        description:
          'A simple web app that uses the Pokemon API to display a list of Pokemon and their details. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus enim at congue condimentum. Praesent vel ex eget augue maximus mattis eu sit amet felis. Donec sollicitudin enim ',
        link: 'https://camt-mmit.github.io/2022_02-954447-001-term-project-diwx149/pokemons',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126526010876231741/Screenshot_2566-07-06_at_15.43.41.png',
      },
      {
        number: '03',
        name: 'Pokemon API',
        description:
          'A simple web app that uses the Pokemon API to display a list of Pokemon and their details. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus enim at congue condimentum. Praesent vel ex eget augue maximus mattis eu sit amet felis. Donec sollicitudin enim ',
        link: 'https://camt-mmit.github.io/2022_02-954447-001-term-project-diwx149/pokemons',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126526010876231741/Screenshot_2566-07-06_at_15.43.41.png',
      },
      {
        number: '04',
        name: 'Pokemon API',
        description:
          'A simple web app that uses the Pokemon API to display a list of Pokemon and their details. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus enim at congue condimentum. Praesent vel ex eget augue maximus mattis eu sit amet felis. Donec sollicitudin enim ',
        link: 'https://camt-mmit.github.io/2022_02-954447-001-term-project-diwx149/pokemons',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126526010876231741/Screenshot_2566-07-06_at_15.43.41.png',
      },
    ]);
  }
}

export default ProjectServiceMock;
