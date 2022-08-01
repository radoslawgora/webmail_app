import * as React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function AccountMenuSetting() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="identities">
        <Row>
        <Col sm={3}>

        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="identities" href="#">
                                    Identities
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="password" href="#">
                                    Password
                                </Nav.Link>
                            </Nav.Item>

                            </Nav>

        </Col>
        <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="identities">
            identities
            </Tab.Pane> 
            <Tab.Pane eventKey="password">
            password
            </Tab.Pane>
            </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>
  );
}


export default AccountMenuSetting;

