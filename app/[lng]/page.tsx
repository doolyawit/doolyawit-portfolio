import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { ParamLanguage } from '../types';
import AboutMe from './components/about-me/AboutMe';
import Contact from './components/contact/Contact';
import Projects from './components/projects/project/Projects';
import DrawerMenuProvider from './contexts/DrawerMenuProvider';

export default async function HomePage({ params: { lng } }: ParamLanguage) {
  return (
    <div className="inline-block h-full w-full selection:bg-green dark:selection:bg-orange">
      <div className="flex h-full w-full items-center justify-center overflow-x-hidden">
        <div className="w-screen max-w-7xl justify-center">
          <DrawerMenuProvider>
            <NavBar lng={lng} />
          </DrawerMenuProvider>
          <div className="h-full w-full px-8 md:px-10 lg:px-12 xl:px-[80px]">
            <div id="home" className="flex h-screen w-full 2xl:h-[860px]">
              <div className="h-full w-full pt-[130px] md:pt-[140px]">
                <Introduction lng={lng} />
              </div>
            </div>
            <div className="flex h-fit w-full sm:h-screen lg:pt-16 xl:h-fit xl:pt-0 2xl:h-[720px]" id="about">
              <AboutMe lng={lng} />
            </div>
            <div className="flex h-fit w-full" id="projects">
              <Projects lng={lng} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full items-center justify-center xl:h-fit" id="contact">
        <Contact lng={lng} />
      </div>
    </div>
  );
}
