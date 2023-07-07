import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { ParamLanguage } from '../types';
import AboutMe from './components/about-me/AboutMe';
import Contact from './components/contact/Contact';
import Projects from './components/projects/project/Projects';

export default async function HomePage({ params: { lng } }: ParamLanguage) {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="home">
        <NavBar lng={lng} />
        <Introduction lng={lng} />
      </div>
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="about">
        <AboutMe />
      </div>
      <div className="flex h-fit w-screen px-10 pt-48" id="projects">
        <Projects />
      </div>
      <div className="relative grid h-screen w-screen grid-cols-12 grid-rows-4" id="contact">
        <Contact />
      </div>
    </div>
  );
}
