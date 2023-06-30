import { React } from 'react';
import imdbDoc from './files/imdbDoc.pdf';
import imdbPres from './files/imdbPres.pdf';
import imdbLogo from './img/imdb_svg.svg';
import blossom from './files/blossom.pdf';
import { Link } from 'react-router-dom';
import crest from './img/crest.svg';


export default function Projects(props) {
    
    return (      
        <div id='projects'>
            <h2 className='text-5xl underline decoration-purple underline-offset-8 text-white mb-8'>
                Projects
            </h2>
            <div className='m-auto px-3'>
                <div className='flex md:flex-wrap lg:flex-row flex-col items-center justify-between'>
                    <div className='project-square bg-[#F6C700] project-container'>
                        <img src={require('./img/VizDAS-home.png')} className='object-cover'alt='VizDAS homepage'/>
                        <div className='info py-2 px-3'>
                            <div className='flex flex-col justify-around text-left h-full relative'>
                                <div className='h-full'>
                                    <h3 className='bold text-3xl mb-2'>VizDAS</h3>
                                    <div className='flex mb-2'>
                                        <div className='pill bold mr-2'>
                                            <h4>UX Design</h4>
                                        </div>
                                        <div className='pill bold'>
                                            <h4>Full Stack Development</h4>
                                        </div>
                                    </div>
                                    <p className='regular'>The first ever public facing Distributed Acoustic Sensing research tool. Built in collaboration with 
                                        UW's Earth and Space Science Department and recognized as a Research Award Finalist at the  
                                        <a className='underline text-purple' href='https://ischool.uw.edu/capstone/projects/2023/interactive-data-visualization-distributed-acoustic-sensing'> iSchool 
                                        Capstone Gala.</a>
                                    </p>
                                    <p className='mt-2'><strong>Skills:</strong> HTML/CSS, JavaScript, Python, Leaflet, MUI</p>
                                </div>
                                <div className='links flex w-full'>                                   
                                    <Link className='btn-link mr-2 bold text-lg' to='/VizDAS'>Full Case Study</Link>
                                    <a href='https://dasway.ess.washington.edu/vizdas/' className='btn-link bold text-lg' target='_blank'>Live Site</a>
                            </div>
                            </div>

                        </div>

                    </div>
                    <div className='project-square bg-[#F6C700] project-container'>
                        <img src={imdbLogo} alt='IMDb Logo'/>
                        <div className='info py-2 px-3'>
                            <div className='flex flex-col justify-around text-left h-full relative'>
                                <div className='h-full'>
                                    <h3 className='bold text-3xl mb-2'>IMDb Redesign</h3>  
                                    <div className='flex mb-2'>
                                        <div className='pill bold mr-2'>
                                            <h4>UX Design</h4>
                                        </div>
                                        <div className='pill bold'>
                                            <h4>Information Architecture</h4>
                                        </div>
                                    </div>
                                    <p className='regular'>
                                        An analysis of the Internet Movie Database's information architecture. 
                                        Includes a collection of recommendations for improvement on IMDb's hierarchy of information related to 
                                        labels, search, navigation, site mapping, etc.
                                    </p>
                                    <p className='mt-2'><strong>Skills:</strong> User Testing, Personas, Wireframing</p>
                                </div>
                                <div className='links flex w-full'>     
                                    <a href={imdbDoc} target='_blank' className='btn-link mr-2 bold text-lg'>Full Case Study</a> 
                                    <a href={imdbPres} target='_blank' className='btn-link bold text-lg'>Presentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-square project-container'>
                        <img src={require('./img/blossom.jpg')} className='object-cover object-left' alt='Blossom Logo'/>
                        <div className='info py-2 px-3'>
                            <div className='flex flex-col justify-around text-left h-full relative'>
                                <div className='h-full'>
                                    <h3 className='bold text-3xl mb-2'>Blossom</h3>  
                                    <div className='flex mb-2'>
                                        <div className='pill bold mr-2'>
                                            <h4>UX Design</h4>
                                        </div>
                                    </div>
                                    <p className='regular'>
                                        Blossom is a mobile application designed to help encourage young women pursue careers in male dominated STEM fields. A more detailed description of our research, design process, and final prototype can be found in the case study below.
                                    </p>
                                    <p className='mt-2'><strong>Skills:</strong> User Testing, Personas, Wireframing</p>
                                </div>
                                <div className='links flex w-full'>     
                                    <a href={blossom} target='_blank' className='btn-link mr-2 bold text-lg'>Full Case Study</a> 
                                    <a href='https://www.figma.com/proto/MBxrw88Ovd7rvXBHXgv6Oy/Blossom-High-Fidelity?node-id=4-4103&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A4103&show-proto-sidebar=1&mode=design' target='_blank' className='btn-link bold text-lg'>Prototype</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-square bg-[#F6C700] project-container'>
                        <div className='flex'>
                            <img src={require('./img/portfolio-ss.png')} alt='Portfolio Website Screenshot' className='object-cover custom-position'/>
                        </div>
                        <div className='info py-2 px-3'>
                            <div className='flex flex-col justify-around text-left h-full relative'>
                                <div className='h-full'>
                                    <h3 className='bold text-3xl mb-2'>Portfolio Website</h3>  
                                    <div className='flex mb-2'>
                                        <div className='pill bold mr-2'>
                                            <h4>UX Design</h4>
                                        </div>
                                        <div className='pill bold'>
                                            <h4>Front End Development</h4>
                                        </div>
                                    </div>
                                    <p className='regular'>
                                        A collection of my professional summary, skills, and past work in the field
                                        of UX Design and Front End Development compiled in a Web Application designed, 
                                        built, and deployed by me. 
                                    </p>
                                    <p className='mt-2'><strong>Skills:</strong> Wireframing, HTML, CSS, JavaScript, React, Tailwind</p>
                                </div>
                                <div className='links flex w-full'>     
                                    <a href='https://github.com/matthew-beep/portfolio' target='_blank' className='btn-link mr-2 bold text-lg'>Github</a> 
                                    <a href='#' target='_blank' className='btn-link bold text-lg'>Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-square bg-[#F6C700] project-container'>
                        <div className='flex'>
                            <img src={require('./img/equality.png')} alt='Portfolio Website Screenshot' className='object-cover'/>
                        </div>
                        <div className='info py-2 px-3'>
                            <div className='flex flex-col justify-around text-left h-full relative'>
                                <div className='h-full'>
                                    <h3 className='bold text-3xl mb-2'>Equality Now</h3>  
                                    <div className='flex mb-2'>
                                        <div className='pill bold mr-2'>
                                            <h4>Software Development</h4>
                                        </div>
                                    </div>
                                    <p className='regular'>
                                        A Minimum Viable Product developed with team of project managers, ux designers, and developers. MVP aims 
                                        to bring awareness to gender wage gap inequalities through data and charity access. 
                                    </p>
                                    <p className='mt-2'><strong>Skills:</strong> Wireframing, HTML, CSS, JavaScript, React, Tableau</p>
                                </div>
                                <div className='links flex w-full'>     
                                    <button className='w-full w-1/2 px-1 py-1 bg-[#999999] bold text-white rounded-md text-center'>In Progress</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-square bg-[#FAAF43] project-container'>
                        <div className='flex'>
                            <img src={crest} alt='Portfolio Website Screenshot' className='object-contain'/>
                        </div>
                        <div className='info py-2 px-3'>
                            <div className='flex flex-col justify-around text-left h-full relative'>
                                <div className='h-full'>
                                    <h3 className='bold text-2xl mb-2'>Branding and Graphic Design</h3>  
                                    <div className='flex mb-2'>
                                        <div className='pill bold mr-2'>
                                            <h4>Graphic Design</h4>
                                        </div>
                                        <div className='pill bold'>
                                            <h4>Branding</h4>
                                        </div>
                                    </div>
                                    <p className='regular'>
                                        During the 2021 COVID School Year, I was the Public Relations Chair of a Filipino Interest Fraternity at UW. In this section, you can find a collection of graphic designs I created for our Instagram
                                        as well as a design process for the development of our current crest.
                                        
                                    </p>
                                    <p className='mt-2'><strong>Skills:</strong> Adobe Illustrator</p>
                                </div>
                                <div className='links flex w-full'>     
                                    <button className='w-full w-1/2 px-1 py-1 bg-[#999999] bold text-white rounded-md text-center'>In Progress</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}