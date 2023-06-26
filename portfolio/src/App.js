import logo from './logo.svg';
import './App.css';
import './index.css';
import Nav from './components/Nav.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Content from './components/Content.js';
import VizDAS from './components/VizDAS.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Content />}/>
          <Route path="/VizDAS" element={<VizDAS />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
