import React, { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  Row,
  Col,
  Button,
  ListGroup,
} from "react-bootstrap";
import MyModal from "../../components/Modal/MyModal";
import firebase from "../../firebase";
import "firebase/compat/database";

const WelcomePatient = () => {
  const [modalShow, setModalShow] = useState(false);
  const [patient, setPatient] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [ordonnances, setOrdonnances] = useState([]);
  const [prescription, setPrescription] = useState([]);

  console.log(localStorage.getItem("email"));

  const database = firebase.database();
  const ref = database.ref("patients");
  let ord = [];

  useEffect(() => {
    ref.on("value", (snapshot) => {
      if (snapshot.exists()) {
        let tmp = [];
        let currentItem = snapshot.val();
        console.log(currentItem);
        for (const key in currentItem) {
          tmp.push(JSON.parse(JSON.stringify(currentItem[key])));
        }
        console.log(tmp);
        tmp.forEach((account) => {
          if (account.mail === localStorage.getItem("email")) {
            setCurrentUser(account);

            for (let key in account.ordonnances) {
              console.log(Array(account.ordonnances)[0][key]);
              ord.push(Array(account.ordonnances)[0][key]);
            }

            setOrdonnances(ord);
            setPrescription(JSON.parse(JSON.stringify(Array(ordonnances)[0])));
          } else {
            console.log("ERROR BE MATSIRAVINA");
          }
        });
      } else {
        console.log("No data available");
      }
    });
  }, []);

  console.log(localStorage.getItem("email"));
  console.log(JSON.parse(JSON.stringify(Array(ordonnances)[0])));
  let tab = JSON.parse(JSON.stringify(Array(ordonnances)[0]));

  console.log(prescription[0].denomination);

  function ItemList({ items }) {
    let listItems = [];

    items.forEach((item) => {
      listItems.push(
        <ListGroup.Item key={item.id}>{item.denomination}</ListGroup.Item>
      );
    });
    return <ListGroup>{listItems}</ListGroup>;
  }

  return (
    <Container className="mt-2">
      <h3>Bonjour {currentUser.prenom}</h3>
      <p>Voici la liste de vos dernières ordonnances</p>
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
                  <ListGroup>
                    {/* {prescription.map((item) => (
                      <ListGroup.Item key={item.id}>
                        {String(item.designation)}
                      </ListGroup.Item>
                    ))} */}
                    <ItemList items={prescription} />
                  </ListGroup>
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
