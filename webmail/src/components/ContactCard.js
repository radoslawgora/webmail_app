import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import manImg from "../assets/man1.png";

function ContactCard() {
    return (
        <Card style={{ width: '80%', marginLeft: "auto", marginRight: "auto"}}>
            <Card.Img variant="top" src={manImg} style={{ width: "20%", margin: "40px auto" }}/>
                <Card.Body>
                <Card.Title className="mb-4">Ann Kowalsky</Card.Title>
                <Card.Text className="mb-4">
                    Secretary
                </Card.Text>
                <Button variant="primary">Write the message</Button>
            </Card.Body>
      </Card>
    );
  }

  export default ContactCard;  