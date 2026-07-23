import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import GithubStats from "../components/GithubStats";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

export default function Home() {

  return (

    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <About />
      <Skills />
      <Footer />
      <GithubStats />
      <Achievements />
      <Contact />
    </>

  );

}
