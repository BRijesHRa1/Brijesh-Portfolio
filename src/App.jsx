import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMe from "./components/contactMeSection/ContactMe";
import EduAndExp from "./components/experienceSection/EduAndExp";

import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import LoadMore from "./components/projectsSection/LoadMore";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";


function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <EduAndExp/>
      <ProjectsMain />
      <LoadMore />
      
      <ContactMe />
      <FooterMain />
    </main>
  );
}

export default App;
