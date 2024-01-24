import About from "../components/sections/About";
import Projects from "../components/sections/Projects"
import TechStack from "../components/sections/TechStack";
import Experience from "../components/sections/Experience";
import MainPage from "../components/sections/MainPage";
import Contact from "../components/sections/Contact";
import HeaderButton from "../components/buttons/HeaderButton";

function Home() {
  return (
      <>
      <HeaderButton />
      <MainPage />
      <About />
      <Experience/>
      <TechStack/>
      <Projects/>
      <Contact/>
      </>
  );
}

export default Home
