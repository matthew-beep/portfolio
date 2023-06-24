import { React } from 'react';
import imdbDoc from './files/imdbDoc.pdf';
import imdbLogo from './img/imdb_svg.svg';


export default function Projects(props) {
    return (      
        <div>
            <h2 className='text-5xl underline decoration-purple underline-offset-8 text-white mb-8'>
                Projects
            </h2>
            <div className='border-2 border-purple border-solid m-auto px-3'>
                <div className='flex flex-wrap justify-between'>
                    <div className='mb-5 w-96 border-white border-2 border-solid h-80 project-container'>
                        <div className='w-full h-full bg-purple'>
                            Test
                        </div>
                        <div className='info'>
                            <div className='flex flex-col justify-start text-left h-full px-2'>
                                <h3>VizDAS</h3>
                                <h4>UX / UI Design | Full Stack Development</h4>
                                <p>The first ever public facing Distributed Acoustic Sensing research tool. Built in collaboration with 
                                    UW's Earth and Space Science Department and recognized as a Research Award Finalist at the iSchool 
                                    Capstone Gala.
                                </p>
                                <p><strong>Skills:</strong> HTML/CSS, JavaScript, Python, Leaflet, MUI</p>
                            </div>
                            <div className='links flex w-full bottom-0 absolute'>
                                    <div className='m-auto flex items-center'>
                                        <a href='#'>Live Site</a> 
                                        <div className='mx-1 m-auto'> | </div>
                                        <a href='https://ischool.uw.edu/capstone/projects/2023/interactive-data-visualization-distributed-acoustic-sensing' target='_blank'>Project Page</a>
                                        <div className='mx-1 m-auto'> | </div>
                                        <a href='#'>Full Case Study</a>
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className='mb-5 w-96 bg-[#F6C700] rounded-md border-[#CBCBCB] border-1 border-solid h-80 flex justify-center align-center project-container'>
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
                                    <p>An analysis of the Internet Movie Database's information architecture. 
                                        Includes a collection of recommendations for improvement on IMDb's hierarchy of information related to 
                                        labels, search, navigation, site mapping, etc.
                                    </p>
                                    <p className='mt-2'><strong>Skills:</strong> User Testing, Personas, Wireframing</p>
                                </div>
                                <div className='links flex w-full'>     
                                    <a href={imdbDoc} target='_blank' className='btn-link mr-2 bold text-lg'>Full Case Study</a> 
                                    <a href='#' className='btn-link bold text-lg'>Presentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 w-96 border-white border-2 border-solid h-80'>

                    </div>
                    <div className='mb-5 w-96 border-white border-2 border-solid h-80'>

                    </div>
                    <div className='mb-5 w-96 border-white border-2 border-solid h-80'>

                    </div>
                    <div className='mb-5 w-96 border-white border-2 border-solid h-80'>

                    </div>
                </div>
            </div>
        </div>
    )
}