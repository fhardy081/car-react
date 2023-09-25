import React from 'react';
import Welcome from "../components/home/welcome";
import Service from "../components/home/service";
import Benefit from "../components/home/benefit";
import Testi from "../components/home/testi";
import Blue from "../components/home/blue";
import FAQ from "../components/home/faq";

const Home = () => {
    return (
    <>
        <Welcome id="welcome" />
        <Service id="our-service" />
        <Benefit id="benefit" />
        <Testi id="testi" />
        <Blue />
        <FAQ id="faq" />
    </>    
    );
};

export default Home;
