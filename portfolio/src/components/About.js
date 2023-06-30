import { React } from 'react';


export default function About(props) {

    return (      
        <div id='about' className='text-white about flex flex-col items-center'>
            <h2 className='text-5xl underline decoration-purple underline-offset-8 text-white mb-8'>
                About Me 
            </h2>
            <p className='regular w-3/4 md:w-1/2 text-justify text-2xl mb-3'>
                My name is Matthew Herrradura and I am a UX Designer and Front End Developer. 
                I am a graduate from the University of Washington and recently obtained a degree in Informatics with a focus on Human Computer Interaction. 
            </p>
            <p className='regular w-3/4 md:w-1/2 text-justify mb-3 text-2xl'>
                With my versatile skillset, I am deeply passionate about the art of designing and 
                developing accessible and equitable user experiences. I strive to create digital 
                solutions that seamlessly blend form and function, ensuring that every individual 
                can effortlessly engage with technology.
            </p>
            <p className='regular w-3/4 md:w-1/2 text-justify text-2xl'>
                While I have graduated from school, I am constantly working at sharpening my skills
                and am currently working on completing Google and Meta's UX and Front End Development Certificates. 
                You can check out my work below and if you like what you see, send me an email or connect with me on <a href='https://www.linkedin.com/in/matthewherradura/' target='_blank' className='underline hover:text-purple'>LinkedIn</a>!
            </p>
        </div>
    )
}