import Image from 'next/image';
import ExternalLink from '../external-link';
import { Project } from '../../services/datasources/interface/project';
import { useTranslation } from '../../../i18n';

export default async function ProjectCard({ lng, projects }: { lng: string; projects: Project[] }) {
  const { t } = await useTranslation(lng);

  return (
    projects &&
    projects.map((project, index) => {
      return (
        <div className="w-full border-b py-0" key={index}>
          <div className="mt-2 flex sm:mt-4 xl:mt-5">
            <div className="flex w-1/2 flex-col justify-between gap-2 pb-3 sm:gap-4 xl:gap-0 xl:pb-5">
              <div className="text-jk text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
                {`${project.number} /`} <br />
                {project.name}
              </div>
              <div className="text-st w-2/3 break-words text-start text-xs font-extralight sm:text-sm lg:text-justify lg:text-base">
                {project.description}
              </div>
              <div>
                <ExternalLink
                  label={t('project.learn_more')}
                  link={project.link}
                  className=" text-sm font-normal sm:text-base"
                />
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src={project.photoUrl}
                alt={project.name}
                width={700}
                height={900}
                style={{ objectFit: 'contain' }}
                className="h-full w-full rounded-t-sm drop-shadow-md"
              />
            </div>
          </div>
        </div>
      );
    })
  );
}
