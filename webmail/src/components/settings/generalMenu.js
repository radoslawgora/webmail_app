import * as React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';



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
            <div className="settingContainer">
                    <h4>User interface settings</h4>
                        <Table responsive>
                            <tbody >
                                <tr>
                                    <td>
                                        <Form.Label>Language: </Form.Label>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1">English</option>
                                            <option value="2" disabled>Polish</option>
                                        </Form.Select>
                                    </td>
                                </tr>    
                                <tr>
                                    <td>
                                        <Form.Label>Time zone: </Form.Label>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="Default select example" defaultValue={4}>
                                            <option value="1">UTC + 3H</option>
                                            <option value="2">UTC + 2H</option>
                                            <option value="3">UTC + 1H</option>
                                            <option value="4">UTC 0</option>
                                            <option value="5">UTC - 1H</option>
                                            <option value="6">UTC - 2H</option>
                                            <option value="7">UTC - 3H</option>
                                        </Form.Select>
                                    </td>
                                </tr>  
                                <tr>
                                    <td>
                                        <Form.Label>Date format: </Form.Label>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="Default select example" defaultValue={1}>
                                            <option value="1">DD-MM-YYYY</option>
                                            <option value="2">MM-DD-YYYY</option>
                                            <option value="3">YYYY-MM-DD</option>
                                        </Form.Select>
                                    </td>
                                </tr> 
                            </tbody>
                    </Table>
                </div>
            </Tab.Pane> 
            <Tab.Pane eventKey="mailboxView">
            <div className="settingContainer">
                    <h4>User interface settings</h4>
                        <Table responsive>
                            <tbody >
                                <tr>
                                    <td>
                                        <Form.Label>Mark messages as read </Form.Label>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="Default select example" defaultValue={2}>
                                            <option value="1">Never</option>
                                            <option value="2">immediately</option>
                                            <option value="3">after 5 seconds</option>
                                            <option value="4">after 10 seconds</option>
                                            <option value="5">after 20 seconds</option>
                                            <option value="6">after 30 seconds</option>
                                        </Form.Select>
                                    </td>
                                </tr>    
                                <tr>
                                    <td>
                                        <Form.Label>Open message in new window: </Form.Label>
                                    </td>
                                    <td>
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </td>
                                </tr>  
                                <tr>
                                    <td>
                                        <Form.Label>Display HTML: </Form.Label>
                                    </td>
                                    <td>
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </td>
                                </tr>  
                            </tbody>
                    </Table>
                </div>
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

