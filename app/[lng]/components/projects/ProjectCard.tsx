import Image from 'next/image';
import ExternalLink from '../external-link';
import { Project } from '../../services/datasources/interface/project';

function ProjectCard({ projects }: { projects: Project[] }): React.ReactNode {
  return (
    projects &&
    projects.map((project, index) => {
      return (
        <div className="flex w-full gap-2 border-b py-4" key={index}>
          <div className="flex w-1/2 flex-col justify-between">
            <div className="text-jk text-4xl font-semibold">
              {`${project.number} /`} <br />
              {project.name}
            </div>
            <div className="text-st w-2/3 text-justify text-caption font-extralight">{project.description}</div>
            <div>
              <ExternalLink label="Learn More &#8599;" link={project.link} className="font-jk text-xl font-normal" />
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={project.photoUrl}
              alt={project.name}
              width={700}
              height={900}
              className="h-full w-full rounded-2xl border object-fill drop-shadow-md"
            />
          </div>
        </div>
      );
    })
  );
}

export default ProjectCard;
