import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
            <div className='container'>
              <Hero/>
              <Skills/>
              <Projects/>
              <ContactMe/>
            </div>
        <Footer/>
        
    </div>
  );
}

export default App;
