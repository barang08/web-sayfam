import React from "react";
import "./Skills.css"
import javascript from "../images/skills/js-logo 1 (2).png"
import react from "../images/skills/Rectangle 35 (2).png"
import redux from "../images/skills/Group 101.png"
import nodejs from "../images/skills/node-logo 1.png"
import vscode from "../images/skills/Group 101 (1).png"
import figma from "../images/skills/figma-logo 1.png"

import { ThemeContext } from "../App";
import { useContext } from "react";




function Skills() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="skills">


            <div className="container ">


                <div className="skills-container">

                    <h2>Skills</h2>





                    <div className="skills-middle">
                        <div className="skill">
                            <img src={javascript} id="java-content" alt="#" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="skill">
                            <img src={react} id="java-content" alt="#" />
                            <p>REACT</p>
                        </div>
                        <div className="skill">
                            <img src={redux} id="java-content" alt="#" />
                            <p>REDUX</p>
                        </div>
                    </div>



                    <div className="skills-end">
                        <div className="skill">
                            <img src={nodejs} id="java-content" alt="#" />
                            <p>NODE</p>
                        </div>
                        <div className="skill">
                            <img src={vscode} id="java-content" alt="#" />
                            <p>VS CODE</p>
                        </div>
                        <div className="skill">
                            <img src={figma} id="java-content" alt="#" />
                            <p>FIGMA</p>
                        </div>
                    </div>




                </div>



            </div>
        </div>
    )
}

export default Skills;