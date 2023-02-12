import React, { useState } from "react";
import firebase from "firebase/compat/app";
// import firebase from '../../firebase'
import "firebase/auth";
import "firebase/compat/firestore";
import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [alert, setAlert] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    mail: "",
    nom: "",
    prenom: "",
    birth: new Date(),
  });
  const [patientGender, setPatientGender] = useState("homme");
  const navigate = useNavigate();

  const [doctorInfo, setDoctorInfo] = useState({
    nom: "",
    prenom: "",
    mail: "",
    specialisation: "",
    telephone: "",
    addresse: "",
  });
  const [user, setUser] = useState(null);

  if (props.user === "patient") {
    const handlePatientSignUp = async (event) => {
      event.preventDefault();
      //add email and pwd in firebase auth
      try {
        if (password1 === password2) {
          const response = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password1);
          setUser(response.user);
        } else {
          console.log("Password Not Matching");
        }
      } catch (error) {
        console.error(error);
      }

      //add other patient userinfo in realtime db
      try {
        const db = getDatabase();
        set(ref(db, `patients/${patientInfo.nom + " " + patientInfo.prenom}`), {
          mail: email,
          nom: patientInfo.nom,
          prenom: patientInfo.prenom,
          birth: patientInfo.birth,
          gender: patientGender,
          ordonnances: [
            {
              denomination: "",
              forme: "",
              quantite: "",
              frequence: "",
              duree: 0,
            },
          ],
        });
        localStorage.setItem("user", "patient");
        localStorage.setItem("name", patientInfo.nom);
        localStorage.setItem("isLoggedIn", "true");
      } catch (error) {
        console.error(error);
      }
    };

    //Email
    function validateEmail(email) {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email.value)) {
        setAlert("Invalid email address");
        return false;
      }
      return true;
    }

    return (
      <Container className="bordure">
        {user ? (
          <>{navigate("/welcomePatient", { replace: true })}</>
        ) : (
          <form onSubmit={handlePatientSignUp}>
            <Card>
              <Card.Header>Pour vous incrire, c'est ici.</Card.Header>
              <Card.Body>
                <Stack gap={2}>
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    size="sm"
                  />
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    value={password1}
                    onChange={(event) => setPassword1(event.target.value)}
                    size="sm"
                  />
                  <Form.Control
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    value={password2}
                    onChange={(event) => {
                      setPassword2(event.target.value);
                    }}
                    size="sm"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    value={patientInfo.nom}
                    onChange={(event) =>
                      setPatientInfo({
                        ...patientInfo,
                        nom: event.target.value,
                      })
                    }
                    size="sm"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Prenom"
                    value={patientInfo.prenom}
                    onChange={(event) =>
                      setPatientInfo({
                        ...patientInfo,
                        prenom: event.target.value,
                      })
                    }
                    size="sm"
                  />
                  <div>
                    <label htmlFor="start">Date de naissance:</label>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value={patientInfo.birth}
                      onChange={(event) =>
                        setPatientInfo({
                          ...patientInfo,
                          birth: event.target.value,
                        })
                      }
                      min="1900-01-01"
                      max="2023-12-31"
                      className="ml-2"
                    />
                  </div>

                  <Container>
                    <Row>
                      <Col>
                        <input
                          type="radio"
                          id="h"
                          name="fav_language"
                          value="homme"
                          onChange={(event) => {
                            setPatientGender(event.target.value);
                          }}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="h">Homme</label>
                      </Col>
                      <Col>
                        <input
                          type="radio"
                          id="f"
                          name="fav_language"
                          value="femme"
                          onChange={(event) => {
                            setPatientGender(event.target.value);
                          }}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="f">Femme</label>
                      </Col>
                    </Row>
                  </Container>

                  <p>{alert}</p>

                  <Button variant="success" type="submit">
                    Créer mon compte
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </form>
        )}
      </Container>
    );
  } else if (props.user === "doctor") {
    ///////////////////////////////////////////////////////////
    //////////  DOCTOR SECTION ////////////////////////////////
    //////////////////////////////////////////////////////////
    const handleSignUp = async (event) => {
      event.preventDefault();
      //add email and pwd in firebase auth
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password1);
        setUser(response.user);

        localStorage.setItem("user", "doctor");
        localStorage.setItem("name", doctorInfo.nom);
        localStorage.setItem("isLoggedIn", "true");
      } catch (error) {
        console.error(error);
      }

      //add other doctorInfo in firestore
      console.log(doctorInfo.nom, doctorInfo.prenom);
      try {
        const db = getDatabase();
        set(ref(db, `doctors/${doctorInfo.nom + " " + doctorInfo.prenom}`), {
          nom: doctorInfo.nom,
          prenom: doctorInfo.prenom,
          mail: email,
          specialisation: doctorInfo.specialisation,
          telephone: doctorInfo.telephone,
          addresse: doctorInfo.addresse,
        });
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div>
        {user ? (
          <div>
            <h1>Hello, {user.email}</h1>
            <Button variant="success" onClick={() => firebase.auth().signOut()}>
              Sign out
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSignUp}>
            <Card>
              <Card.Header>Pour vous incrire, c'est ici.</Card.Header>
              <Card.Body>
                <Stack gap={2}>
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    size="sm"
                  />
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    value={password1}
                    onChange={(event) => setPassword1(event.target.value)}
                    size="sm"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    value={doctorInfo.nom}
                    onChange={(event) =>
                      setDoctorInfo({ ...doctorInfo, nom: event.target.value })
                    }
                    size="sm"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Prenom"
                    value={doctorInfo.prenom}
                    onChange={(event) =>
                      setDoctorInfo({
                        ...doctorInfo,
                        prenom: event.target.value,
                      })
                    }
                    size="sm"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Spécialisation"
                    value={doctorInfo.specialisation}
                    onChange={(event) =>
                      setDoctorInfo({
                        ...doctorInfo,
                        specialisation: event.target.value,
                      })
                    }
                    size="sm"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Telephone"
                    value={doctorInfo.telephone}
                    onChange={(event) =>
                      setDoctorInfo({
                        ...doctorInfo,
                        telephone: event.target.value,
                      })
                    }
                    size="sm"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Adresse"
                    value={doctorInfo.addresse}
                    onChange={(event) =>
                      setDoctorInfo({
                        ...doctorInfo,
                        addresse: event.target.value,
                      })
                    }
                    size="sm"
                  />

                  <Button variant="success" type="submit">
                    Créer mon compte
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </form>
        )}
      </div>
    );
  } else {
    return <div>Pharma</div>;
  }
};

export default Signup;
