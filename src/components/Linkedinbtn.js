import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../images/profile/LinkedIn.png"


function LinkedInBtn() {
    return (
        <div className="logo-area">
            <a href="https://www.linkedin.com/in/baran-güney-560927234/" target="_blank">
                <button id="linkedin-btn">
                    <img src={linkedin} alt="#" />
                    Linkedin
                </button>
            </a>
        </div>
    )
}

export default LinkedInBtn;