import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import GithubStats from "../components/GithubStats";

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
    </>

  );

}
