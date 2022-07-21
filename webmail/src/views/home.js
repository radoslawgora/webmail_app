import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MailView from "./homeViews/mailView";
import ContactsView from "./homeViews/contactsView";
import SettingsView from "./homeViews/settingsView";


function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <Button variant="primary" type="submit">
                <Link to="/"  className="submitLink">Log out</Link>
            </Button>
        </main>
        <menu className="mainMenu">
            <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                    <Tab eventKey="/home" title="Mails">
                        <MailView />
                    </Tab>
                    <Tab eventKey="contacts" title="Contacts">
                        <ContactsView />
                    </Tab>
                    <Tab eventKey="settings" title="Settings">
                        <SettingsView />
                    </Tab>
            </Tabs>
        </menu>
  
      </>
    );
  }

  export default Home;