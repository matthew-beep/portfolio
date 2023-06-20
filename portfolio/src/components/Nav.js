import { React } from 'react';
import { NavLink } from 'react-router-dom';


export default function Nav(props) {



    //var element = document.getElementById(active);
    

    
    return (
        <nav className='container w-1/3' id = "myDIV">
            <ul>
                <li className='text-xl'>Home</li>
                <li className='text-xl'>About</li>
                <li className='text-xl'>Projects</li>
                <li className='text-xl'>Contact</li>
            </ul>
        </nav>
    )
};