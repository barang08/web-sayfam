import React from "react";
import "./Profile.css"
import pp from "../images/profilelabel/wit.png"

function Profile() {
    return (

        <div className="container">

            <div className="profile-containerarea">
                <h2 className="profile-h2">Profile</h2>
                <div className="profile-container">
                    <div className="profile-section">

                        <h2>Basic Information</h2>
                        <div className="profile-text">
                            <p className="profile-label">Doğum Tarihi</p>
                            <p className="profile-textarea">15.01.1999</p>

                        </div>
                        <div className="profile-text">
                            <p className="profile-label">İkametgah Şehri</p>
                            <p className="profile-textarea">İzmir</p>

                        </div>
                        <div className="profile-text">
                            <p className="profile-label">Eğitim Durumu</p>
                            <p className="profile-textarea">Ege Üniversitesi İnşaat Mühendisliği</p>

                        </div>
                        <div className="profile-text">
                            <p className="profile-label">Tercih Ettiği Rol </p>
                            <p className="profile-textarea">Full Stack Web Developer</p>

                        </div>

                    </div>
                    <div className="image-section">
                        <img src={pp} alt="#" />
                    </div>
                    <div className="about-section">
                        <h4>About Me</h4>
                        <div className="about-text">

                            <p className="text-area">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                            <p className="text-area">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                        </div>


                    </div>
                </div>
            </div>




        </div>
    )
}

export default Profile


{/*  <h2>Profile</h2>
            <div className="container">
                <div className="profile-container">
                    <div className="profile-section">
                        <h3>Basic Information</h3>
                        <div className="profile-text">
                            <p className="profile-label">Doğum Tarihi</p>
                            <p>15.01.1999</p>

                        </div>
                        <div className="profile-text">
                            <p className="profile-label">İkametgah Şehri</p>
                            <p>İzmir</p>

                        </div>
                        <div className="profile-text">
                            <p className="profile-label">Eğitim Durumu</p>
                            <p>Ege Üniversitesi İnşaat Mühendisliği</p>

                        </div>
                        <div className="profile-text">
                            <p className="profile-label">Tercih Ettiği Rol </p>
                            <p>Full Stack Web Developer</p>

                        </div>
                    </div>
                    <div className="profile-pp">
                        <img src={pp} alt="#" />
                    </div>
                </div>



            </div> */}