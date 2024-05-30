import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
        <Navbar/>
          <div className='container'>
            <Hero/>
          </div>
    </div>
  );
}

export default App;
