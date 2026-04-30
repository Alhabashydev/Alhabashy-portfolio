import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Services />
        <Projects />
        <WhyWorkWithMe />
        <Timeline />
        <Contact />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
