import React from "react";
import "./Projects.css"
import wit from "../images/projects/Rectangle 41 (1).png"
import journey from "../images/projects/Rectangle 41 (2).png"

function Projects() {

    return (
        <div className="container">
            <h2 className="project-h2">Projects</h2>
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

            </div>
        </div>
    )
}

export default Projects;