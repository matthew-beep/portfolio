import { React } from 'react';
import Nav from './Nav.js';
import Body from './Body.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import { useLocation } from 'react-router-dom';

export default function Content(props) {
    const location = useLocation();
    return (
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
                <div id='about' className='nav-body about '>
                    <About/>
                </div>
                <div className='nav-body about '>
                    <Skills />
                </div>
                <div className='nav-body about border-2 border-solid h-auto'>
                    <Projects />
                </div>
                <footer>
                    <p className='text-white'>Built and Designed by Matthew Herradura 2023</p>
                </footer>
            </div>
        </div>
    )
};