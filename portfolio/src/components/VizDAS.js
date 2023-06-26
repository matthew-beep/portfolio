import { React } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';

export default function VizDAS(props) {


    return(
        <div>
            <div>
                <Link to='/#projects'><i className="fa-solid fa-arrow-left text-white"></i></Link> 
            </div>
            <div className="text-white">
                <div className="flex vizdas-header mb-10">
                    <div className="bg-purple w-1"></div>
                    <h1 className="black text-7xl text-left">VizDAS</h1>
                </div>
                <div className="vizdas-contain">
                    <div className="flex mb-20">
                        <div className="w-1/2 text-left mr-2">
                            <h3 className="bold text-2xl">
                                Overview
                            </h3>
                            <p>
                                DAS, or Distributed Acoustic Sensing, is a relatively new technology that uses cables and sensors to 
                                measure the frequencies of various events or objects such as earthquakes, road infrastructure, bridge health, etc. 
                                The Earth and Space Science Department at UW currently houses a large database of data gathered by DAS and is 
                                used by researchers to continue their studies.
                            </p>
                        </div>
                        <div className="w-1/2 text-left ml-2">
                            <h3 className="bold text-2xl">
                                Tasks
                            </h3>
                            <ul className="list-disc">
                                <li>
                                    Work with UW's ESS department to develop a public facing research tool for researchers to efficiently 
                                    access and visualize data gathered by DAS.
                                </li>
                                <li>
                                    Design application with superior user experience compared to current earth science research tools.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-left">
                        <h2 className="extraBold text-4xl">Problem Space</h2>
                        <div>
                            <h3 className="boldItalic">Context /</h3>
                            <hr className="border-t-4 opacity-100 border-t-purple"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}