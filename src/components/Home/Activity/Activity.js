import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Activity.css';

const Activity = () => {
    return (
        <>
                <h1 className="text-center py-4 services-header">ADVENTURE & ACTIVITY</h1>
            <Container className="py-4">
                <Row xs={2} md={3} className="g-4">
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKvZD.png" alt="" />
                        <h5>Adventure</h5>
                        <p>76 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKpmY.png" alt="" />
                        <h5>Trekking</h5>
                        <p>42 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKkHh.png" alt="" />
                        <h5>Camp Fire</h5>
                        <p>85 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKH1M.png" alt="" />
                        <h5>Off-Road</h5>
                        <p>19 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKno4.png" alt="" />
                        <h5>Camping</h5>
                        <p>22 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKfy8.png" alt="" />
                        <h5>Exploring</h5>
                        <p>13 Destination</p>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Activity;