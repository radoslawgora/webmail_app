import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Messages from "./inboxMessager";
import MailContent from "./mailContent";


function MailMenu() {
    return (
      <>
  
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                            Inbox
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                            Drafts
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                            Sent
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                            Spam
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                            Junk
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={4}>

                        <Messages />

                    </Col>
                    <Col sm={5}>

                            <MailContent />

                    </Col>
                    <Col sm={1}>

                    </Col>
                </Row>
                </Tab.Container>
      </>
    );
  }

  export default MailMenu;