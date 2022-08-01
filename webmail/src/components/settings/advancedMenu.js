import * as React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function AdvancedMenuSetting() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="server">
        <Row>
        <Col sm={3}>

        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="server" href="#">
                                    Server
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>

        </Col>
        <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="server">
            server
            </Tab.Pane> 
            </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>
  );
}


export default AdvancedMenuSetting;

