import { React } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {



    //var element = document.getElementById(active);
    

    
    return (
        <nav className='container' id = "myDIV">
            <ul>
                <li id="home-link" >Home</li>
                <li >About</li>
                <li >Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};