import Image from 'next/image';
import ExternalLink from '../external-link';
import { Project } from '../../services/datasources/interface/project';
import { useTranslation } from '../../../i18n';

export default async function ProjectCard({ lng, projects }: { lng: string; projects: Project[] }) {
  const { t } = await useTranslation(lng);

  return projects.map((project, index) => {
    return (
      <div className="w-full border-b py-0" key={index}>
        <div className="mt-2 inline-block sm:mt-4 sm:flex xl:mt-5">
          <div className="w-full justify-between gap-2 pb-2 sm:flex sm:w-1/2 sm:flex-col sm:gap-4 sm:pb-3 xl:gap-0 xl:pb-5">
            <div className="text-jk pb-1 text-xl font-semibold sm:pb-0 md:text-2xl lg:text-3xl xl:text-4xl">
              {`${project.number} /`} <br className="hidden sm:block" />
              {project.name}
            </div>
            <div className="text-st w-full break-words text-start text-xs font-extralight sm:w-2/3 sm:text-sm lg:text-justify lg:text-base">
              {project.description}
            </div>
            <div className="block w-full py-2 sm:hidden">
              <Image
                src={project.photoUrl}
                alt={project.name}
                width={700}
                height={900}
                style={{ objectFit: 'cover' }}
                className="h-full w-full rounded-sm drop-shadow-md"
              />
            </div>
            <div>
              <ExternalLink
                label={t('project.learn_more')}
                link={project.link}
                className="text-sm font-normal sm:text-base"
              />
            </div>
          </div>
          <div className="hidden w-1/2 sm:block">
            <Image
              src={project.photoUrl}
              alt={project.name}
              width={700}
              height={900}
              style={{ objectFit: 'cover' }}
              className="h-full w-full rounded-t-sm drop-shadow-md"
            />
          </div>
        </div>
      </div>
    );
  });
}
