import React from "react";
import { Col, Button, Row, Container, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./LandingPage.css";
import "../../index.css";

const LandingPage = () => {
  return (
    <div className="fullheight pt-5">
      <Container className="fullheight">
        <Row className="maxHeight">
          <Col className="maxHeight fullheight align-items-center ">
            <Card className="text-center maxHeight d-inline-block">
              <Card.Body className="maxHeight">
                <Card.Title>Docteur</Card.Title>
                <Card.Text>
                  Vous êtes docteur? Vous voulez avoir un outil pour saisir et
                  envoyer votre ordance rapidement?
                </Card.Text>
                <LinkContainer to="/doctorLogin">
                  <Button size="lg" variant="success">
                    Docteur
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col className="maxHeight align-items-center">
            <Card className="text-center maxHeight">
              <Card.Body>
                <Card.Title>Pharmacie</Card.Title>
                <Card.Text>Vous êtes pharmacien?</Card.Text>
                <LinkContainer to="/pharmaLogin">
                  <Button size="lg" variant="success">
                    Pharmacien
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center maxHeight my-auto">
              <Card.Body>
                <Card.Title>Patient</Card.Title>
                <Card.Text>
                  Vous êtes à la recherche d'une façon de recevoir votre
                  ordonnance rapidement et pouvoir la conserver? Vous voulez
                  avoir un outil pour saisir et envoyer votre ordance
                  rapidement?
                </Card.Text>
                <LinkContainer to="/patientLogin">
                  <Button size="lg" variant="success">
                    Patient
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p>Test</p>
      </Container>
    </div>
  );
};

export default LandingPage;
