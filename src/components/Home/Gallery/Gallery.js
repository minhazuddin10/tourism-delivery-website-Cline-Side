import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <>
                <h1 className="text-center py-4 services-header">TOP NOTCH DESTINATION</h1>
            <Container className="pb-5">
                <Row>
                    <img src="https://i.ibb.co/QnjBhjP/sajek.jpg" className="w-25" alt="" />
                    <img src="https://i.ibb.co/mDn3Fst/Sent-Martin-Island.jpg" className="w-25" alt="" />
                    <img src="https://i.ibb.co/yF50f48/sundarban.jpg" className="w-25" alt="" />
                    <img src="https://i.ibb.co/0YW6sX5/bandarban.jpg" className="w-25" alt="" />
                </Row>
            </Container>
        </>
    )
};

export default Gallery;

