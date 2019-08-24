// src/components/Main.jsx

import React from "react";
import ReactDOM from 'react-dom';

import GetTheAppSection from "./GetTheAppSection.jsx";
import AboutTheAppSection from "./AboutTheAppSection.jsx";
import ForCustomersSection from "./ForCustomersSection.jsx";

const Main = () => {
    return (
        <div>
            <GetTheAppSection />
            <AboutTheAppSection />
            <ForCustomersSection />
            {/*<AvailableForSection />
            <ForHotelsSection />
            <ContactUsSection /> */}
        </div>
    )
}

export default Main;