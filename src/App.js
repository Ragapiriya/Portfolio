import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import { useRef } from 'react';
import userEvent from '@testing-library/user-event';

const App=()=> {
  const heroRef=useRef(null);
  const skillsRef= useRef(null);
  const projectsRef= useRef(null);
  const contactmeRef= useRef(null);
  const scrollTocomponent=(componentName)=>{
    let offset=0;
    switch (componentName){
      case 'hero':
        offset = heroRef.current.offsetTop - 0; 
        // heroRef.current.scrollIntoView({behavior:'smooth'});
        break;
      case 'skills':
        offset = skillsRef.current.offsetTop - 60;
        // skillsRef.current.scrollIntoView({behavior:'smooth'});
        break;
      case 'projects':
        offset = projectsRef.current.offsetTop - 60;
        // projectsRef.current.scrollIntoView({behavior:'smooth'});
        break;
      case 'contact-me':
        // contactmeRef.current.scrollIntoView({behavior:'smooth'});
        offset = contactmeRef.current.offsetTop - 60;
        break;
      default:
        break;
    }
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
  return (
    <>
    <div className="App">
      
      <Navbar scrollTocomponent={scrollTocomponent}/>
      <div className='container'>
        <div ref={heroRef}>
          <Hero/>
        </div>
        <div ref={skillsRef}>
          <Skills/>
        </div>
        <div ref={projectsRef}>
          <Projects/>
        </div>
        <div ref={contactmeRef}>
          <ContactMe/>
        </div>
      
      </div>
      <Footer/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact-me' element={<ContactMe/>}/>
        </Routes>
       
      </BrowserRouter> */}
      
      
      {/* // <Navbar/>
        //     <div className='container'>
        //       <Hero/>
        //       <Skills/>
        //       <Projects/>
        //       <ContactMe/>
        //     </div>
        // <Footer/> */}
        
    </div>
    </>
    
  );
}

export default App;
