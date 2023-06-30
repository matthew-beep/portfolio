import { React, useEffect } from 'react';
import Nav from './Nav.js';
import Body from './Body.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import { ContactUs } from './Contact.js';
import { useLocation } from 'react-router-dom';

export default function Content(props) {

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
                <div id='about' className='nav-body about h-auto '>
                    <About/>
                </div>
                <div className='nav-body about h-auto'>
                    <Skills />
                </div>
                <div className='nav-body about h-auto'>
                    <Projects />
                </div>
                <div id='contact' className='nav-body about h-auto'>
                    <ContactUs/>
                </div>
                <div className='mt-20 p-3'>
                    <footer>
                        <p className='text-white bold text-md'>Built and Designed by Matthew Herradura 2023</p>
                    </footer>
                </div>
            </div>
        </div>
    )
};