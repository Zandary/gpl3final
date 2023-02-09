import React from 'react'
import { Col, Button, Row, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LandingPage = () => {
  return (
    <div>
        <Container fluid='sm'>
            <Row>
                <LinkContainer to="/doctorLogin">
                    <Col>
                        <Button variant="primary">Doctor</Button>
                    </Col>
                </LinkContainer>
            </Row>
            <Row>
                <LinkContainer to="/patientLogin">
                    <Col>
                        <Button variant="primary">Patient</Button>
                    </Col>
                </LinkContainer>
            </Row>
            <Row>
                <LinkContainer to="/pharmaLogin">
                    <Col>
                        <Button variant="primary">Pharmacien</Button>
                    </Col>
                </LinkContainer>
            </Row>
            <p>Test</p>
        </Container>
    </div>
  )
}

export default LandingPage