import * as React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import GeneralMenuSetting from '../../components/settings/generalMenu';
import AccountMenuSetting from '../../components/settings/accountMenu';
import MailMenuSetting from '../../components/settings/mailMenu';
import SpamMenuSetting from '../../components/settings/spamMenu';
import AdvancedMenuSetting from '../../components/settings/advancedMenu';

function SettingsView() {
    return (
              <Tab.Container id="left-tabs-example" defaultActiveKey="general">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="general" href="#">
                          General
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="account" href="#">
                          Account
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="mail" href="#">
                          Mail
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="spam" href="#">
                          Spam
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="advanced" href="#">
                          Advanced
                        </Nav.Link>
                      </Nav.Item>

                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="general">
                           <GeneralMenuSetting />
                     </Tab.Pane> 
                      <Tab.Pane eventKey="account">
                            <AccountMenuSetting />
                      </Tab.Pane>
                      <Tab.Pane eventKey="mail">
                            <MailMenuSetting />
                        </Tab.Pane>
                        <Tab.Pane eventKey="spam">
                            <SpamMenuSetting />
                        </Tab.Pane>
                        <Tab.Pane eventKey="advanced">
                            <AdvancedMenuSetting />
                        </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            );
  }

  export default SettingsView;  