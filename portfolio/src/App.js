import logo from './logo.svg';
import './App.css';
import './index.css';
import Nav from './components/Nav.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <div className='page-container'>
        <div className='blob1'></div>
        <div className='blob2'></div>
        
        <div className='main-content'>
          <div className='nav-body'>
            <header className="App-header">
              <Nav /> 
            </header>
            <Body />
          </div>
          <div className='nav-body about '>
            <About />
          </div>
          <div className='nav-body about '>
            <Skills />
          </div>
          <div className='nav-body about border-2 border-solid h-auto'>
            <Projects />
          </div>
          <footer>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
            <p className='text-white'>Built and Designed by Matthew Herradura 2023</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
