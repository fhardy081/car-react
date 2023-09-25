import React from "react";
import '../../App.css';
import Checkbox from '../img/checkbox.png';
import imgService from '../img/img_service.png'

const Service = () => {
    return (
        <>
            {/*Service*/}
            <div
                className="container mt-5 pb-3"
                style={{ backgroundColor: "white" }}
                id="our-service"
            >
                <div className="row">
                    <div className="col-lg-6 service-container">
                        <img
                            src={imgService}
                            alt="happy girl"
                            className="service-pic"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="section-2">
                            Best Car Rental for any kind of trip in (Lokasimu)!
                        </h2>
                        <p className="section-2">
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
                            murah dibandingkan dengan yang lain, kondisi mobil baru, serta
                            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                            meeting, dll.
                        </p>
                        <div className="checkbox-container">
                            <p>
                                <span>
                                    <img src={Checkbox} alt="" />
                                </span>
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </p>
                            <p>
                                <span>
                                    <img src={Checkbox} alt="" />
                                </span>
                                Sewa Mobil Lepas Kunci 24 Jam
                            </p>
                            <p>
                                <span>
                                    <img src={Checkbox} alt="" />
                                </span>
                                Sewa Mobil Jangka Panjang Bulanan
                            </p>
                            <p>
                                <span>
                                    <img src={Checkbox} alt="" />
                                </span>
                                Gratis Antar - Jemput Mobil di Bandara
                            </p>
                            <p>
                                <span>
                                    <img src={Checkbox} alt="" />
                                </span>
                                Layanan Airport Transfer / Drop In Out
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Service;