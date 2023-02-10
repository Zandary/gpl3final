import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  InputGroup,
  Card,
  Button,
} from "react-bootstrap";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import MedicineForm from "../MedicineForm/MedicineForm";

const CreateOrdonnance = (props) => {
  const [patientLists, setPatientLists] = useState([]);
  const [patient, setPatient] = useState({
    nom: "Jhon",
    prenom: "Doe",
    birth: "1988-05-08",
    gender: "Homme",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const collectionRef = db.collection("patients");

    collectionRef
      .get()
      .then((querySnapshot) => {
        const newData = [];
        querySnapshot.forEach((doc) => {
          newData.push({ id: doc.id, ...doc.data() });
        });
        setPatientLists(newData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    patientLists.forEach((element) => {
      if (
        (element.nom + " " + element.prenom).toLowerCase() ===
        props.patient.toLowerCase()
      ) {
        setPatient(element);
      }
    });
  }, [props.patient, patientLists]);

  function patientAge(params) {
    let currentYear = new Date().getFullYear();
    let yearOfBirth = new Date(params).getFullYear();
    return currentYear - yearOfBirth;
  }

  return (
    <Container>
      <Stack gap={2}>
        <Row>
          <Card>
            <Card.Header>Informations sur le patient</Card.Header>
            <Card.Body>
              <Stack gap={2}>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Nom et Prenom"
                      value={patient.nom + " " + patient.prenom}
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                      size="sm"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Genre"
                      value={
                        patient.gender +
                        " " +
                        patientAge(patient.birth) +
                        " ans"
                      }
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                      size="sm"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <InputGroup size="sm">
                      <InputGroup.Text id="basic-addon1">
                        Taille en cm
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        min="0"
                        placeholder="165"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        size="sm"
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup size="sm">
                      <InputGroup.Text id="basic-addon1">
                        Poids en Kg
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        min="0"
                        placeholder="68"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        size="sm"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Stack>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card>
            <Card.Header>Saisissez les médicaments à prescrire ici</Card.Header>
            <Card.Body className="mh-25 overflow-auto">
              <MedicineForm />
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="success">Envoyer l'ordonnance</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Stack>
    </Container>
  );
};

export default CreateOrdonnance;
