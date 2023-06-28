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
                <li className='text-xl hover:text-purple transition duration-300 ease-in-out'><Link to='/' onClick={() => scrollToSection('home')}>Home</Link></li>
                <li className='text-xl hover:text-purple transition duration-300 ease-in-out'><Link to='/' onClick={() => scrollToSection('about')}>About</Link></li>
                <li className='text-xl hover:text-purple transition duration-300 ease-in-out'><Link to='/' onClick={() => scrollToSection('projects')}>Projects</Link></li>
                <li className='text-xl hover:text-purple transition duration-300 ease-in-out'><Link to='/' onClick={() => scrollToSection('contact')}>Contact</Link></li>
            </ul>
        </nav>
    )
};