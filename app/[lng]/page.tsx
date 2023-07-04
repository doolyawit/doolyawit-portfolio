import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { ParamLanguage } from '../types';

export default async function HomePage({ params: { lng } }: ParamLanguage) {
  return (
    <div>
      <NavBar lng={lng} />
      <Introduction lng={lng} />
    </div>
  );
}
