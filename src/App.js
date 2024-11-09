import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { useRef } from "react";
import Projectscopy from "./Components/Projects copy/Projects";
import Education from "./Components/EdBlogs/Education/Education";
import Blogs from "./Components/EdBlogs/Blogs/Blogs";

const App = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectscopyRef = useRef(null);
  const projectsRef = useRef(null);
  const contactmeRef = useRef(null);
  const educationRef = useRef(null);
  const certificatesRef = useRef(null);

  const scrollTocomponent = (componentName) => {
    let offset = 0;
    switch (componentName) {
      case "hero":
        offset = heroRef.current.offsetTop - 0;
        break;
      case "skills":
        offset = skillsRef.current.offsetTop - 60;
        break;
      case "education":
        offset = educationRef.current.offsetTop - 0;
        break;
      case "certificates":
        offset = certificatesRef.current.offsetTop - 0;
        break;
      case "projectscopy":
        offset = projectscopyRef.current.offsetTop - 60;
        break;
      case "projects":
        offset = projectsRef.current.offsetTop - 60;
        break;
      case "blogs":
        offset = projectscopyRef.current.offsetTop - 60;
        break;
      case "contact-me":
        offset = contactmeRef.current.offsetTop - 60;
        break;
    }
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="App">
        <Navbar scrollTocomponent={scrollTocomponent} />
        <div className="container">
          <div ref={heroRef}>
            <Hero />
          </div>

          <div ref={educationRef}>
            <Education />
          </div>
          <div ref={certificatesRef}>
            <Blogs />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={projectscopyRef}>
            <Projectscopy />
          </div>
          <div ref={contactmeRef}>
            <ContactMe />
          </div>
        </div>
        <Footer />
     
      </div>
    </>
  );
};

export default App;
