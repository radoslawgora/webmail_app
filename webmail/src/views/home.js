import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
        </main>
        <menu className="mainMenu">
                <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Mail</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Setting</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                            Disabled
                            </Nav.Link>
                        </Nav.Item>
            </Nav>
        </menu>
        <nav>
          <Link to="/">logout</Link>
        </nav>
      </>
    );
  }

  export default Home;