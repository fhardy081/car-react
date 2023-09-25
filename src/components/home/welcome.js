import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import carImage from '../img/img_car.png';

const Welcome = () => {
    return (
        <>
            {/*Welcome Page*/}
            <div id="welcome" className="container-fluid pt-5" style={{ backgroundColor: "#F1F3FF" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="justify-content-center header-sewa">
                                Sewa &amp; Rental Mobil Terbaik di kawasan (lokasimu)
                            </h2>
                            <br />
                            <p className="justify-content-center">
                                Selamat datang di Binar Car Rental. Kami Menyediakan mobil kualitas
                                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                                untuk sewa mobil selama 24 jam.
                            </p>
                            <Link to="/cars" className="btn btn-success">
                                Mulai Sewa Mobil
                            </Link>
                        </div>
                        <div className="col-lg-6 car-container">
                            <img src={carImage} className="car-bg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Welcome;