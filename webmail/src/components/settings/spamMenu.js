import * as React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function SpamMenuSetting() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="filter">
        <Row>
        <Col sm={3}>

        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="filter" href="#">
                                    Junk filter
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="rules" href="#">
                                    Address rules
                                </Nav.Link>
                            </Nav.Item>

                            </Nav>

        </Col>
        <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="filter">
                <div className="settingContainer" style={{
                    width: "100%"
                }}>
                    
                </div>
            </Tab.Pane> 
            <Tab.Pane eventKey="rules">
            rules
            </Tab.Pane>

            </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>
  );
}


export default SpamMenuSetting;

