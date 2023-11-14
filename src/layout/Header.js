import React, { useContext } from "react";
import "./Header.css"
import profile from "../images/profile/pp.jpg"

import LinkedInBtn from "../components/Linkedinbtn";
import Githubbtn from "../components/Githubbtn"
import { ThemeContext } from "../App";
import ReactSwitch from 'react-switch';
import { LanguageContext } from '../contexts/LanguageContext';










function Header(props) {
    const { theme, toggletheme } = useContext(ThemeContext)

    const { toggleLanguage, texts } = useContext(LanguageContext);

    const headerStyle = {
        background: theme === 'dark' ?
            'linear-gradient(to right, #171043 70%, #1A210B 30%)' :
            'linear-gradient(to right, #4731D3 65%, #CBF281 35%)'
    }

    const getFullName = () => {
        const fullName = props.user.name + " " + props.user.surName
        return fullName
    }
    return (

        <div className="header" style={headerStyle}>
            <div className=' container switch '>
                <button onClick={toggleLanguage}>Türkçeye geç</button>
                <ReactSwitch className="dügme" onChange={toggletheme} checked={theme === "dark"} />
                <p>DARK MODE</p>

            </div>



            <div className="name-container">
                {getFullName()}
            </div>

            <div className="container header-container">
                <div className="left-container">
                    <h2>I am a Frontend Developer...</h2>
                    <p>I like to craft solid and scalable frontend products with great user experiences.</p>
                    <div className="btns-area">
                        <Githubbtn />
                        <LinkedInBtn />
                    </div>

                </div>

                <img src={profile} />
            </div>



        </div>

    )
}

export default Header;