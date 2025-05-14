import Intro from "../components/Intro";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
    <>
      <div className="intro">
        <Intro />
      </div>

      <div className="back">
        <ParticlesBackground />
      </div>
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
