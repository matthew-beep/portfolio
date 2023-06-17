import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Body from './components/Body.js';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='page-container'>
        <header className="App-header">
          <Nav /> 
        </header>
        <Body />
        <Body />
      </div>
    </div>
  );
}

export default App;
