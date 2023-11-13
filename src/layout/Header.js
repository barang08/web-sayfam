import React, { useContext } from "react";
import "./Header.css"
import profile from "../images/profile/pp.jpg"

import LinkedInBtn from "../components/Linkedinbtn";
import Githubbtn from "../components/Githubbtn"
import { ThemeContext } from "../App";






function Header(props) {
    const { theme } = useContext(ThemeContext)



    const getFullName = () => {
        const fullName = props.user.name + " " + props.user.surName
        return fullName
    }
    return (
        <div className="header">
            <div className="blue-container"></div>
            <div className="green-container"></div>
            <div className={` ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                <div className="name-container">
                    {getFullName()}
                </div>

                <div className="container header-container">
                    <div className="left-container">
                        <h2>I am a Frontend Developer...</h2>
                        <p>I like to craft solid and scalable frontend products with great user experiences.</p>
                        <div className="btn-area">
                            <Githubbtn />
                            <LinkedInBtn />
                        </div>

                    </div>

                    <img src={profile} />
                </div>
            </div>


        </div>


    )
}

export default Header;