import { React } from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {

    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };
      
    //var element = document.getElementById(active);
    

    
    return (
        <nav className='container w-1/3' id = "myDIV">
            <ul>
                <li className='text-xl'><Link to='/' onClick={() => scrollToSection('home')}>Home</Link></li>
                <li className='text-xl'><Link to='/' onClick={() => scrollToSection('about')}>About</Link></li>
                <li className='text-xl'><Link to='/' onClick={() => scrollToSection('projects')}>Projects</Link></li>
                <li className='text-xl'>Contact</li>
            </ul>
        </nav>
    )
};