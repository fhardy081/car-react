import React from "react";
import '../../App.css';
import imgMan from '../img/img_photo.png';
import imgStar from '../img/rate.png';
import imgWoman from '../img/testi_girl.png';
import leftIcon from '../img/left_icon.png';
import leftIconHover from '../img/left_icon_hover.png';
import rightIcon from '../img/right_icon.png';
import rightIconHover from '../img/right_icon_hover.png';

const Testi = () => {
    return (
        <>
            {/*Testimonial*/}
            <div id="testi" className="container-fluid mt-5" style={{ paddingTop: 30 }}>
                <h2 className="text-center" style={{ fontWeight: "bold" }} id="testimonial">
                    Testimonial
                </h2>
                <p className="p-3 pb-5" style={{ textAlign: "center" }}>
                    Berbagai review positif dari para pelanggan kami
                </p>
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="carousel slide"
                            id="carouselExampleIndicators"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div
                                        className="row text-center"
                                        style={{ justifyContent: "center" }}
                                    >
                                        <div className="col-lg-9">
                                            <div className="single-box mt-2">
                                                <div className="row" id="carousel-body">
                                                    <div className="col-md-3">
                                                        <img src={imgMan} alt="" className="testi-pic"/>
                                                    </div>
                                                    <div className="col-md-9 text-start">
                                                        <div className="rating">
                                                            <img
                                                                src={imgStar}
                                                                alt="star-rating"
                                                                className="rating"
                                                            />
                                                        </div>
                                                        <div className="testimonial-text">
                                                            <p style={{ paddingRight: "8%" }}>
                                                                “Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                                consectetur adipiscing elit, sed do eiusmod lorem
                                                                ipsum dolor sit amet, consectetur adipiscing elit,
                                                                sed do eiusmod”
                                                            </p>
                                                            <p style={{ fontWeight: "bold" }}>
                                                                John Dee 32, Bromo
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div
                                        className="row text-center"
                                        style={{ justifyContent: "center" }}
                                    >
                                        <div className="col-lg-9">
                                            <div className="single-box mt-2">
                                                <div className="row" id="carousel-body">
                                                    <div className="col-md-3">
                                                        <img
                                                            src={imgWoman}
                                                            alt=""
                                                            className="testi-pic"
                                                        />
                                                    </div>
                                                    <div className="col-md-9 text-start">
                                                        <div className="rating">
                                                            <img
                                                                src={imgStar}
                                                                alt="star-rating"
                                                                className="rating"
                                                            />
                                                        </div>
                                                        <div className="testimonial-text">
                                                            <p style={{ paddingRight: "8%" }}>
                                                                “Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                                consectetur adipiscing elit, sed do eiusmod lorem
                                                                ipsum dolor sit amet, consectetur adipiscing elit,
                                                                sed do eiusmod”
                                                            </p>
                                                            <p style={{ fontWeight: "bold" }}>
                                                                John Dee 32, Bromo
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span className="" aria-hidden="true">
                                        <img
                                            src={leftIcon}
                                            alt=""
                                            onMouseOver={() => this.src = rightIconHover}
                                            onMouseOut={() => this.src = rightIcon}
                                        />
                                    </span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span className="" aria-hidden="true">
                                        <img
                                            src="img/right_icon.png"
                                            alt=""
                                            onMouseOver={() => this.src = rightIconHover}
                                            onMouseOut={() => this.src = rightIcon}
                                        />
                                    </span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Testi;