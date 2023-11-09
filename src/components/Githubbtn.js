import React from "react";

import github from "../images/profile/github.png"
import { Link } from "react-router-dom";


function Githubbtn() {
    return (
        <div className="logo-area">
            <a href="https://github.com/barang08" target="_blank">
                <button id="linkedin-btn">
                    <img src={github} alt="#" />
                    Github
                </button>
            </a>
        </div>
    )
}

export default Githubbtn;