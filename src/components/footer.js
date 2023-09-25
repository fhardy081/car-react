import React from 'react';
import '../App.css';
import imgFB from "./img/icon_facebook.png";
import imgIG from "./img/icon_instagram.png";
import imgTWT from "./img/icon_twitter.png";
import imgMail from "./img/icon_mail.png";
import imgTwitch from "./img/icon_twitch.png";

const Footer = () => {
    return (
        <>
            {/*Footer*/}
            <footer className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-344-808</p>
                    </div>
                    <ul className="col-lg-3 navbar-nav">
                        <li className="foot-list">
                            <a href="#" className="foot-link">
                                Our Service
                            </a>
                        </li>
                        <li className="foot-list">
                            <a href="#" className="foot-link">
                                Why Us
                            </a>
                        </li>
                        <li className="foot-list">
                            <a href="#" className="foot-link">
                                Testimonial
                            </a>
                        </li>
                        <li className="foot-list">
                            <a href="#" className="foot-link">
                                FAQ
                            </a>
                        </li>
                    </ul>
                    <div className="col-lg-3">
                        <p>Connect with us</p>
                        <img className="foot-logo" src={imgFB} alt="fb" />
                        <img className="foot-logo" src={imgIG} alt="ig" />
                        <img className="foot-logo" src={imgTWT} alt="twt" />
                        <img className="foot-logo" src={imgMail} alt="email" />
                        <img className="foot-logo" src={imgTwitch} alt="twitch" />
                    </div>
                    <div className="col-lg-3">
                        <p>Copyright Binar 2022</p>
                        <div className="box-shape" />
                    </div>
                </div>
            </footer>
        </>

    );
};

export default Footer;