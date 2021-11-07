import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="text-white footer-bg">
                <Container className="pt-5">
                    <Row xs={1} md={6}  className= "d-flex justify-content-around">
                        <Col>
                            <div>
                                <p className="fw-bold"><i className="fas fa-grip-lines"> ABOUT TRAVEL</i> </p>
                                <p className="footer-about">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                                <i className="fab fa-google-pay about-icon"></i>
                                <i className="fab fa-cc-visa about-icon"></i>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-subscribe">
                                <p className="fw-bold"><i className="fas fa-grip-lines"> SUBSCRIBE US</i></p>
                                <p>Please Subscribe our website!</p>
                                <input type="email" name="email" id="" />
                                <button className="footer-btn">SUBSCRIBE NOW</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;