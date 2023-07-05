import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { ParamLanguage } from '../types';
import AboutMe from './components/about-me/AboutMe';

export default async function HomePage({ params: { lng } }: ParamLanguage) {
  return (
    <div className="grid grid-cols-12 grid-rows-4">
      <NavBar lng={lng} />
      <Introduction lng={lng} />
      <AboutMe />
    </div>
  );
}
