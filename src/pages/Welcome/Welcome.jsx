import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import firebase from '../../firebase';
import 'firebase/compat/firestore';
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col, ListGroup  } from 'react-bootstrap';

const Welcome = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const [searchedPatient, setSearchedPatient] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [patientLists, setPatientLists] = useState([]);

    useEffect(() => {
      const db = firebase.firestore();
      const collectionRef = db.collection('patients');
  
      collectionRef
        .get()
        .then(querySnapshot => {
          const newData = [];
          querySnapshot.forEach(doc => {
            newData.push({ id: doc.id, ...doc.data() });
          });
          setPatientLists(newData);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const handleChange = (event) => {
        setSearchedPatient(event.target.value)
      }    

    useEffect(() => {
      const results = patientLists.filter(item =>
        (item.prenom.toLowerCase().includes(searchedPatient.toLowerCase()) && (searchedPatient !== '')) || (item.nom.toLowerCase().includes(searchedPatient.toLowerCase()) && (searchedPatient !== ''))
      );
      console.log(patientLists, searchedPatient);
      setSearchResults(results);
    }, [searchedPatient]);

  return (
        <Container>
          <Row>
            <Col>
              <h1>Hello, {location.state.email.replace("@gmail.com","").replace(location.state.email[0], location.state.email[0].toUpperCase())}</h1>
              <div className='searchPatient'>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" onChange={handleChange} value={searchedPatient} placeholder="Entrez le nom du patient" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </div>
            </Col>
            
            <Col>Creation ordonance</Col>
          </Row>
          
          <Row>
            <Col>
              <ul>
                
              </ul>
              <ListGroup>
                {searchResults.map(item => (
                  <ListGroup.Item key={item.id}>{item.nom + " " + item.prenom}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>free col</Col>
          </Row>
          <Button variant="primary" onClick={() => {firebase.auth().signOut(); navigate("/landing")}}>Sign out</Button>
        </Container>
  )
}

export default Welcome