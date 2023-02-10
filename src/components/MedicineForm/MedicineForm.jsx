import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Stack,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./MedicineForm.css";

const MedicineForm = (props) => {
  return (
    <Card bsClass="medForm">
      <Card.Header>Medicine 1</Card.Header>
      <Card.Body>
        <Container>
          <Stack gap={2}>
            <Form.Control type="text" placeholder="Denomination" size="sm" />
            <Form.Control type="text" placeholder="Forme" size="sm" />
            <InputGroup size="sm">
              <Form.Control
                aria-label="First name"
                placeholder="Quantité à prendre"
                size="sm"
              />
              <InputGroup.Text>tous les</InputGroup.Text>
              <Form.Control
                aria-label="Last name"
                placeholder="Fréquence"
                size="sm"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                aria-label="Text input with dropdown button"
                size="sm"
              />

              <DropdownButton
                variant="outline-secondary"
                title="Jour"
                id="input-group-dropdown-2"
                align="end"
                size="sm"
              >
                <Dropdown.Item href="#" size="sm">
                  Jours
                </Dropdown.Item>
                <Dropdown.Item href="#" size="sm">
                  Semaines
                </Dropdown.Item>
                <Dropdown.Item href="#" size="sm">
                  Mois
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Stack>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MedicineForm;
