import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { ParamLanguage } from '../types';
import AboutMe from './components/about-me/AboutMe';
import Contact from './components/contact/Contact';
import Projects from './components/projects/project/Projects';

export default async function HomePage({ params: { lng } }: ParamLanguage) {
  return (
    <div className="inline-block h-full w-full">
      <div className="flex h-full w-full items-center justify-center overflow-x-hidden">
        <div className="max-w-7xl justify-center">
          <NavBar lng={lng} />
          <div className="h-full w-full px-[80px]">
            <div id="home" className="flex h-screen w-full 2xl:h-[860px]">
              <div className="h-full w-full pt-[140px]">
                <Introduction lng={lng} />
              </div>
            </div>
            <div className="flex h-fit w-full 2xl:h-[720px]" id="about">
              <AboutMe />
            </div>
            <div className="flex h-fit w-full" id="projects">
              <Projects />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full items-center justify-center" id="contact">
        <Contact />
      </div>
    </div>
  );
}
