import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <Navbar/>
          <div className='container'>
            <Hero/>
            <Skills/>
          </div>
    </div>
  );
}

export default App;
