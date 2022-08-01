import * as React from "react";
import { Link } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';
import { Form, FloatingLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


function NewMessageView() {

    return (
        <>
            <div className="newMessageContainer" style={{width: "700px", margin: "auto auto"}}>
                <Form>
                    <div className="closeButtonContainer" style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Link to="/home"  className="submitLink">
                            <CloseButton style={{padding: "25px"}}></CloseButton>
                        </Link>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                        width: "90%", margin: "auto auto"
                    }}>
                        <FloatingLabel controlId="floatingSelect" label="From:" style={{ textAlign: "left" }}>
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">example@gmail.com</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                        width: "90%", margin: "auto auto"
                    }}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="To:"
                            className="mb-3"
                            style={{
                                textAlign: "left"
                            }}
                        >
                        <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                        width: "90%", margin: "auto auto"
                    }}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="CC:"
                            className="mb-3"
                            style={{
                                textAlign: "left"
                            }}
                        >
                        <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                        width: "90%", margin: "auto auto"
                    }}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="BCC:"
                            className="mb-3"
                            style={{
                                textAlign: "left"
                            }}
                        >
                        <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                        width: "90%", margin: "auto auto",
                        textAlign: "left"
                    }}>
                         <FloatingLabel controlId="floatingTextarea" label="Type a message...">
                            <Form.Control
                            as="textarea"
                            placeholder="Type a message..."
                            style={{ height: '300px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3" style={{
                        width: "90%", margin: "auto auto",
                        textAlign: "left"
                    }}>
                        <Form.Label>Attachments:</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <div className="sendButtonContainer" style={{display: "flex", justifyContent: "right", marginRight: "35px"}}>
                        <Button variant="primary" type="submit" className="mb-3">
                            Send message
                        </Button>
                    </div>
                    
                </Form>
            </div>
        </>
    );
  }

  export default NewMessageView;  