import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
import './Menu.css';

const Menu = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="white" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="fw-bold fs-3 text-secondary" href="/home"><img src="https://i.ibb.co/551cdQz/imgbin-flight-air-travel-travel-agent-computer-icons-travel-cbdb-S97r-H2ij4-PKd-DNWCs-Si-Nz-removebg.png" className="menu-icon" alt="" /> Travel Agent</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="fw-bold justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        {user?.email ?
                            <div className="d-flex">
                                <NavDropdown title="Dashboard" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.3" as={Link} to="/myOrders">My Orders</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1" as={Link} to="/manageAllOrders">Manage All Orders</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.2" as={Link} to="/addService">Add A New Service</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link onClick={logOut} to="/aboutUs">Log Out</Nav.Link>
                            </div> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <span>{user?.displayName}</span>
                            <img className="img-fluid ms-2 rounded-circle user-img" src={user?.photoURL} alt="" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;

/*
<a href="https://imgbb.com/"><img src="" alt="imgbin-flight-air-travel-travel-agent-computer-icons-travel-cbdb-S97r-H2ij4-PKd-DNWCs-Si-Nz-removebg" border="0"></a>
*/