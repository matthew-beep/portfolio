import { React } from 'react';
import tailwind from './img/tailwind.svg';

export default function Skills(props) {
    return(
        <div className='h-full pb-8'>
            <h2 className='text-5xl underline decoration-purple underline-offset-8 text-white mb-8'>
                Skills
            </h2>
            <div className='flex h-5/6 justify-between'>
                <div className='w-3/4 my-2 justify-between flex flex-col m-auto text-white skill-head'>
                    <div>
                        <i className="fa-brands fa-html5 text-7xl"></i>
                        <h4 className="mt-1">HTML</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-square-js text-7xl"></i>
                        <h4 className="mt-1">JavaScript</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-bootstrap text-7xl"></i>
                        <h4 className="">Bootstrap</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-git-alt text-7xl"></i>
                        <h4 className="mt-1">Git</h4>
                    </div>
                </div>
                <div className='w-3/4 my-2 justify-between flex flex-col m-auto text-white skill-head'>
                    <div>
                            <i className="fa-brands fa-css3-alt text-7xl"></i>
                            <h4 className="mt-1">CSS</h4>
                        </div>
                        <div>
                            <i className="fa-brands fa-react text-7xl"></i>
                            <h4 className="mt-1">React</h4>
                        </div>
                        <div>
                            <img src={tailwind} className='w-4/12 h-4/12 m-auto' alt='Tailwind Icon'/>
                            <h4 className="mt-2 ">Tailwind</h4>
                        </div>
                        <div>
                            <i className="fa-brands fa-react text-7xl"></i>
                            <h4 className="mt-1">HTML</h4>
                        </div>
                    </div>
                <div className='w-3/4 my-2 justify-between flex flex-col m-auto text-white skill-head'>
                    <div>
                        <i className="fa-brands fa-square-js text-7xl"></i>
                        <h4 className="mt-1">JavaScript</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-git-alt text-7xl"></i>
                        <h4 className="mt-1">Git</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-figma text-7xl"></i>
                        <h4 className="mt-1">Figma</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-react text-7xl"></i>
                        <h4 className="mt-1">HTML</h4>
                    </div>
                </div>
                <div className='w-3/4 my-2 justify-between flex flex-col m-auto text-white skill-head'>
                    <div>
                        <i className="fa-brands fa-react text-7xl"></i>
                        <h4 className="mt-1">React</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-npm text-7xl"></i>
                        <h4 className="mt-1">NPM</h4>
                    </div>
                    <div>
                        <i className="fa-brands fa-square-js text-7xl"></i>
                        <h4 className="mt-1 ">HTML</h4>
                    </div>
                    <div>
                        <i class="fa-solid fa-sitemap text-7xl"></i>
                        <h4 className="mt-1">Site Mapping</h4>
                    </div>
                </div>
            </div>

        </div>
    );
}