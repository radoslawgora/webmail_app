import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare, faTrash, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';


function MailContent() {
    const replyIcon = <FontAwesomeIcon icon={faReply} />
    const shareIcon = <FontAwesomeIcon icon={faShare} />
    const trashIcon = <FontAwesomeIcon icon={faTrash} />
    const fileIcon =  <FontAwesomeIcon icon={faFileCircleCheck} />

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
      <>
        <div className="messageViewBar" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
             <ButtonGroup aria-label="Basic example">
                  <Button variant="outline-secondary" style={{height: "50px"}}>{replyIcon}</Button>
                  <Button variant="outline-secondary" style={{height: "50px"}}>{shareIcon}</Button>
                  <Button variant="outline-danger" style={{height: "50px"}} onClick={handleShow}>{trashIcon}</Button>
             </ButtonGroup>

             <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete message</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Do you want delete this message?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
            </Modal>

              <h2 style={{
                margin: "15px",
                textAlign: "right",
              }}>New offer</h2>
        </div>
        <div className="divider" style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#176EFD",
        }}>
        </div> 
        <p style={{
          width: "100%",
          marginTop: "20px",
          textAlign: "justify",
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor pellentesque ligula. Sed mi risus, commodo eget feugiat vel, porta vitae purus. In maximus laoreet gravida. Curabitur turpis nisi, aliquet sed mattis non, molestie vitae urna. Vestibulum sed vestibulum turpis. Maecenas eget enim pellentesque, ullamcorper ligula et, vulputate turpis. Morbi et lorem ornare, rutrum diam ac, rutrum nulla. Donec id convallis nibh. Mauris dapibus vehicula orci non tincidunt.

Vestibulum quis est eu lacus lacinia tempus a et arcu. Aenean sed congue augue, at volutpat velit. Nulla eu felis nec tellus efficitur malesuada vel a quam. Ut facilisis aliquet lectus, porta lacinia lectus pulvinar id. Phasellus nulla massa, egestas et nisl eget, feugiat finibus eros. Ut ut risus sapien. Nulla varius elementum tincidunt. Donec aliquam tortor in ex pharetra, sed posuere erat finibus. Sed ut urna id orci elementum dignissim. Sed volutpat felis molestie nisi molestie egestas.</p>

        <div className="divider" style={{
                  width: "100%",
                  height: "2px",
                  marginTop: "20px",
                  backgroundColor: "#176EFD",
                }}></div>
        
        <div className="attachmentsContainer">
          <h5 style={{
            width: "100%",
            textAlign: "left",
          }}>Attachments:</h5>
          <div className="attachmentFileContainer" style={{width: "200px", paddingTop: "5px"}}>
              <div className="attachmentItem" style={{display: "inline-block", textAlign: "center", width: "100px"}}>
                {fileIcon}
                <p style={{fontSize: ".8rem"}}>fileName.pdf</p>
              </div>
              <div className="attachmentItem" style={{display: "inline-block", textAlign: "center", width: "100px"}}>
                {fileIcon}
                <p style={{fontSize: ".8rem"}}>fileName.pdf</p>
              </div>
          </div>
        </div>
        
      </>
    );
  }

  export default MailContent;   