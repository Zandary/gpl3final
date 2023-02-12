import React from "react";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  const user = props.user ? props.user : localStorage.getItem();
  return (
    <Container className="Home">
      <h1>Bienvenue sur E-Pharma</h1>
      <Row>
        <Col>
          <Login user={user} />
        </Col>
        <Col>
          <Signup user={props.user} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
