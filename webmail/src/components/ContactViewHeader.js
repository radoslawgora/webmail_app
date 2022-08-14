import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ContactViewHeader() {
    return (
            <div style={{ width: "100%", textAlign: "left", marginLeft: "15px"}}>
                <ButtonGroup className="mb-3 mt-3">
                    <Button variant="success">Add</Button>
                    <Button>Edit</Button>
                    <Button variant="danger">Delete</Button>
               </ButtonGroup>
            </div>
    );
  }

  export default ContactViewHeader;  