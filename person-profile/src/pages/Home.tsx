import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "70px" }}>
        <Intro />
        <About />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default Home;
