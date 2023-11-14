import React, { useEffect, useState } from "react";
import "./Projects.css"
/* import wit from "../images/projects/Rectangle 41 (1).png"
import journey from "../images/projects/Rectangle 41 (2).png" */
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);



    useEffect(() => {
        axios.get("https://654f64b5358230d8f0cd4477.mockapi.io/projects")
            .then(res => {
                const projectsData = res.data;
                setProjects(projectsData);
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="projectsss">
            <div className="container ">
                <h2 className="project-h2">Projects</h2>
                <div className="project-container">
                    {projects.map((project, index) => (
                        <React.Fragment key={project.id}>
                            <div className="content">
                                <div className="photos"><img src={project.img} /></div>
                                <div className="text-area">
                                    <div className="name">{project.name}</div>
                                    <div className="description">{project.description}</div>
                                    <div className="btn-area">
                                        <button>react</button>
                                        <button>redux</button>
                                        <button>vercel</button>
                                    </div>

                                    <div className="nav-area">
                                        <a href="#">View Site</a>
                                        <a href="#">Github</a>
                                    </div>


                                </div>



                            </div>
                        </React.Fragment>


                    ))}





                </div>
            </div>

            {/*  
            <div className="project-container">
                <div className="project-photo">
                    <img src={wit} alt="#" />
                </div>
                <div className="project-text">
                    <h3>Workintech</h3>

                    <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="project-btn">
                        <button>react</button>
                        <button>redux</button>
                        <button>vercel</button>
                    </div>
                    <div className="nav-area">
                        <a href="#">View Site</a>
                        <a href="#">Github</a>
                    </div>


                </div>
            </div>
            <div className="container">
                <div className="project-container">
                    <div className="project-photo">
                        <img src={journey} alt="#" />
                    </div>
                    <div className="project-text">
                        <h3>Journey</h3>

                        <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                        <div className="project-btn">
                            <button>react</button>
                            <button>redux</button>
                            <button>vercel</button>
                        </div>
                        <div className="nav-area">
                            <a href="#">View Site</a>
                            <a href="#">Github</a>
                        </div>


                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Projects;