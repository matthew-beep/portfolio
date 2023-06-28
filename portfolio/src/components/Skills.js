import { React } from 'react';
import tailwind from './img/tailwind.svg';
import adobe from './img/adobe-icon.svg';
import userResearch from './img/user-research.svg';
import market from './img/market-research.svg';
import wireframe from './img/wireframe.svg';

export default function Skills(props) {
    return(
        <div className='h-full pb-8'>
            <h2 className='text-5xl underline decoration-purple underline-offset-8 text-white mb-10'>
                Skills
            </h2>
            <div className='flex flex-col h-5/6 justify-between'>
                <div className='flex flex-col h-5/6 justify-between mb-5'>
                    <div className='w-3/4 my-2 justify-between flex flex-col m-auto text-white skill-head'>
                        <div className='w-full grid grid-cols-4 gap-4 items-center'>
                            <div className="flex flex-col items-center">
                                <i className="fa-brands fa-html5 text-7xl"></i>
                                <h4 className="mt-1 text-center">HTML</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <i className="fa-brands fa-css3-alt text-7xl"></i>
                                <h4 className="mt-1">CSS</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <i className="fa-brands fa-figma text-7xl"></i>
                                <h4 className="mt-1">Figma</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={adobe} className='w-4/12 h-4/12 m-auto' alt='Adobe Illustrator Icon'/>
                                <h4 className="mt-1 pt-1">Adobe Illustrator</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-5/6 justify-between mb-5'>
                    <div className='w-3/4 my-2 justify-between flex flex-col m-auto text-white skill-head'>
                        <div className='w-full grid grid-cols-4 gap-4 items-center'>
                            <div className="flex flex-col items-center">
                                <i className="fa-brands fa-square-js text-7xl"></i>
                                <h4 className="mt-1 text-center">JavaScript</h4>
                            </div>
                            <div>
                                <i className="fa-brands fa-react text-7xl"></i>
                                <h4 className="mt-1">React</h4>
                            </div>
                            <div>
                                <img src={userResearch} className='m-auto mb-1 w-4/12 h-4/12' alt='User Research Icon'/>
                                <h4 className="mt-1 pt-1">User Research</h4>
                            </div>
                            <div>
                                <img src={market} className='m-auto mb-1 w-4/12 h-4/12' alt='Market Research Icon'/>
                                <h4 className="mt-1 pt-1">User Research</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-5/6 justify-between mb-5'>
                    <div className='w-3/4 my-2 justify-between flex flex-col m-auto text-white skill-head'>
                        <div className='w-full grid grid-cols-4 gap-4 items-center'>
                            <div className="flex flex-col items-center">
                                <i className="fa-brands fa-git-alt text-7xl"></i>
                                <h4 className="mt-1">Git</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={tailwind} className='w-4/12 h-4/12 m-auto mb-1' alt='Tailwind Icon'/>
                                <h4 className="mt-1">Tailwind</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={wireframe} className='w-4/12 h-4/12 m-auto mb-1' alt='Tailwind Icon'/>
                                <h4 className="mt-1">Wireframing</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <i className="fa-solid fa-sitemap text-7xl"></i>
                                <h4 className="mt-1">Site Mapping</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}