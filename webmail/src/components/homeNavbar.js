import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


function HomeNavbar () {

    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    const handleClose = () => setShow(false);
    const HandleLogout = () => navigate("/");
    const handleShow = () => setShow(true);

    return(
        <nav className="homeNavbar" 
        style={{
        width: "100%",
        padding: "10px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #176EFD",

        }}>
        <div className="logo">
        <img src={logo} alt="Logo"/>
        </div>
        <div className="navbarButtons">
        <Link to="/new"  className="submitLink">
            <Button as="Link" to="/new" variant="success" type="submit">
                New message
            </Button>
        </Link>

            <Button variant="primary" onClick={handleShow} style={{
                marginLeft: "10px"
            }}>
                Log out
            </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to logout?</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={HandleLogout}>
                Yes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                No
            </Button>
            </Modal.Footer>
        </Modal>

        </div>
        </nav>
    );
}

export default HomeNavbar;