import { Observable, of } from 'rxjs';
import { Project, ProjectServiceAble } from '../interface/project';

class ProjectMockRepository implements ProjectServiceAble {
  reqGetProjects(): Observable<Project[]> {
    return of([
      {
        number: '01',
        name: 'Pokemon API x Angular',
        description:
          'A web application that uses the Pokemon API displays a list of Pokemon, Species, Abilities, Types, Food, and their details—using Angular framework and SASS to create this project.',
        link: 'https://camt-mmit.github.io/2022_02-954447-001-term-project-diwx149/pokemons',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126526010876231741/Screenshot_2566-07-06_at_15.43.41.png',
      },
      {
        number: '02',
        name: 'Emoji Fighter',
        description:
          'A simple web application that will help two random emojis that will fight together on the next round using javascript',
        link: 'https://emoji-fighter-diw.netlify.app/',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126780936894296145/Screenshot_2566-07-07_at_14.44.14.png',
      },
      {
        number: '03',
        name: 'Ecommerce Site',
        description:
          'A simple web application that displays a list of products and their details in the modal using React framework.',
        link: 'https://github.com/doolyawit/my-login-register',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126782377000177674/Screen_Shot_2023-07-07_at_14.50.04.png',
      },
      {
        number: '04',
        name: 'Pokemon API x React',
        description: 'A simple web app that uses the Pokemon API to display a random Pokemon.',
        link: 'https://github.com/doolyawit/my-react-app',
        photoUrl:
          'https://cdn.discordapp.com/attachments/1126525893041459200/1126784510281920522/Screen_Shot_2023-07-07_at_14.59.05.png',
      },
    ]);
  }
}

export default ProjectMockRepository;
