import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav /> 
      </header>
      <div className='container home'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6 test1'>
            Hello
          </div>
          <div className='col-12 col-md-6 test2'>
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
