
import './App.css';
import './index.css';
import Content from './components/Content.js';
import VizDAS from './components/VizDAS.js';
import ScrollToTop from './components/ScrollToTop.js';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Content />}/>
            <Route path="/VizDAS" element={<VizDAS />}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
