import React from "react";
import "./Footer.css"
import atsign from "../images/footer/at-sign 1.png"
import instagram from "../images/footer/instagram 1.png"
import twitter from "../images/footer/twitter 1.png"
import codepen from "../images/footer/codepen 1.png"

function Footer() {
    return (
        <div className="container">
            <div className="footer-container">


                <p className="footer-message">Send me a message!</p>



                <p className="footer-text">Got a question or proposal, or just want
                    to say hello? Go ahead.</p>
                <a href="#">baranguney081@gmail.com</a>
                <div className="img-area">
                    <img src={twitter} alt="#" />
                    <img src={codepen} alt="#" />
                    <img src={atsign} alt="#" />
                    <img src={instagram} alt="#" />




                </div>


            </div>




        </div>

    )
}

export default Footer;

