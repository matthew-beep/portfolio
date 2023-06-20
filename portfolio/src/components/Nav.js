import { React } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {



    //var element = document.getElementById(active);
    

    
    return (
        <nav className='container col-lg-4 w-1/4' id = "myDIV">
            <ul>
                <li id="home-link" >Home</li>
                <li >About</li>
                <li >Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};