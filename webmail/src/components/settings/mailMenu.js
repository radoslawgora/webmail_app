import * as React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function MailMenuSetting() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="composing">
        <Row>
        <Col sm={3}>

        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="composing" href="#">
                                    Composing
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="outOfOffice" href="#">
                                    Out of Office
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="forwarding" href="#">
                                    Forwarding
                                </Nav.Link>
                            </Nav.Item>

                            </Nav>

        </Col>
        <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="composing">
            composing
            </Tab.Pane> 
            <Tab.Pane eventKey="outOfOffice">
            outOfOffice
            </Tab.Pane>
            <Tab.Pane eventKey="forwarding">
            forwarding
            </Tab.Pane>
            </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>
  );
}


export default MailMenuSetting;

