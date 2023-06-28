import { React } from "react";
import headSpace from './img/head-space.svg';

export default function VizDAS(props) {


    return(
        <div>
            <div className="text-white">
                <div className="flex vizdas-header mt-8 mb-10">
                    <div className="bg-purple w-1"></div>
                    <h1 className="black text-7xl text-left">VizDAS</h1>
                </div>
                <div className="vizdas-contain">
                    <div className="flex mb-20">
                        <div className="w-1/2 text-left mr-2">
                            <h3 className="bold text-2xl">
                                Overview
                            </h3>
                            <p className="pr-8 regular">
                                DAS, or Distributed Acoustic Sensing, is a relatively new technology that uses cables and sensors to 
                                measure the frequencies of various events or objects such as earthquakes, road infrastructure, bridge health, etc. 
                                The Earth and Space Science Department at UW currently houses a large database of data gathered by DAS and is 
                                used by researchers to continue their studies.
                            </p>
                            <div className="mt-4 regular">
                                <p className='mt-2'><strong>Role:</strong> UX Designer & Front End Developer</p>
                                <p className='mt-2'><strong>Tools:</strong> Figma, HTML/CSS, JavaScript, Python, Leaflet, MUI</p>
                                <p className='mt-2'><strong>Skills:</strong> Wireframing, Prototyping, User Research, Software Development</p>
                            </div>
                        </div>
                        <div className="w-1/2 text-left ml-2">
                            <h3 className="bold text-2xl">
                                Tasks
                            </h3>
                            <ul className="list-disc pl-8 regular">
                                <li>
                                    Work with UW's ESS department to develop the first ever public facing research tool for researchers to efficiently 
                                    access and visualize data gathered by DAS.
                                </li>
                                <li className="mt-3">
                                    Design application with superior user experience compared to current earth science research tools.
                                </li>
                            </ul>
                            <div className="mt-4 flex flex-col justify-start">
                                <div className="flex items-center">
                                    <i className="fa-brands fa-github text-white text-3xl mr-2"/><p className="regular">GitHub Repository Is Private to Protect Lab Information</p>
                                </div>
                                <a href="https://dasway.ess.washington.edu/vizdas/" target="_blank">
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-display text-white text-2xl mr-2"/>
                                        <p className="underline regular">Live Site</p>
                                    </div>
                                </a>
                                <a href="https://ischool.uw.edu/capstone/projects/2023/interactive-data-visualization-distributed-acoustic-sensing" target="_blank">
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-display text-white text-2xl mr-2"/>
                                        <p className="underline regular">iSchool Project Page</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <article className="text-left">
                        <section>
                            <div className="flex flex-col mb-5 items-start">
                                <h2 className="extraBold text-4xl">Problem Space</h2>
                                <div className="flex flex-col w-1/2 items-start p-0">
                                    <img src={headSpace} className="w-1/4" alt="svg blob"/>
                                </div>
                            </div>
                            <div>
                                <h3 className="boldItalic text-lg mb-1">Context /</h3>
                                <hr className="border-t-4 opacity-100 border-t-purple mb-1"/>
                                <p className="text-lg mb-3 regular">
                                    Distributed Acoustic Sensing currently has multiple uses in Geophysics and Engineering.
                                </p>
                                <p className="text-lg mb-3 regular">Geohazards cause $60 Million in damages per year in the Pacific Northwest alone.
                                    This new technology has capabilities to monitor earthquakes, volcanoes, ice sheet and glaciers, ocean dynamics, coastal hazards, marine wildlife, urban infrastructure and activities due to the nature of the sensing. 
                                </p>
                                <p className="text-lg mb-20 regular">
                                    By creating a more accessible place for people to find seismic data, we can help expedite the distribution of seismic data to researchers as well as mitigate possible expenses due to geohazards.
                                </p>
                            </div>
                            <div>
                                <h3 className="boldItalic text-lg mb-1">Competitve Audit /</h3>
                                <hr className="border-t-4 opacity-100 border-t-purple mb-1"/>
                                <p className="text-lg mb-3 regular">
                                    During our market research, we observed and analyzed various 
                                    applications used by the public related to seismic activity and found 
                                    two main points:
                                </p>
                                <ul className=" text-lg list-disc pl-5 regular">
                                    <li className="mb-3">There is no current public research tool utilizing DAS gathered data that exists.</li>
                                    <li className="mb-20">Many public seismic activity websites focus on user interactivity and contain an interactive map component.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="boldItalic text-lg mb-1">User Research /</h3>
                                <hr className="border-t-4 opacity-100 border-t-purple mb-1"/>
                                <p className="text-lg mb-3 regular">
                                    To dive deeper into how our main stakeholders use and interact with their current research tools, 
                                    we interviewed various earth scientists, researchers, and grad students in the field. Based on their 
                                    experiences, we gained insight on their pain points and found that common applications have 
                                    major issues such as:
                                </p>
                                <ul className=" text-lg list-disc pl-5 regular">
                                    <li className="mb-3">Outdated user experience and interfaces.</li>
                                    <li className="mb-3">Being too slow and inefficient in data collection, sometimes taking up to two hours to gather data on a single dataset.</li>
                                    <li className="mb-3">Lack user friendly features such as data filtering and data visualization.</li>
                                    <li className="mb-3">Irrelevant data is often collected.</li>
                                    <li className="mb-20">Overall, too complicated to use.</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className="flex flex-col mb-5 items-start">
                                <h2 className="extraBold text-4xl">Problem Statement</h2>
                                <div className="flex flex-col w-1/2 items-start p-0">
                                    <img src={headSpace} className="w-1/4" alt="svg blob"/>
                                </div>
                            </div>
                            <p className="text-lg mb-10 regular">
                                Based off of our findings, my group and I decided on this Problem Statement to help direct our project:
                            </p>
                            <p className="text-center text-4xl black mb-20">How might scientists and researchers gain access to the first public-facing web interface for Distributed Acoustic Sensing data so that they can easily ping data for their research and share their findings with the public on an educational level?</p>
                        </section>
                        <section>
                            <div className="flex flex-col mb-5 items-start">
                                <h2 className="extraBold text-4xl">User Personas</h2>
                                <div className="flex flex-col w-1/2 items-start p-0">
                                    <img src={headSpace} className="w-1/4" alt="svg blob"/>
                                </div>
                            </div>
                            <p className="text-lg mb-10 regular">
                                After doing research on our stakeholders, my group found two types of users were common and their personas can be found below:
                            </p>
                            <div className="flex justify-center mb-10">
                                <div className="border-purple w-3/4 h-3/4">
                                    <img src={require('./img/sarah-persona1.jpg')} alt="Persona of Sarah" className="margin-auto"></img>
                                </div>
                            </div>
                            <div className="flex justify-center mb-20">
                                <div className="border-purple w-3/4 h-3/4">
                                    <img src={require('./img/john-persona.jpg')} alt="Persona of Sarah" className="margin-auto"></img>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="flex flex-col mb-5 items-start">
                                <h2 className="extraBold text-4xl">Solution</h2>
                                <div className="flex flex-col w-1/2 items-start p-0">
                                    <img src={headSpace} className="w-1/4" alt="svg blob"/>
                                </div>
                            </div>
                            <div>
                                <h3 className="boldItalic text-lg mb-1">Key Requirements /</h3>
                                <hr className="border-t-4 opacity-100 border-t-purple mb-1"/>
                                <p className="text-lg mb-3 regular">
                                    After our market research, user interviews, and iterations of our prototype after concept validations,
                                    my group settled on a few key features and requirements that would help alleviate the pain points 
                                    of our stakeholders and fit their needs.
                                </p>
                                <h3 className="bold text-lg mb-1">Requirements:</h3>
                                <ol className="text-lg list-decimal pl-10 regular">
                                    <li className="mb-3">Overall user experience should be visually pleasing, accessible, and easy to understand.</li>
                                    <li className="mb-3">Users should have the ability to engage in their own exploratory data analysis.</li>
                                    <li className="mb-3">Map needs to display accurate DAS cable and sensor location.</li>
                                    <li className="mb-3">Users want to save time collecting data and reduce the amount of irrelevant data downloaded on their computer.</li>
                                </ol>
                                <p className="text-lg mb-20 regular">
                                    After weeks of ideation and iteration upon our prototypes of the research tool, we were finally able to start developing the actual product.
                                    As the Front End Developer of this project, I built the front end of the application using HTML, CSS, JavaScript, React, and various other JS libraries. 
                                    I also collaborated with our data engineers team to implement a backend in Python and Flask. Key screens fitting the guidelines of our requirements and
                                    how we accomplished it can be found below.
                                </p>
                            </div>
                            <div className="mb-5">
                                <h3 className="boldItalic text-lg mb-1">Final Product /</h3>
                                <hr className="border-t-4 opacity-100 border-t-purple mb-20"/>
                                
                                <div className="flex justify-between mb-20">
                                    <div className="w-7/12 h-7/12">
                                        <img src={require('./img/VizDAS-home.png')} alt="VizDAS landing page"></img>
                                        <div className="w-full flex justify-center mt-2">
                                            <p className="text-white boldItalic">Landing Page Screen</p>
                                        </div>
                                    </div>
                                    <div className="text-left flex-1 ml-3 pr-5">
                                        <div className="mb-3">
                                            <h3 className="extraBold text-2xl mb-1">Requirement /</h3>
                                            <p className="regular">
                                                Overall user experience should be visually pleasing, accessible, and easy to understand.
                                            </p>                                            
                                        </div>
                                        <div>
                                            <h3 className="extraBold text-2xl mb-1">Application Feature /</h3>
                                            <p className="mb-3 regular">
                                                Text is clean and legible along with a visually appealing color scheme and understandable work flow for researchers.
                                            </p>
                                            <p className="regular">
                                                Landing page contains info which clearly prompts user how to use the application.                                            
                                            </p>                                             
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-20">
                                    <div className="w-7/12 h-7/12">
                                        <img src={require('./img/VizDAS-map.png')} alt="Interactive map screen"></img>
                                        <div className="w-full flex justify-center mt-2">
                                            <p className="text-white boldItalic">Interactive Map</p>
                                        </div>
                                    </div>
                                    <div className="text-left flex-1 ml-3 pr-5">
                                        <div className="mb-3">
                                            <h3 className="extraBold text-2xl mb-1">Requirement /</h3>
                                            <p className="regular">
                                                Users should have the ability to engage in their own exploratory data analysis.                                            
                                            </p>                                            
                                        </div>
                                        <div>
                                            <h3 className="extraBold text-2xl mb-1">Application Feature /</h3>
                                            <p className="mb-3 regular">
                                                Interactive map which users can utilize to find and access cables in desired locations with ease.
                                            </p>                                       
                                        </div>
                                        <div>
                                            <h3 className="extraBold text-2xl mb-1">How it Works /</h3>
                                            <p className="regular"> 
                                                I utilized the Leaflet JavaScript library which allows for easy integration for interactive maps.
                                                The cables are displayed based on their channel coordinates which we placed in a JSON filed and used in conjuction with
                                                Leaflet's &lt;Polyline&gt; component.    
                                            </p>                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-20">
                                    <div className="w-7/12 h-7/12">
                                        <img src={require('./img/VizDAS-selection.png')} alt="Acvessing Map Data"></img>
                                        <div className="w-full flex justify-center mt-2">
                                            <p className="text-white boldItalic">Accessing Map Data</p>
                                        </div>
                                    </div>
                                    <div className="text-left flex-1 ml-3 pr-5">
                                        <div className="mb-3">
                                            <h3 className="extraBold text-2xl mb-1">Requirement /</h3>
                                            <p className="regular">
                                                Map needs to display accurate DAS cable and sensor location.                                            
                                            </p>                                            
                                        </div>
                                        <div>
                                            <h3 className="extraBold text-2xl mb-1">Application Feature /</h3>
                                            <p className="mb-3 regular">
                                                Map displays channels based on accurate coordinates which users can select to directly access data.
                                            </p>                                       
                                        </div>
                                        <div>
                                            <h3 className="extraBold text-2xl mb-1">How it Works /</h3>       
                                            <p className="mb-3 regular">
                                                Leaflet has a &lt;Popup&gt; component integrated in its library
                                                which I connected to its JSON file to show metadata.
                                            </p>                             
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-20">
                                    
                                    <div className="w-7/12 h-7/12">
                                        <img className='mb-2' src={require('./img/VizDAS-graph.png')} alt="Generating Graph Screen"></img>
                                        <div className="w-full flex justify-center mb-5">
                                            <p className="text-white boldItalic">Accessing Map Data</p>
                                        </div>
                                        <img src={require('./img/VizDAS-download.png')} alt="Download Screen"></img>
                                        <div className="w-full flex justify-center mt-2">
                                            <p className="text-white boldItalic">Download Data</p>
                                        </div>
                                    </div>
                                        
                                    <div className="text-left flex-1 ml-3 pr-5">
                                        <div className="mb-3">
                                            <h3 className="extraBold text-2xl mb-1">Requirement /</h3>
                                            <p className="regular">
                                                Users want to save time collecting data and reduce the amount of irrelevant data downloaded on their computer.                                          
                                            </p>                                            
                                        </div>
                                        <div>
                                            <h3 className="extraBold text-2xl mb-1">Application Feature /</h3>
                                            <p className="mb-3 regular">
                                                Users can quickly query and visualize data before downloading it to their personal devices to 
                                                ensure the data is significant to their studies.                                            
                                            </p>                                       
                                        </div>
                                        <div>
                                            <h3 className="extraBold text-2xl mb-1">How it Works /</h3>
                                            <p className="mb-3 regular">
                                                UW's ESS department hosts a 12+ terabyte large database on the cloud. Upon development of our front
                                                end, I collaborated with the lab and my team's data engineers to connect their back end to our application using Python and the Flask API.
                                                Users are able to select certain criteria for the type of data they want to look at, which is then queried from a database and shown as 
                                                a SVG graph.
                                            </p>                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-20">
                                    <h3 className="boldItalic text-lg mb-1"> Standard User Flow /</h3>
                                    <hr className="border-t-4 opacity-100 border-t-purple mb-1"/>
                                    <img src={require("./img/user-flow.png")} alt="User Flow Graph"/>
                            </div>
                            <div className="mb-20 h-screen">
                                    <h3 className="boldItalic text-lg mb-1"> Demo Video /</h3>
                                    <hr className="border-t-4 opacity-100 border-t-purple mb-10"/>
                                    <div className="w-3/4 h-3/4 flex m-auto">
                                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/pJog_7Xw-v8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </div>
                            </div>
                        </section>
                        
                    </article>
                </div>
            </div>
        </div>
    );

}