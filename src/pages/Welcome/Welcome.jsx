import React from 'react'
import { useLocation } from "react-router-dom";
import firebase from '../../firebase';
import 'firebase/compat/firestore';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Welcome = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const db = firebase.firestore();
    let patientLists = [];

    db.collection("patients").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(!(patientLists.find(obj => obj.nom === doc.data().nom && obj.prenom === doc.data().prenom))) {
          let currentPatient = Object.assign({}, doc.data(), {patientId: doc.id});
          patientLists.push(currentPatient);
        }
      });
    });

    console.log(patientLists)

  return (
        <div>
          <h1>Hello, {location.state.email.replace("@gmail.com","").replace(location.state.email[0], location.state.email[0].toUpperCase())}</h1>
          
          <Button variant="primary" onClick={() => {firebase.auth().signOut(); navigate("/landing")}}>Sign out</Button>
        </div>
  )
}

export default Welcome