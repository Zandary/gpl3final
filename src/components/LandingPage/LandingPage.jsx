import React from 'react'
import { Col, Button, Row, Container, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LandingPage = () => {
  return (
    <div>
        <Container>
            <Row>
                    <Col>
                        <Card className='text-center'>
                            <Card.Body>
                                <Card.Title>Docteur</Card.Title>
                                <Card.Text>
                                    Vous êtes docteur? Vous voulez avoir un outil pour saisir et envoyer votre ordance rapidement?
                                </Card.Text>
                                <LinkContainer to="/doctorLogin">
                                    <Button size="lg" variant="success">Docteur</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='text-center'>
                            <Card.Body>
                                <Card.Title>Pharmacie</Card.Title>
                                <Card.Text>
                                    Vous êtes pharmacien?
                                </Card.Text>
                                <LinkContainer to="/pharmaLogin">
                                    <Button size="lg" variant="success">Pharmacien</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='text-center'>
                            <Card.Body>
                                <Card.Title>Patient</Card.Title>
                                <Card.Text>
                                    Vous êtes à la recherche d'une façon de recevoir votre ordonnance rapidement et pouvoir la conserver? Vous voulez avoir un outil pour saisir et envoyer votre ordance rapidement?
                                </Card.Text>
                                <LinkContainer to="/patientLogin">
                                    <Button size="lg" variant="success">Patient</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            <p>Test</p>
        </Container>
    </div>
  )
}

export default LandingPage