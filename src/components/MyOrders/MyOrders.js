import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    console.log(myOrders);

    useEffect(() => {
        fetch("https://salty-bayou-21965.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);
    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure, you want your order Deleted?");
        if (proceed) {
            const url = `https://salty-bayou-21965.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Canceled SuccessFully")
                        const remainingOrder = myOrders.filter(orders => orders._id !== id);
                        setMyOrders(remainingOrder);
                    };
                });
        };
    };
    return (
        <>
                <h1 className="text-center py-4 services-header">My Orders</h1>
            <Container className="mb-5">
                <Row>
                    <Col>
                        {
                            myOrders.filter(order => order.email === user.email).map(orders => <div className="d-flex justify-content-around align-items-center manage-order" key={orders._id}>
                                <h5>{orders.name}</h5>
                                <p><span className="fw-bold">From:</span> {orders.locationName}</p>
                                <p><span className="fw-bold">To:</span> {orders.serviceName}</p>
                                <p><span className="fw-bold">Date:</span> {orders.date}</p>
                                <p><span className="fw-bold">Phone No:</span> {orders.number}</p>
                                <button className="btn-service">Approve</button>
                                <button onClick={() => handleDeleteOrder(orders._id)} className="btn-service">Cancel</button>
                            </div>)
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MyOrders;


/*

*/