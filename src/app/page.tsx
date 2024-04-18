import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Projects from "./components/projects";
import SectionDivider from "./components/section-divider";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <>
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </>
    </main>
  );
}
