import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/services";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
                <h1 className="text-center py-5 services-header">POPULAR SERVICES</h1>
            <Container>
                <Row xs={1} md={4} className="g-4 pb-4">
                    {
                        services.map(service =>
                            <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;