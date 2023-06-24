import { React } from 'react';
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
                                    Capstone Gala.</p>
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
                        <div className='info px-2'>
                            <div className='flex flex-col border-2 border-solid justify-around text-left h-full relative'>
                                <div className='h-full flex flex-col justify-between border-2 border-solid'>
                                    <h3 className='black text-3xl underline decoration-purple'>IMDb Redesign</h3>
                                    <div>
                                        <h4 className='bold text-lg'>UX Design | Information Architecture</h4>
                                        <p>An analysis of the Internet Movie Database's information architecture. 
                                            Includes a collection of recommendations for improvement on IMDb's hierarchy of information related to 
                                            labels, search, navigation, site mapping, etc.
                                        </p>
                                        <p><strong>Skills:</strong> User Testing, Wireframing</p>
                                    </div>
                                </div>
                                <div className='links flex w-full'>
                                    <div className='m-auto mb-2 flex items-center'>
                                        <a href='#'>Full Case Study</a> <div className='mx-1 m-auto'> | </div>
                                        <a href='#'>Presentation</a>
                                    </div>
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