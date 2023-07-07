import Image from 'next/image';
import ExternalLink from '../external-link';
import { Project } from '../../services/datasources/interface/project';

function ProjectCard({ projects }: { projects: Project[] }): React.ReactNode {
  return (
    projects &&
    projects.map((project, index) => {
      return (
        <div className="w-full border-b py-0" key={index}>
          <div className="mt-5 flex">
            <div className="flex w-1/2 flex-col justify-between pb-5">
              <div className="text-jk text-4xl font-semibold">
                {`${project.number} /`} <br />
                {project.name}
              </div>
              <div className="text-st w-2/3 break-words text-justify text-base font-extralight">
                {project.description}
              </div>
              <div>
                <ExternalLink label="Learn More &#8599;" link={project.link} className="text-base font-normal" />
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src={project.photoUrl}
                alt={project.name}
                width={700}
                height={900}
                style={{ objectFit: 'fill' }}
                className="h-full w-full rounded-t-sm drop-shadow-md"
              />
            </div>
          </div>
        </div>
      );
    })
  );
}

export default ProjectCard;
