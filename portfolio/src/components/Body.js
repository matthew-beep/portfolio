import { React } from 'react';
import {ReactComponent as Background} from './img/blob-scene-haikei.svg';

export default function Body(props) {
    return (      
        <div className='container home'>
            <div className='row align-items-center home-content'>
                <div className='col-12 col-md-6 intro-text'>
                    <h4 className='text-2xl welcome'>Hi, I am</h4>
                    <h1 className='text-5xl my-2'>Matthew Herradura</h1>
                    <h2 className='my-2 text-3xl'>UI / UX Designer</h2>
                    <div className='inline-flex flex-col items-start'>
                        <h2 className='my-2 text-3xl inline-block'>Front End Developer</h2>
                        <div className='flex justify-between w-3/4 mt-2'>
                            <div>
                                <a href='https://www.linkedin.com/in/matthewherradura/' target='_blank'>
                                    <i class="fa-brands fa-linkedin text-5xl hover:text-white"></i>
                                </a>
                            </div>
                                <i class="fa-brands fa-github text-5xl hover:text-white"></i>
                                <i class="fa-solid fa-envelope text-5xl hover:text-white"></i>
                                <i class="fa-solid fa-file text-5xl hover:text-white"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 test2'>
                    <div class="circle">
                    </div>
                </div>
            </div>
        </div>
    )
}