import React from 'react'
import { useLocation } from "react-router-dom";
import firebase from '../../firebase';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Welcome = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state)
  return (
        <div>
          <h1>Hello, {location.state.email.replace("@gmail.com","").replace(location.state.email[0], location.state.email[0].toUpperCase())}</h1>
          <Button variant="primary" onClick={() => {firebase.auth().signOut(); navigate("/")}}>Sign out</Button>
        </div>
  )
}

export default Welcome