// src/components/ForCustomersSection.jsx

import React from "react";
import ReactDOM from 'react-dom';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ForCustomersSection = () => {
    return (
        <Row id="for-customers-section">
            <Col id="for-customers-with-picture" sm={4}></Col>
            <Col sm={8}></Col>
        </Row>
    )
}

export default ForCustomersSection;