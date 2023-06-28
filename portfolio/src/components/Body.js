import { React } from 'react';
import { Link } from 'react-router-dom';
import resume from './img/resume-icon.svg';
import {ReactComponent as Background} from './img/blob-scene-haikei.svg';

export default function Body(props) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (      
        <div id='home' className='container home'>
            <div className='row align-items-center home-content'>
                <div className='col-12 col-md-6 intro-text'>
                    <h4 className='text-2xl welcome'>Hi, I am</h4>
                    <h1 className='text-5xl my-2'>Matthew Herradura</h1>
                    <h2 className='my-2 text-3xl'>UI / UX Designer</h2>
                    <div className='inline-flex flex-col items-start'>
                        <h2 className='my-2 text-3xl inline-block'>Front End Developer</h2>
                        <div className='flex justify-between w-3/4 mt-2 border-2 border-solid'>
                            <div>
                                <a href='https://www.linkedin.com/in/matthewherradura/' target='_blank'>
                                    <div className='flex flex-col items-center'>
                                        <div className='relative border-2 border-solid'> 
                                            <i className="fa-brands fa-linkedin text-5xl body-icon hover:text-white mb-2"></i>
                                            <h4 id='title' className='m-auto icon-title absolute border-2 border-solid transform -translate-y-1/2'>LinkedIn</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex flex-col items-center'>
                                <a href='https://github.com/matthew-beep' target='_blank' className='body-icon '><i className="fa-brands fa-github text-5xl hover:text-white mb-2"></i></a>
                                <h4 id='title' className='m-auto icon-title'>GitHub</h4>
                            </div> 
                            <div className='flex flex-col items-center'>
                                <Link to='/' onClick={() => scrollToSection('contact')} className='body-icon'><i className="fa-solid fa-envelope text-5xl hover:text-white mb-2"></i></Link>
                                <h4 id='title' className='m-auto icon-title'>Contact Me</h4>
                            </div>
                            <div className='flex flex-col items-center'>
                                <i className="fa-solid fa-file text-5xl hover:text-white body-icon mb-2"/>
                                <h4 id='title' className='m-auto icon-title'>Resume</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 test2'>
                    <div className="circle">
                    </div>
                </div>
            </div>
        </div>
    )
}