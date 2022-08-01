import * as React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function GeneralMenuSetting() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="userInterface">
        <Row>
        <Col sm={3}>

        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="userInterface" href="#">
                                    User Interface
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="mailboxView" href="#">
                                    Mailbox View
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="composing" href="#">
                                    Composing Messages
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="contacts" href="#">
                                    Contacts
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="folders" href="#">
                                    Folders
                                </Nav.Link>
                            </Nav.Item>

                            </Nav>

        </Col>
        <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="userInterface">
                userInterface
            </Tab.Pane> 
            <Tab.Pane eventKey="mailboxView">
                mailboxView
            </Tab.Pane>
            <Tab.Pane eventKey="composing">
                composing
                </Tab.Pane>
                <Tab.Pane eventKey="contacts">
                contacts
                </Tab.Pane>
                <Tab.Pane eventKey="folders">
                folders
                </Tab.Pane>
            </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>
  );
}


export default GeneralMenuSetting;

