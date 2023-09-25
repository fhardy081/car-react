import React from 'react';
import { Link as ScrollLink} from 'react-scroll';
import '../App.css';
import Toggler from './img/list.svg';

const Navigation = () => {
    return (
        <>
            {/*Navigation*/}
            <nav
                className="navbar navbar-expand-lg sticky-top"
                style={{ backgroundColor: "#F1F3FF" }}
            >
                <div className="container">
                    <a className="navbar-brand box-shape"></a>
                    <div className="navbar-nav navbar-top">
                        <ScrollLink
                            to="our-service"
                            className="nav-link"
                        >
                            Our Services
                        </ScrollLink>
                        <ScrollLink
                            to="benefit"
                            className="nav-link"
                        >
                            Why Us
                        </ScrollLink>
                        <ScrollLink
                            to="testi"
                            className="nav-link"
                        >
                            Testimonial
                        </ScrollLink>
                        <ScrollLink
                            to="faq"
                            className="nav-link"
                        >
                            FAQ
                        </ScrollLink>
                        <button className="btn btn-success">Register</button>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"> 
                            <img src={Toggler} alt="Toggle navigation" />
                        </span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end justify-content-end"
                        tabIndex={-1}
                        id="offcanvasRight"
                        aria-labelledby="offcanvasTopLabel"
                    >
                        <div className="offcanvas-body">
                            <p className="bcr">BCR</p>
                            <a className="nav-link" href="#">
                                Our Services
                            </a>
                            <a className="nav-link" href="#">
                                Why Us
                            </a>
                            <a className="nav-link" href="#">
                                Testimonial
                            </a>
                            <a className="nav-link" href="#">
                                FAQ
                            </a>
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navigation;
