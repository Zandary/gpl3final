import React from "react";
import QRcodeGenerator from "../../components/QRcode/QRcodeGenerator";
import { Container, Card, Row, Col } from "react-bootstrap";
import Commandes from "../../components/Commandes/Commandes";

const WelcomePharma = () => {
  return (
    <Container>
      <div>WelcomePharma</div>
      <Row>
        <Col>
          <Card>
            <QRcodeGenerator text="Holla" />
          </Card>
        </Col>
        <Col className="border rounded p-3">
          <Row className="mx-auto">Les commandes s'afficherons ici</Row>
          <Commandes />
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePharma;
