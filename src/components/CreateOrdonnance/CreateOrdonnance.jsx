import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  InputGroup,
  Card,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "firebase/compat/firestore";
import { getDatabase, ref, push, child, get } from "firebase/database";
// import MedicineForm from "../MedicineForm/MedicineForm";

const CreateOrdonnance = (props) => {
  const [patientLists, setPatientLists] = useState([]);
  const [patient, setPatient] = useState({
    nom: "Jhon",
    prenom: "Doe",
    birth: "1988-05-08",
    gender: "Homme",
    medicaments: {
      denomination: "",
      duree: 0,
      forme: "",
      frequence: "",
      quantite: "",
      doctor: "",
    },
  });
  console.log(patient.nom, patient.prenom);
  //get all record in firestore {could not working anymore}
  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const collectionRef = db.collection("patients");

  //   collectionRef
  //     .get()
  //     .then((querySnapshot) => {
  //       const newData = [];
  //       querySnapshot.forEach((doc) => {
  //         newData.push({ id: doc.id, ...doc.data() });
  //       });
  //       setPatientLists(newData);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   patientLists.forEach((element) => {
  //     if (
  //       (element.nom + " " + element.prenom).toLowerCase() ===
  //       props.patient.toLowerCase()
  //     ) {
  //       setPatient(element);
  //     }
  //   });
  // }, [props.patient, patientLists]);

  function patientAge(params) {
    let currentYear = new Date().getFullYear();
    let yearOfBirth = new Date(params).getFullYear();
    return currentYear - yearOfBirth;
  }

  function addMedicineInRTDB(e) {
    e.preventDefault();
    const db = getDatabase();
    push(
      ref(
        db,
        `patients/${props.patientNom + " " + props.patientPrenom}/ordonnances`
      ),
      {
        denomination: patient.medicaments.denomination,
        forme: patient.medicaments.forme,
        quantite: patient.medicaments.quantite,
        frequence: patient.medicaments.frequence,
        duree: patient.medicaments.duree,
      }
    );
  }

  return (
    <Container>
      <form onSubmit={addMedicineInRTDB}>
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
                        value={props.patientNom + " " + props.patientPrenom}
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
                          props.patientGenre +
                          " " +
                          patientAge(props.patientBirth) +
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
              <Card.Header>
                Saisissez les médicaments à prescrire ici
              </Card.Header>
              <Card.Body className="mh-25 overflow-auto">
                {/* Ajouter les médicaments dans la base du patient */}
                <Card bsclass="medForm">
                  <Card.Header>Medicine 1</Card.Header>
                  <Card.Body>
                    <Container>
                      <Stack gap={2}>
                        <Form.Control
                          type="text"
                          placeholder="Denomination"
                          size="sm"
                          value={patient.medicaments.denomination}
                          onChange={(event) => {
                            setPatient({
                              ...patient,
                              medicaments: {
                                ...patient.medicaments,
                                denomination: event.target.value,
                              },
                            });
                          }}
                        />
                        <Form.Control
                          type="text"
                          placeholder="Forme"
                          size="sm"
                          value={patient.medicaments.forme}
                          onChange={(event) => {
                            setPatient({
                              ...patient,
                              medicaments: {
                                ...patient.medicaments,
                                forme: event.target.value,
                              },
                            });
                          }}
                        />
                        <InputGroup size="sm">
                          <Form.Control
                            aria-label="First name"
                            placeholder="Quantité à prendre"
                            size="sm"
                            value={patient.medicaments.quantite}
                            onChange={(event) => {
                              setPatient({
                                ...patient,
                                medicaments: {
                                  ...patient.medicaments,
                                  quantite: event.target.value,
                                },
                              });
                            }}
                          />
                          <InputGroup.Text>tous les</InputGroup.Text>
                          <Form.Control
                            aria-label="Last name"
                            placeholder="Fréquence"
                            size="sm"
                            value={patient.medicaments.frequence}
                            onChange={(event) => {
                              setPatient({
                                ...patient,
                                medicaments: {
                                  ...patient.medicaments,
                                  frequence: event.target.value,
                                },
                              });
                            }}
                          />
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <Form.Control
                            type="number"
                            aria-label="Text input with dropdown button"
                            size="sm"
                            placeholder="Durée"
                            value={patient.medicaments.duree}
                            onChange={(event) => {
                              setPatient({
                                ...patient,
                                medicaments: {
                                  ...patient.medicaments,
                                  duree: event.target.value,
                                },
                              });
                            }}
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
              </Card.Body>
              <Card.Footer className="text-muted">
                <Button variant="success" type="submit">
                  Envoyer l'ordonnance
                </Button>
              </Card.Footer>
            </Card>
          </Row>
        </Stack>
      </form>
    </Container>
  );
};

export default CreateOrdonnance;
