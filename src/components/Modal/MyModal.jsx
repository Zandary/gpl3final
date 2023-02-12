import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const MyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rechercher une pharmacie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">
          Entrez le lieu où vous êtes maintenant ou le nom d'une pharmacie que
          vous connaissez
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Pharmacie Pergola"
              className="text-center"
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
