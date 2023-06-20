import logo from './logo.svg';
import './App.css';
import './index.css';
import Nav from './components/Nav.js';
import Body from './components/Body.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <div className='page-container'>
        <div className='blob1'></div>
        <div className='blob2'></div>
        
        <div className='main-content'>
          <div className='container nav-body'>
            <header className="App-header">
              <Nav /> 
            </header>
            <Body />
          </div>
          <div className='container nav-body about border-2 border-solid'>
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
