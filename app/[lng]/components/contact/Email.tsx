import { PersonalInformation } from '../../constants';
import ExternalLink from '../external-link';

function Email() {
  return (
    <ExternalLink
      className={'flex h-fit w-fit cursor-pointer items-center justify-center font-jk text-6xl font-extrabold'}
      label={PersonalInformation.EMAIL}
      link={`mailto:${PersonalInformation.EMAIL}`}
    />
  );
}

export default Email;
