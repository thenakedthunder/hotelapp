// src/components/Header.jsx

import React from "react";
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const Header = () => {
    return (
        <Navbar id="header-div" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img id="app-icon-img" src="../../img/appicon.svg"
                        //ezzel a megold�ssal voltam musz�j ezt csin�lni, a css-es
                        //backgrounddal egy feh�r border volt k�r�l�tte, �gy tudtam
                        //csak elt�ntetni
                />
                </Navbar.Brand>
                <Nav.Link className="nav-item" href="#about">ABOUT THE APP</Nav.Link>
                <Nav.Link className="nav-item" href="#forcustomers">FOR CUSTOMERS</Nav.Link>
                <Nav.Link className="nav-item" href="#availibility">AVAILABLE FOR</Nav.Link>
                <Nav.Link className="nav-item" href="#forhotels">FOR HOTELS</Nav.Link>
                <Button className="primary-filled-btn">Log In</Button>
                <Button className="primary-outline-btn" variant="outline-primary">Sign Up</Button>
                </Container>
        </Navbar>
    )
}

export default Header;