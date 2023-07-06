import { PersonalInformation } from '../../constants';
import ExternalLink from '../ExternalLink';

function Email() {
  return (
    <ExternalLink
      className={'flex h-full w-full cursor-pointer items-center justify-center font-jk text-6xl font-extrabold'}
      label={PersonalInformation.EMAIL}
      link={`mailto:${PersonalInformation.EMAIL}`}
    />
  );
}

export default Email;
