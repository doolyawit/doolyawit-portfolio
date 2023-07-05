import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { ParamLanguage } from '../types';
import AboutMe from './components/about-me/AboutMe';

export default async function HomePage({ params: { lng } }: ParamLanguage) {
  return (
    <div className="overflow-x-hidden">
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="home">
        <NavBar lng={lng} />
        <Introduction lng={lng} />
      </div>
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="about">
        <AboutMe />
      </div>
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="projects"></div>
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="contact"></div>
    </div>
  );
}
