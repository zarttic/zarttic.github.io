import { Cursor } from 'animal-island-ui';
import IslandNav from './components/IslandNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import IslandFooter from './components/IslandFooter';

function App() {
  return (
    <Cursor>
      <IslandNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <IslandFooter />
    </Cursor>
  );
}

export default App;
