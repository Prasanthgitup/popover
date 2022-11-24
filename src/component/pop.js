import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const Pop = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/signup");
   
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={refreshPage}>
            Leave
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Pop;


