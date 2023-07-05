import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { ParamLanguage } from '../types';
import AboutMe from './components/about-me/AboutMe';

export default async function HomePage({ params: { lng } }: ParamLanguage) {
  return (
    <div>
      {/* landing section */}

      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="home">
        <NavBar lng={lng} />
        <Introduction lng={lng} />
      </div>
      {/* about me section */}
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="about">
        <AboutMe />
      </div>
      {/* projects section */}
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="projects"></div>
      {/*contact section */}
      <div className="grid h-screen w-screen grid-cols-12 grid-rows-4" id="contact"></div>
    </div>
  );
}
