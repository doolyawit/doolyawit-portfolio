import Image from 'next/image';
import ExternalLink from '../external-link';
import { Project } from '../../services/datasources/interface/project';

function ProjectCard({ projects }: { projects: Project[] }): React.ReactNode {
  return (
    projects &&
    projects.map((project, index) => {
      return (
        <div className="flex h-2/3 w-full gap-2 border-b py-4" key={index}>
          <div className="flex h-full w-1/2 flex-col justify-between">
            <div className="text-jk text-4xl font-semibold">
              {`${project.number} /`} <br />
              {project.name}
            </div>
            <div className="text-st w-2/3 text-justify text-caption font-light">{project.description}</div>
            <div>
              <ExternalLink label="Learn More &#8599;" link={project.link} className="font-jk text-xl font-medium" />
            </div>
          </div>
          <div className="h-full w-1/2">
            <Image
              src={project.photoUrl}
              alt={project.name}
              width={900}
              height={900}
              className="h-full w-full rounded-2xl object-fill"
            />
          </div>
        </div>
      );
    })
  );
}

export default ProjectCard;
