import React from "react";
import { Container, Accordion, Row, Col, Button } from "react-bootstrap";
import MyModal from "../../components/Modal/MyModal";

const WelcomePatient = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container>
      <div>Welcome {localStorage.getItem("name")}</div>;
      <Row>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Commande 1</Accordion.Header>
            <Accordion.Body>
              <Container>
                <Row>
                  <Col className="fw-bold">Dr Arnaud Provost</Col>
                  <Col></Col>
                  <Col>Adresse1</Col>
                </Row>
                <Row className="border-bottom">
                  <Col>Medecin generaliste</Col>
                  <Col></Col>
                  <Col>Telephone</Col>
                </Row>
                <Row className="pt-2">
                  <Row>
                    <Col>Aline Durant</Col>
                    <Col>Millau, le 13/07/12</Col>
                  </Row>
                  <Row>
                    <Col>Adresse Aline</Col>
                    <Col>Telephone Aline</Col>
                  </Row>
                </Row>
                <Row className="pt-3">
                  <ul className="list-group">
                    <li className="list-group-item">Placeholder text</li>
                    <li className="list-group-item">Placeholder text</li>
                    <li className="list-group-item">Placeholder text</li>
                    <li className="list-group-item">Placeholder text</li>
                  </ul>
                </Row>
                <Row>
                  <Button type="submit" onClick={() => setModalShow(true)}>
                    Commander auprès d'une pharmacie
                  </Button>
                  <MyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Comman=de 2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Commande 3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default WelcomePatient;
