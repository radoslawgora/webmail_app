import * as React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function HomeNavbar () {

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
        <Link to="#new"  className="submitLink">
            <Button as="Link" to="/" variant="success" type="submit">
                New message
            </Button>
        </Link>

        <Link to="/"  className="submitLink">
            <Button as="Link" to="/" variant="primary" type="submit" style={{
                marginLeft: "10px"
            }}>
                Log out
            </Button>
        </Link>

        </div>
        </nav>
    );
}

export default HomeNavbar;