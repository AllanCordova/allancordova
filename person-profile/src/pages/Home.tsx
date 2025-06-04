import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
    <>
      <div className="back">
        <ParticlesBackground />
      </div>
      <Header />
      <Intro />
      <Projects />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
