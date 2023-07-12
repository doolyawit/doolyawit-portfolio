import { PersonalInformation } from '../../constants';
import ExternalLink from '../external-link';

function Email() {
  return (
    <ExternalLink
      className={
        'flex h-fit w-fit cursor-pointer flex-wrap items-center justify-center font-jk text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-6xl xl:flex-nowrap xl:font-extrabold'
      }
      label={PersonalInformation.EMAIL}
      link={`mailto:${PersonalInformation.EMAIL}`}
    />
  );
}

export default Email;
